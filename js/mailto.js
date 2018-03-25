$(document).ready(function(){
	$("#btnsubmit").click(function(){
		$("#contact").attr('action' , 'mailto:heinsoeoo.hs@gmail.com?subject=Submission from Portfolio & body=I am ' + $("#name").val() + '. My email is ' + $("#email").val() + '. Message:'+ $("#msg").val());
		$("#contact").submit();
	});
});