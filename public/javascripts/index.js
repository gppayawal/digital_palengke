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
        case 400: message = 'You have finalized your investments'; break;
        case 404: message = 'Invalid PIN'; break
        default: message = 'Error logging in!'; break;
      }
      if (res.status === 200) {
        window.location.href="/student";
      } else {
        Materialize.toast(message, 4000, 'red');
        $("#pin").val("");
      }
    })
    return false;
  });

   $('#adminLogIn').submit(function(){
    var body = 'password='+$('#adminPassword').val();
    $.post('/api/admin/login', body, function(res){
      switch (res.status) {
        case 404: message = 'Invalid Password'; break
        default: message = 'Error logging in!'; break;
      }
      if (res.status === 200) {
        window.location.href="/admin";
      } else {
        Materialize.toast(message, 4000, 'red');
       $("#adminPassword").val("");
      }
    })
    return false;
  });
});

function admin(){
	$('#modal1').modal('open');
}

function student(){    
  $('#modal2').modal('open');
}