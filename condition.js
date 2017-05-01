function one()
{
	var n1=prompt("enter a integer number");
	var n2=prompt("enter 2nd integer number");
	n1=parseInt(n1);//parseInt(n1);
	n2=parseInt(n2);
	var n3=n1+n2;
	var n4=n1*n2;

	if(n1>n2)
	{
	document.getElementById("msg").innerHTML="The Higher number is "+n1;
	}
	else
	{
		
	document.getElementById("msg").innerHTML="The Higher number is "+n2;
	}
	
	}
	
	function two()
	{
		var a=100;
		var b=prompt("enter a integer number");
		var c=prompt("enter 2nd integer number");
		var message="";
		if((a>b) && (a>c))
		{
			message="the higher number is "+a;
		}
		
		else if((b>a) && (b>c))
		{
			message="the higher number is "+b;
		}
		else
		{
			message="the higher number is "+c;
		}
		document.getElementById("msg").innerHTML=message;
		
	}
	
	function three()
	{
		var message = "";
	var age = prompt("enter your age");
if(age>40)
{
	var gender = prompt("enter your gender");
	if(isNaN(gender))
	{
		message="your age is "+age+ " and your gender is : "+gender;
	}
	else{
		alert("sorry this is not valid input");
		three();
	}
}	
else{
	var qual = prompt("enter your highest qualification");
	message = "you are less than 40 years and your age is "+age+ " your qualification is "+qual;
}
document.getElementById("msg").innerHTML=message;
	}
	
	
	function four()
	{
		var input= prompt("enter a number between 1 to 4");
		input=parseInt(input);
		if(isNaN(input))
		{
			alert("system need number only betwen 1 to 4 ");
			four();
		}
		else{
			switch(input)
			{
case 1:document.getElementById("msg").innerHTML="your name is : "+input;
brek;
case 2:document.getElementById("msg").innerHTML="your name is : "+input;
brek;
case 3:document.getElementById("msg").innerHTML="your name is : "+input;
brek;
case 4:document.getElementById("msg").innerHTML="your name is : "+input;
brek;
default:
alert("sorry, number is out of range");
four();
			}			
		}
	}
	
	/////loop////
	
	function five()
	{
		var message="";
		//for(var i=1;i<=5;i++)
			
		for(var i=5;i>=1;i--)
		{
			message=message + i + ": <input type='text'><br>";
			
		}
		alert(message);
document.getElementById("msg").innerHTML=message;
			}
			
			function six()
			{
				var i=1;
				var message="";
				while(i<=10)
				{
					message=message+i+" : <input type='text'><br>";
					i++;
				}
				document.getElementById("msg").innerHTML = message;
			}
			
			
			function seven()
			{
				var i=10;
				var message="";
				do{
					message=message + i+" : <input type='text'><br>";
					i++;
				}while(i<=50);
				document.getElementById("msg").innerHTML=message;
			}