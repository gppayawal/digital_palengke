$(document).ready(function(){
	$('.modal').modal();
});

function uploadForm(){
	resetForm();
	$('#form_modal').modal('open');

	$('#submitProductForm').on('submit', function(e){
		e.preventDefault();
		var groupNum = $('#groupNum').val();
		var productName = $('#productName').val();
		var productDesc = $('#productDesc').val();
		var imageFile = $('#imageFile').val();
		var formData = 'groupNumber=' + groupNum + '&productName=' + productName + '&productDesc=' + productDesc + '&imageFile=' + imageFile + '\n'; 
		console.log(formData);

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
		        }
			});
		} else {
			Materialize.toast("Fill out all fields", 4000, 'yellow lighten-1');
		}
	});
}

function resetForm(){
 	$('#groupNum').val('');
	$('#productName').val('');
	$('#productDesc').val('');
	$('#imageFile').val('');
}

function addToProducts(){
	/*var i = 0;
	i++;
	alert("yo");
	var grp = document.getElementById('groupNum');

	$('#holder').append(
		$('<div>')
			.attr('class', 'card-panel prods')
			.append(
				$('<h6>')
					.text('GROUP N0: ' + grp)
				,
				$('<br>')
				,
				$('<p>')
					.text('PRODUCT NAME:')
				,
				$('<span>')
					.text('DESCRIPTION')		
			)
	)

	var data = 'id='+(this.id)-1;

	$.post('/products', data, function(res){

	});*/
}	