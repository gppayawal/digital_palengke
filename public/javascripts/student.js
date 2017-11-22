var groupNumber;
var day1 = ['1','2','3','7','10','12','14','17','18'];
var day2 = ['4','5','6','8','11','12','15','16'];
var otherGroup;
var balance = 100000;

$(document).ready(function(){
	$('.carousel').carousel();
	$('.carousel.carousel-slider').carousel({
			fullWidth: true,
            dist:0,
            shift:0,
            padding:20,

    });
  groupNumber = prompt("Please enter your group number");
  otherGroup = day1.indexOf(groupNumber) != -1? day2 : day1;
  $('#balance').text('$ ' + balance.formatMoney(0));
  viewProducts();
});

function viewProducts(){
	var i = 0;
	$('#holder').empty();
	$.getJSON( "public/products.json", function(result){
	 	for(i = 0; i < result.length; i++){
	 		if(otherGroup.indexOf(result[i].groupNumber) == -1)
	 			continue;
	 		$('#holder').append(
				$('<div>')
					.attr('class', 'card-panel prods')
					.append(
						$('<div>')	
							.attr('class', 'center')
							.append(
								$('<img>')
									.attr('class', 'logos')
									.attr('src', 'public/uploads/'+result[i].imageFile)
						  )
						,
						$('<br>')
						,
						$('<h6>')
							.text('Group ' + result[i].groupNumber)
						,
						$('<p>')
							.text('Product Name: ' + result[i].productName)
						,
						$('<span>')
							.text(result[i].productDesc)
            ,
            $('<form>')
              .attr('id', i)
              .attr('class', 'investForm')
              .attr('name', result[i].productName)
              .append(
                $('<input>')
                  .attr('type', 'number')
                  .attr('id', 'value'+i)
                  .attr('min', 0)
                  .attr('max', 100000)
                  .attr('step', 100)
                  .attr('value', 0)
                ,
                $('<input>')
                  .attr('type', 'submit')
                  .attr('id', 'invest'+i)
                  .attr('class', 'btn waves-effect waves-light validate yellow lighten-1')
                  .attr('value', 'INVEST')
                ,
                $('input')
                  .attr('id', 'hidden'+i)
                  .attr('type', 'hidden')
                  .attr('value', result[i].productName)
              )
					)	
			)
      $('.investForm').on('submit', function(e){
        e.preventDefault();
        var i = this.id;
        var val = parseInt($('#value'+i).val());
        if(val == 0)
          Materialize.toast("Cannot invest $0", 4000, 'red lighten-1');
        else if(val > balance)
          Materialize.toast("Investment is greater than remaining balance", 4000, 'red lighten-1');
        else{
          balance -= val;
          $('#balance').text('$ ' + balance.formatMoney(0));
          Materialize.toast("Successfully invested $" + val.formatMoney(0) + " in " + this.name, 4000, 'green lighten-1');
        }
      });
	 	}
	});
}


Number.prototype.formatMoney = function(c, d, t){
var n = this, 
    c = isNaN(c = Math.abs(c)) ? 2 : c, 
    d = d == undefined ? "." : d, 
    t = t == undefined ? "," : t, 
    s = n < 0 ? "-" : "", 
    i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))), 
    j = (j = i.length) > 3 ? j % 3 : 0;
   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
 };