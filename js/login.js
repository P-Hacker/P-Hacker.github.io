$('#login-button').click(function (event) {
	var userName=document.getElementById("nickname").value;  
    var pwd=document.getElementById("pwd").value;
    if(userName=="LiYing1001" &&  pwd=="041001"){ 
		event.preventDefault();
		$('form').fadeOut(500);
		$('.wrapper').addClass('form-success');
		setTimeout(function(){location.href="cake.html";},2000);
	}
	else{
		alert("Wrong Password");
	}
});
