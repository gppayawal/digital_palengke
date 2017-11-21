$(document).ready(function(){
	$('.modal').modal();
});

var i = 0;

function upload(){
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
}	

function uploadForm(){
	$('#form_modal').modal('open');
	$('#submitProductForm').on('submit', function(e){
		e.preventDefault();
		var data = {};
		var formData = {
			'groupNum':  $('#groupNum').val(),
			'productName': $('#productName').val(),
			'productDesc': $('#productDesc').val(),
			'imageFile': $('#imageFile').val()
		}
		console.log(formData);

		if(formData.groupNum != '' && formData.productName != '' && formData.productDesc != '' && formData.imageFile != ''){
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
		        if (res.status === 200) {
		            /*window.location.href="/home";*/
		            $('form_modal').modal('close');
		            Materialize.toast('product added!', 4000, 'yellow lighten-1');
		        }
			});
		} else {
			Materialize.toast("Fill out all fields", 4000, 'yellow lighten-1');
		}
	});
}