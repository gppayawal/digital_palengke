$(document).ready(function(){
	$(".flip").flip({
        trigger: 'hover'
    });
    $('.modal').modal();
    $('.back').show();
});

function admin(){
    $('#modal1').modal('open');
    $('#formAdmin').on('submit', function(e){
        e.preventDefault();
        var enteredPassword = $('#adminPassword').val();
        $.post('/api/admin/loginadmin', enteredPassword, function(res){
          alert(res.body);
        });  
    });  
}

function student(){
    $('#modal2').modal('open');
    $('#formPIN').submit(function(e){
        e.preventDefault();
        var formData = new FormData(this);
        alert('yo here');
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
}
