$(document).ready(function(){
	$(".flip").flip({
        trigger: 'hover'
    });
    $('.modal').modal();
});

// Called when Google Javascript API Javascript is loaded
function HandleGoogleApiLibrary() {
    // Load "client" & "auth2" libraries
    gapi.load('client:auth2',  {
        callback: function() {
            // Initialize client & auth libraries
            gapi.client.init({
                apiKey: 'AIzaSyBmsD0b9zx_uairclEHUTlXOWCgx_9QJsY',
                clientId: '902871525839-ouvcfp2v9qls8qte2dqd85mocuna3gif.apps.googleusercontent.com',
                scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/plus.me'
            }).then(
                function(success) {
                    // Libraries are initialized successfully
                    // You can now make API calls
                    console.log('success');
                }, 
                function(error) {
                    // Error occurred
                    // console.log(error) to find the reason
                    console.log(error);
                }
            );
        },
        onerror: function() {
            // Failed to load libraries
            console.log('failed to load libraries');
        }
    });
}

function admin(){
	//$('#modal1').modal('open');
    window.location.href="/admin";
};

function student(){
	//$('#modal2').modal('open');
    window.location.href="/student";
};