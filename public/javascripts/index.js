$(document).ready(function(){
	$(".flip").flip({
        trigger: 'hover'
    });
    $('.modal').modal();
});

function admin(){
	//$('#modal1').modal('open');
	alert('yo');
	window.location.href="/admin";
};

function student(){
	//$('#modal2').modal('open');
};