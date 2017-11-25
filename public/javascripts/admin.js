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
	$('#submitProductForm').trigger('reset');
}

function viewProducts(){
	var i = 0;
	$('#holder').empty();
	$.getJSON( "public/products.json", function(products){
	$('#count').text(products.length);
	 	$.get('public/templates/products.html', function(data){
	 		$.template('productTemplate',data);
	 		products.forEach(function(product){
	 			alert(JSON.stringify(product));
	 			$.tmpl('productTemplate', product).appendTo('#holder');
	 		});
	 	});
	});
}

function removecard(){
	alert('deleting ' + this.id);
	$('#cardId'+this.id).remove();
}
