$(document).ready(function(){
	$(".flip").flip({
        trigger: 'hover'
    });
    $('.modal').modal();
    $('.back').show();

    var i = 0;
    $('#formPIN').submit(function(e){
       e.preventDefault();
       var enteredStudentNumber = $('#studentNumber').val();
       var enteredPIN = $('#studentPIN').val();
       console.log("FIND THIS: " + enteredStudentNumber + " " + enteredPIN);
       $.getJSON('public/pins.json', function(result){
            for(i = 0; i < result.length; i++){
                console.log(result[i].studentNumber + " " + result[i].PIN);
                if(enteredPIN == result[i].PIN && enteredStudentNumber == result[i].studentNumber){
                    Materialize.toast('Success!', 3000, 'yellow darken-1');
                    window.location.href="/student";
                }   
                else{
                    console.log('no match');
                    Materialize.toast('Invalid PIN', 3000, 'yellow darken-1');
                }    
            }
       });

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
