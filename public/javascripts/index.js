$(document).ready(function(){
	$(".flip").flip({
        trigger: 'hover'
    });
    $('.modal').modal();
    $('.back').show();
});

function admin(){
	$('#modal1').modal('open');
};

function student(){
	//$('#modal2').modal('open');
};
