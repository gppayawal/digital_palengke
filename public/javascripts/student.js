var max = 1000000
var total = 0;
var investments = {};

$(document).ready(function(){
  $('#balance').text('$ ' + max.formatMoney(0));
  $('#checkout').on('click', checkout);
  viewProducts();
});

function checkout(e){
  e.preventDefault();
  if(Object.keys(investments).length < 3)
    Materialize.toast("Minimum of 3 products", 4000, 'red lighten-1');
  else if(confirm('Are you sure you want to check out?')){
    for(key in investments){
      var value = investments[key];
      
      var formData = 'value='+value.formatMoney(0)+'&name='+key;
      $.post('/api/student/invest', formData, function(res){
        Materialize.toast(res.message, 4000, 'blue lighten-1');
        $('#checkout').unbind('click');
        $('#checkout').on('click', function(){
          Materialize.toast('You have already checked out', 4000, 'red lighten-1');
        });
      });
    }
  }
}

function viewProducts(){
	var i = 0;
	$('#holder').empty();
	$.get('/api/student/products', function(products){
	 	$.get('/public/templates/productStudent.html', function(data){
      $.template('productTemplate', data);
      products.forEach(function(product){
        $.tmpl('productTemplate', product).appendTo('#holder');
      });
    })
  });
}

$(document).on('submit', '.invest', function(e){
  e.preventDefault();
  var formData = $(this).serializeArray();
  var data = {};

  formData.forEach(function(temp){
      data[temp.name] = temp.value;
  });
  data.value = parseInt(data.value);

  if(investments[data.name]){
    total -= investments[data.name];
  }

  if(Object.keys(investments).length >= 10){
    Materialize.toast("Maximum of 10 products", 4000, 'red lighten-1');
    $(this).children('input[type=number]').val(0);
  }
  else if(data.value == 0){
    if(investments[data.name]){
      delete investments[data.name];
      updateSummary();
      Materialize.toast("Removed investment in " + data.name, 4000, 'blue lighten-1');
    } else 
      Materialize.toast("Cannot invest $0", 4000, 'red lighten-1');
  } else if(investments[data.name] && data.value == investments[data.name]){
      Materialize.toast("Already invested " + data.value + " in " + data.name, 4000, 'blue lighten-1');
  } else if(data.value > max-total){
      Materialize.toast("Amount is greater than remaining balance", 4000, 'red lighten-1');
      var val = investments[data.name]? investments[data.name] : 0;
      $(this).children('input[type=number]').val(val);
      total += val;
  } else {
    Materialize.toast("Successfully placed $" + data.value.formatMoney(0) + " in " + data.name, 4000, 'blue lighten-1');
    investments[data.name] = data.value;
    updateSummary();
  }

  return false;
});


function updateSummary(){
  $('#products').empty();
  total = 0;
  Object.keys(investments).forEach(function(key){
    $('#products').append(
      $('<div>')
      .attr('id', 'entry'+key)
      .append(
      $('<a>')
        .attr('id', key)
        .attr('class', 'remove btn-flat btn-small waves-effect waves-light')
        .append(
            $('<i>')
              .attr('class', 'material-icons')
              .text('remove_circle_outline')
        )
      ,  
      $('<h12>')
        .text(key + ' - $ ' + investments[key])
      ,
      $('<br>')  
    )
    );
    total += investments[key];
  });

  var balance = max - total;
  $('#balance').text('$ ' + balance.formatMoney(0));
}

$(document).on('click', '.remove', function(){
    var id = this.id;

    $('#entry'+id).remove();

    Object.keys(investments).forEach(function(key){
      var entry = null;
      if(key == id){
        delete investments[key];
        Materialize.toast('Removed product investment', 3000, 'red lighten-1'); 
      }  
    });

    updateSummary();
});

Number.prototype.formatMoney = function(c, d, t){
  var n = this, c = isNaN(c = Math.abs(c)) ? 2 : c, d = d == undefined ? "." : d, t = t == undefined ? "," : t, s = n < 0 ? "-" : "", i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))), j = (j = i.length) > 3 ? j % 3 : 0;
  return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};