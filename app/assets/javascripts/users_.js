function login_controller() {
				$.post("/login",
											{
															username: $("#username_input").val(),
															password: $("#password_input").val()
											},
											function(data, status){
															// alert("Data: " + data + "\nStatus: " + status);
															if(data["error_code"] == -4)
																			alert("Invalid username and password combination. Please try again.");
															else
																			location.reload();
											});
}

function signup_controller() {
				// window.location.replace("http://stackoverflow.com");
				$.post("/signup",
											{
															username: $("#username_input").val(),
															password: $("#password_input").val()
											},
											function(data, status){
															if(data["error_code"] == -1)
																			alert("user name not 5-20 long");
															else if(data["error_code"] == -2)
																			alert("password not 8-20 long");
															else if(data["error_code"] == -3)
																			alert("user name already exists");
															else
																			location.reload();
											});
				}

$(document).ready(function () {
				$("#login_btn").click(login_controller);
				$("#signup_btn").click(signup_controller);
});

// $(window).bind 
