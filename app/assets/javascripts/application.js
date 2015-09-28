// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

function show_hide_controller() {
				if ($("#password_input").attr("type")=="password") {
								$("#password_input").attr("type", "text");
				}
				else{
								$("#password_input").attr("type", "password");
				}
				// var $this = $(this)
				// if ($this.is(':checked')) {
				// 				$('#password_input')
				// }
				// else {
				// }
																																	

				// var show_password = $('#show_password').is(':checked');
}
function check_password_format() {
    var password = $("#password_input").val();
    $("#password_alert_message").html("Password man");
    if (password.length < 5)
        $("#password_alert_message").html("Password too short");
				else if (password.length > 20)
        $("#password_alert_message").html("Password too long");
    else
        $("#password_alert_message").html("");
}

$(document).ready(function () {
   $("#password_input").keyup(check_password_format);
			$('#show_password').click(show_hide_controller);
});
