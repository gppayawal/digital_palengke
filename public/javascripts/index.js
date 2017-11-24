$(document).ready(function(){
	$(".flip").flip({
      trigger: 'hover'
  });
  $('.modal').modal();
  $('.back').show();

  $('#studentLogIn').submit(function(){
    var body = 'pin='+$('#pin').val();
    $.post('/api/student/login', body, function(res){
      switch (res.status) {
        case 404: message = 'Invalid PIN'; break
        default: message = 'Error logging in!'; break;
      }
      console.log(res.status === 200)
      if (res.status === 200) {
        window.location.href="/student";
      } else {
        Materialize.toast(message, 4000, 'red');
        $("#pin").val("");
      }
    })
    return false;
  });
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
}
