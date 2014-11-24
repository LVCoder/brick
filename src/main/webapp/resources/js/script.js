
$(document).ready(function(){
$(".try").click(function(){
	$(".popup").show(100);
	$(".hover").show();
	
	
});
$(".hover").click(function(){
	$(".popup").hide();
	$(".hover").hide();
	
})
	$(".pas").click(function(){
$(".pas").css("border","1px solid #dfdddd");	
	})
	
	
});
function showError(container, errorMessage) {
	  container.className = 'error';
	  var msgElem = document.createElement('span');
	  msgElem.className = "error-message";
	  msgElem.innerHTML = errorMessage;
	  container.appendChild(msgElem);
	}
function  buttonOnAndOff(){
	if(emailStat == 1  && passwordStat == 1 && password2Stat == 1 &&
loginStat  == 1){
		$("#submit").removeAttr("disabled");
	}else{
		$("#submit").attr("disabled","disabled");
	}
}
	function validate(form) {
		
	$(".error-message").remove();

	  var elems = form.elements;
	  if(elems.password.value!=elems.repeat.value){
		showError(elems.password.parentNode,'Паролі не збігаються.');
		$(".pas").css("border","1px solid #df5f4b");
		return false;
		}
		else if(elems.password.value.length<6)
		{
		showError(elems.password.parentNode,'Пароль надто короткий');
		$(".pas").css("border","1px solid #df5f4b");
		return false;
		}
		else if(elems.password.value==elems.repeat.value){

		return true;
		}}
		
	/*var login, email, password, 
	password2, loginStat, emailStat, passwordStat, password2Stat;
	$(function(){
		$("#_email").change(function(){
			$.ajax({
				url:  "../resources/testingLoginEmail.jsp",
				type:  "GET",
				data:  "email=" + email,
				cache:  false,
				success:  function(response){
					if(response  == "no"){
						$(alert("json!"));
						$("#_email").next().hide().
	text("Логин  занят").css("color","red").fadeIn(400);
						
						$("#_email").removeClass().
	addClass("inputRed");
					}else{
						alert("NO");
						$("#_email").removeClass().
	addClass("inputGreen");
						$("#_email").next().text("");
					}                                             
				}
			});
		loginStat  = 1;
		buttonOnAndOff();
		
	});
	$("#_email").keyup(function(){
		$("#_email").removeClass();
		$("#_email").next().text("");
	});
	});*/
function madeAjaxCall(){
 $.ajax({
  type: "post",
  url: "http://localhost:8080/http://localhost:8080/brick/add.htm",
  cache: false,    
  data:'firstName=' + $("#_name").val() + "&lastName;=" + $("#_surname").val() + "&email;=" + $("#_email").val(),
  success: function(response){
   $('#result').html("");
   var obj = JSON.parse(response);
   $('#result').html("First Name:- " + obj.firstName +"</br>Last Name:- " + obj.lastName  + "</br>Email:- " + obj.email);
  },
  error: function(){      
   alert('Error while request..');
  }
 })};


  