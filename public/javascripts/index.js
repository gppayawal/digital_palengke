$(document).ready(function(){
	$(".flip").flip({
        trigger: 'hover'
    });
    $('.modal').modal();
    $('.back').show();

    var i = 0;
    var flag = 0;
    $('#formPIN').submit(function(e){
       e.preventDefault();
       var enteredStudentNumber = $('#studentNumber').val();
       var enteredPIN = $('#studentPIN').val();
       $.getJSON('public/pins.json', function(result){
            for(i = 0; i < result.length; i++){
                if(enteredPIN == result[i].pin && enteredStudentNumber == result[i].studentNumber){
                    flag = 1;
                    Materialize.toast('Success!', 3000, 'yellow darken-1');
                    window.location.href="/student";
                }    
            }
       });
       if(flag == 0){
                Materialize.toast('Invalid combination', 3000, 'yellow darken-1');
                $('#formPIN').trigger('reset');
        }

    });
});

/*function admin(){
	//$('#modal1').modal('open');
}

function student(){
    e.preventDefault();
    $('#formPIN').submit(function(e){
        window.href.location='student.html';
    });
}*/
