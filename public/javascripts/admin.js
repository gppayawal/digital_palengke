$(document).ready(function(){
	$('.modal').modal();
	$('#submitProductForm').on('submit', function(e){
		e.preventDefault();
		var groupNum = $('#groupNum').val();
		var productName = $('#productName').val();
		var productDesc = $('#productDesc').val();
		var imageFile = $('#imageFile').val();
		var formData = 'groupNumber=' + groupNum + '&productName=' + productName + '&productDesc=' + productDesc + '&imageFile=' + imageFile; 

		if(groupNum != '' && productName != '' && productDesc != '' && imageFile != ''){
			fetch('/api/admin/addproduct', {
				method: 'POST',
		        credentials: 'include',
		        headers: {
		            'Content-Type': 'application/x-www-form-urlencoded',
		            'Accept':'application/json'
		        },
		        body: formData
			})
			.then((res) => {
		        if (res.status === 200){
		        	$('#form_modal').modal('close');
		            Materialize.toast('Product added!', 4000, 'yellow lighten-1');
		            $('#count').html(res.size);
		        }
			});
		} else {
			Materialize.toast("Fill out all fields", 4000, 'yellow lighten-1');
		}
	});
});

function uploadForm(){
	resetForm();
	$('#form_modal').modal('open');
}

function resetForm(){
 	$('#groupNum').val('');
	$('#productName').val('');
	$('#productDesc').val('');
	$('#imageFile').val('');
}

function viewProducts(){
	alert("hello");
	var i = 0;

	$.getJSON( "public/products.json", function(result){
	 	for(i = 0; i < result.length; i++){
	 		console.log(result[i]);
	 		$('#holder').append(
				$('<div>')
					.attr('class', 'card-panel prods')
					.append(
						$('<h6>')
							.text('GROUP #: ' + result[i].groupNumber)
						,
						$('<p>')
							.text('Product Name: ' + result[i].productName)
						,
						$('<span>')
							.text(result[i].productDesc)
						,
						$('<br>')
						,
						$('<div>')	
							.attr('class', 'center')
							.append(
								$('<img>')
									.attr('class', 'logos')
									.attr('src', 'public/images/'+result[i].imageFile)

							)		
					)	
			)
	 	}
	});
}