$(document).ready(function(){
	$("#btn-signup").click(function(event){
		event.preventDefault();
		var datastring = $("#signupform").serializeArray();
		$("#signupform").submit(function(event){
			console.log($(this).serialize())
		});
		
		var data = {};

		$(datastring).each(function(index, obj){
		    data[obj.name] = obj.value;
		});
		
		console.log("dataaaaaaaaaaaaaaa",data);

		console.log("datastring",datastring);
		$.get('')
	})
})