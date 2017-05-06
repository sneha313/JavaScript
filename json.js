function showjson()
{
	var jsondata='[{"name":"AAAAAA","mobile":"7899289898","city":"bangalore"},{"name":"jhhjfd","mobile":"77799289898","city":"chennai"},{"name":"cssd","mobile":"79899289898","city":"delhi"}]';
alert(jsondata.length);// to find the length of string
	var ar1=JSON.parse(jsondata);// to convert from json to array
	alert (ar1.length);// to find length of array
	var data="";
	for(var i=0;i<ar1.length;i++)
	{
		var n=ar1[i].name;
		var m=ar1[i].mobile;
		var c=ar1[i].city;
		data=data+"<tr>";
		data=data+"<td>"+ n +"</td>";
		data=data+"<td>"+ n +"</td>";
		data=data+"<td>"+ n +"</td>";
		data=data+"</tr>";
	}
	var abc="<table>" + data + "</table>"; 
	alert(abc);
	document.getElementById("message").innerHTML=abc;
	}
	
	function loadjson()
	{
		 if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
				var jsondata=this.responseText;
					var ar1=JSON.parse(jsondata);// to convert from json to array
	var data="";
	for(var i=0;i<ar1.length;i++)
	{
		var n=ar1[i].name;
		var m=ar1[i].mobile;
		var c=ar1[i].city;
		data=data+"<tr>";
		data=data+"<td>"+ n +"</td>";
		data=data+"<td>"+ m +"</td>";
		data=data+"<td>"+ c +"</td>";
		data=data+"</tr>";
	}
	var abc="<table>" + data + "</table>"; 
	alert(abc);
	document.getElementById("message").innerHTML=abc;
	}
	
		}		

        xmlhttp.open("GET","user.json",true);
		
        xmlhttp.send();
		
	}