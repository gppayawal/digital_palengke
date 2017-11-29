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
  else if(confirm('Are you sure you want to finalize investments? This action cannot be undone')){
    try{
      var body = 'investments='+JSON.stringify(investments);
      $.post('/api/student/invest', body, function(res){
        if(res.status == 200){
          $.post('/api/student/checkout', function(result){
            if(result.status == 200)
              Materialize.toast('Investments finalized' , 4000, 'green lighten-1', function(){
                alert('You will be logged out now. Thank you for participationg');
                window.location.href = '/api/student/logout';
              });
            else
              throw result;
          });
        } else 
          throw res;
      });
    }catch(err){
      Materialize.toast('Error checking out', 4000, 'red lighten-1');
    }
  }
}

function viewProducts(){
	var i = 0;
	$('#holder').empty();
	$.get('/api/student/products', function(res){
	 	$.get('/public/templates/productStudent.html', function(data){
      $.template('productTemplate', data);
      res.array.forEach(function(product){
        product.val = res.investments[product.productName]? res.investments[product.productName] : 0;
        product.shortName = product.productName.shorthand();
        $.tmpl('productTemplate', product).appendTo('#holder');
      });
    });
    investments = res.investments;
    updateSummary();
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
      $('<h12>')
        .text(key + ' - $ ' + investments[key].formatMoney(0))
      ,
      $('<a>')
        .attr('id', key)
        .attr('class', 'remove btn-flat btn-small waves-effect waves-light')
        .append(
            $('<i>')
              .attr('class', 'material-icons')
              .text('remove_circle_outline')
        )
      )
    );
    total += investments[key];
  });

  var balance = max - total;
  $('#balance').text('$ ' + balance.formatMoney(0));
  var body = 'investments='+JSON.stringify(investments);
  $.post('/api/student/update', body, function(res){
    if(res.status != 200) 
      Materialize.toast("Error in updating updating summary", 4000, 'red lighten-1');
  })
}

$(document).on('click', '.remove', function(){
    var id = this.id;
    delete investments[id];
    console.log(investments);
    Materialize.toast('Removed investment in ' + id, 3000, 'blue lighten-1'); 
    $('#value-'+id.shorthand()).val(0);
    updateSummary();
});

Number.prototype.formatMoney = function(c, d, t){
  var n = this, c = isNaN(c = Math.abs(c)) ? 2 : c, d = d == undefined ? "." : d, t = t == undefined ? "," : t, s = n < 0 ? "-" : "", i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))), j = (j = i.length) > 3 ? j % 3 : 0;
  return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

String.prototype.shorthand = function(){
  var ar = this.split(' ');
  return ar[0].replace(/\W/g, '');
}