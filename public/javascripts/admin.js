$(document).ready(function(){
	$('.modal').modal();
	$('#submitProductForm').submit(function(e){
		e.preventDefault();
		var formData = new FormData(this);
    $.ajax({
      url : '/api/admin/addproduct',
      type: 'POST',
      data: formData,
      async: false,
      cache: false,
      contentType: false,
      processData: false,
      success:function(data, textStatus, jqXHR){
          $('#form_modal').modal('close');
          Materialize.toast('Product added!', 4000, 'yellow lighten-1');
          viewProducts();
      },
      error: function(jqXHR, textStatus, errorThrown){
          Materialize.toast('Error!', 4000, 'red lighten-1');
    }
});
    return false;
	});

	viewProducts();
});

function uploadForm(){
	resetForm();
	$('#form_modal').modal('open');
}

function resetForm(){
 	$('#groupNum').val('');
	$('#productName').val('');
	$('#productDesc').val('');
	$('#imageFilename').val('');
}

function viewProducts(){
	var i = 0;
	$('#holder').empty();
	$.getJSON( "public/products.json", function(result){
	$('#count').text(result.length);
	 	for(i = 0; i < result.length; i++){
	 		$('#holder').append(
				$('<div>')
					.attr('id', 'cardId'+i)
					.attr('class', 'card-panel prods')
					.append(
						$('<header>')
							.append(
								$('<h6>')
									.attr('class', 'grpnum')
									.text('Group ' + result[i].groupNumber)
								,
								$('<a>')
									.attr('id', i)
									.attr('onclick', 'removecard()')
									.attr('class', 'btn-floating btn-small waves-effect waves-light red')
									.append(
										$('<i>')
											.attr('class', 'material-icons')
											.text('delete')
									)	
							)
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
						$('<p>')
							.text('Total Investment: $ ' + result[i].investments)
					)	
			)
	 	}
	});
}

function removecard(){
	alert('deleting ' + this.id);
	$('#cardId'+this.id).remove();
}
