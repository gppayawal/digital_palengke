$(document).ready(function(){
	$('.carousel').carousel();
	$('.carousel.carousel-slider').carousel({
			fullWidth: true,
            dist:0,
            shift:0,
            padding:20,

      });

	viewProducts();
});

function viewProducts(){
	var i = 0;
	$('#holder').empty();
	$.getJSON( "public/products.json", function(result){
	$('#count').text(result.length);
	 	for(i = 0; i < result.length; i++){
	 		console.log(result[i]);
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
					)	
			)
	 	}
	});
}