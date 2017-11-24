$(document).ready(function(){
	$(".flip").flip({
        trigger: 'hover'
    });
    $('.modal').modal();
    $('.back').show();
});

function admin(){
	$('#modal1').modal('open');
    var password = "star";
    $('#formAdmin').on('submit', function(e){
        e.preventDefault();
        var enteredPassword = $('#adminPassword').val();
        console.log(enteredPassword + "   " + password);

        if(enteredPassword != password){
            Materialize.toast('You shall not pass!', 3000, 'red lighten-1');
            $('#adminPassword').trigger('reset');
        }
        else{
            window.location.href="/admin";
        }
    });
   
}

function student(){
    $('#modal2').modal('open');
    var i = 0, flag = 0;
    $('#formPIN').submit(function(e){
       e.preventDefault();
       var enteredStudentNumber = $('#studentNumber').val();
       var enteredPIN = $('#studentPIN').val();
       $.getJSON('public/pins.json', function(result){
            for(i = 0; i < result.length; i++){
                if(enteredPIN == result[i].pin && enteredStudentNumber == result[i].studentNumber){
                    flag = 1;
                    window.location.href="/student";
                    break;
                }    
            }
       });
       if(flag == 0){
                Materialize.toast('Invalid combination', 3000, 'red lighten-1');
                $('#formPIN').trigger('reset');
        }

    });
}
