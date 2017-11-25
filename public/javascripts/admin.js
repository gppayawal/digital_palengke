$(document).ready(function(){
	$('.modal').modal();
	viewProducts();
});

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
        $.tmpl('productTemplate', data.product).appendTo('#holder');
        $('#count').text(parseInt($('#count').text())+1);
        Materialize.toast('Product added!', 4000, 'green lighten-1');
    },
    error: function(jqXHR, textStatus, errorThrown){
        Materialize.toast('Error!', 4000, 'red lighten-1');
  	}
	});
  return false;
});

function uploadForm(){
	resetForm();
	$('#form_modal').modal('open');
}

function resetForm(){
	$('#submitProductForm').trigger('reset');
}

function viewProducts(){
	$('#holder').empty();
	$.getJSON( "public/products.json", function(products){
		$('#count').text(products.length);
		$.get('/public/templates/products.html', function(data){
			$.template('productTemplate', data);
			products.forEach(function(product){
				$.tmpl('productTemplate', product).appendTo('#holder');
			});
		})
	});
}

$(document).on('click', '.delete', function(){
	var id = this.id;
	var body = 'name='+id;
	$.post('/api/admin/delete', body, function(res){
		if(res.status == 200){
			Materialize.toast('Successfully deleted product', 4000, 'green lighten-1');
			$('#card-'+id).remove();
			$('#count').text(parseInt($('#count').text())-1);
		}else
			Materialize.toast('Error deleting product', 4000, 'red lighten-1');
	});
});
