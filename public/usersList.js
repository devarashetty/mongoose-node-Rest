$(document).ready(function(){
	
   $.get("http://localhost:4000/users",function(data){
      var output = data;
      console.log(output);
      var tbody = document.getElementById("tbody");      
      
      output.forEach(function(user){
      	var tr = document.createElement('tr');
        
        var firstNameTd = document.createElement('td');
        var textnode1 = document.createTextNode(user.firstname);
        firstNameTd.appendChild(textnode1);

        var lastNameTd =  document.createElement('td');
        var textnode2 = document.createTextNode(user.lastname);
        lastNameTd.appendChild(textnode2);

        var emailTd = document.createElement('td');
        var textnode3 = document.createTextNode(user.email);
        emailTd.appendChild(textnode3);
        
        tr.appendChild(firstNameTd);
        tr.appendChild(lastNameTd);
        tr.appendChild(emailTd) ;

        tbody.appendChild(tr); 
      })
      $('#table').dataTable( {
		  paginate: true,
		  scrollY: 300
		});
   })	
})