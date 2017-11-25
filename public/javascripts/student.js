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
    var doc = new jsPDF();

    for(key in investments){
      var product = investments[key];
      
      var formData = 'index='+product.index+'&value='+product.value.formatMoney(0)+'&name='+key;
      $.post('/api/student/invest', formData, function(res){
        alert(JSON.stringify(res));
        Materialize.toast(res.message, 4000, 'green lighten-1');
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
	$.get('/api/student/products', function(result){
	 	for(i = 0; i < result.length; i++){
	 		$('#holder').append(
				$('<div>')
					.attr('class', 'card-panel prods')
					.append(
            $('<header>')
              .append(
                $('<h6>')
                  .attr('class', 'grpnum')
                  .text('Group ' + result[i].groupNumber)
              )
            ,
            $('<br>')
            ,
            $('<br>')
            ,
						$('<div>')	
							.attr('class', 'center')
							.append(
								$('<img>')
									.attr('class', 'logos')
									.attr('src', 'public/uploads/'+result[i].imageFile)
						  )
						,
						$('<p>')
              .attr('class', 'center')
							.text(result[i].productName)
						,
						$('<textarea>')
              .attr('readonly', 'true')
              .text(result[i].productDesc)
            ,
            $('<form>')
              .attr('id', i)
              .attr('class', 'investForm'+i)
              .attr('name', result[i].productName)
              .append(
                $('<input>')
                  .attr('type', 'number')
                  .attr('id', 'value'+i)
                  .attr('min', 0)
                  .attr('max', max)
                  .attr('step', 100)
                  .attr('value', 0)
                ,
                $('<input>')
                  .attr('type', 'submit')
                  .attr('id', 'invest'+i)
                  .attr('class', 'btn waves-effect waves-light validate yellow lighten-1')
                  .attr('value', 'INVEST')
              )
					)	
			)
      $('#investForm'+i).on('submit', function(e){
        e.preventDefault();
        var i = this.id;
        var val = parseInt($('#value'+i).val());
        if(Object.keys(investments).length >= 5 && !investments[this.name])
          Materialize.toast("Maximum of 5 products", 4000, 'red lighten-1');
        else if(val == 0)
          if(!investments[this.name])
            Materialize.toast("Cannot invest $0", 4000, 'red lighten-1');
          else{
            delete investments[this.name];
            updateSummary();
            Materialize.toast("Removed investment in " + this.name, 4000, 'green lighten-1');
          }
        else if(val > max-total)
          Materialize.toast("Amount is greater than remaining balance", 4000, 'red lighten-1');
        else{
          Materialize.toast("Successfully placed $" + val.formatMoney(0) + " in " + this.name, 4000, 'green lighten-1');
          investments[this.name] = {value:val, index:i};
          updateSummary();
        }
      });
	 	}
	});
}

function updateSummary(){
  $('#products').empty();
  total = 0;
  Object.keys(investments).forEach(function(key){
    $('#products').append($('<h6>').text(key + ' - $ ' + investments[key].value));
    total += investments[key].value;
  });
  var balance = max - total;
  $('#balance').text('$ ' + balance.formatMoney(0));
}


Number.prototype.formatMoney = function(c, d, t){
  var n = this, c = isNaN(c = Math.abs(c)) ? 2 : c, d = d == undefined ? "." : d, t = t == undefined ? "," : t, s = n < 0 ? "-" : "", i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))), j = (j = i.length) > 3 ? j % 3 : 0;
  return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

/*

*/