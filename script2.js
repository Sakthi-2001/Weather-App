// AUTHOR		:	ABDUL WAHID NAAFI
// INSTAGRAM	:	@IAM_NAAFI 
// INSTAGRAM 	:	@NAAFICODES
var x=document.getElementById("hands");
var y=document.getElementById("animcon");
function closeye()
{
	y.style.backgroundImage="url('images/monkey_pwd.gif')";
	x.style.marginTop="0%";
}
function openeye()
{
	y.style.backgroundImage="url('images/monkey.gif')";
	x.style.marginTop="110%";
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginForm").addEventListener("submit", function (event) {
      // Prevent the default form submission
      event.preventDefault();
  
      // Get the entered password
      var enteredPassword = document.getElementById("pwdbar").value;
  
      // Check if the entered password is "Sakthi1234"
      if (enteredPassword === "Bucephalus") {
        // Redirect to index.html
        window.location.href = "home.html";
      } else {
        // Display an error message or take any other action for incorrect passwords
        alert("Incorrect password. Please try again.");
      }
    });
});
  