window.onload = function(){
	var back_register = document.getElementById('back_register');
	var back_login = document.getElementById('back_login');
	var log = document.getElementById('log');
	var login = document.getElementById('login');
	var register = document.getElementById('register');

	back_register.onclick = function(){
		login.style.transform = "rotateY(180deg)";
		register.style.transform = "rotateY(0deg)";
		register.style.zIndex = "2";
		register.style.opacity = "1";
		login.style.zIndex = "1";
		login.style.opacity = "0";
		login.style.transition = "all 0s";
		register.style.transition = "all 1s linear 0.01s";
	}
	back_login.onclick = function(){
		login.style.transform = "rotateY(0deg)";
		register.style.transform = "rotateY(180deg)";
		register.style.zIndex = "1";
		register.style.opacity = "0";
		login.style.zIndex = "2";
		login.style.opacity = "1";
		register.style.transition = "all 0s";
		login.style.transition = "all 1s linear 0.01s";
	}
}