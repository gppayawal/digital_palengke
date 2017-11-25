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

   $('#adminLogIn').submit(function(){
    var body = 'password='+$('#password').val();
    $.post('/api/admin/login', body, function(res){
      switch (res.status) {
        case 404: message = 'Invalid Password'; break
        default: message = 'Error logging in!'; break;
      }
      console.log(res.status === 200)
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
    $('#formAdmin').on('submit', function(e){
        e.preventDefault();
        var formData = new FormData(this);
        $.ajax({
          url : '/api/student/loginadmin',
          type: 'GET',
          data: formData,
          async: false,
          cache: false,
          contentType: false,
          processData: false,
          success:function(data, textStatus, jqXHR){
              $('#modal1').modal('close');
              Materialize.toast('Success!', 4000, 'red lighten-1');
              window.location.href="/admin";
          },
          error: function(jqXHR, textStatus, errorThrown){
              Materialize.toast('Error!', 4000, 'red lighten-1');
              console.log(errorThrown);
          }
        });
        return false;
    });
    $('#modal1').modal('open');
}

function student(){
    $('#modal2').modal('open');
    $('#formPIN').submit(function(e){
        e.preventDefault();
        var formData = new FormData(this);
       $.ajax({
          url : '/api/student/loginstudent',
          type: 'GET',
          data: formData,
          async: false,
          cache: false,
          contentType: false,
          processData: false,
          success:function(data, textStatus, jqXHR){
              $('#modal2').modal('close');
              Materialize.toast('Success!', 4000, 'red lighten-1');
              window.location.href="/student";
          },
          error: function(jqXHR, textStatus, errorThrown){
              Materialize.toast('Error!', 4000, 'red lighten-1');
              console.log(errorThrown);
          }
        });
        return false;
    });
  $('#modal2').modal('open');
}