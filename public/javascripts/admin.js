$(document).ready(function(){
	$('.modal').modal();
});

var i = 0;

function upload(){
	i++;
	alert("yo");
	var grp = document.getElementById('grp_number');

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
}

function bodyClick(){
	$('#sidenav').hide();
}