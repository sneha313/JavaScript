//global array
var ar1=Array(10,20,'guava','apple','mango','orange');
function showarray()
{
var data="<ul>";
for(var i=0;i<ar1.length;i++)
{
data=data+"<li>"+ar1[i]+"</li>";
}
data=data+"</ul>";
alert(data);
document.getElementById("msg").innerHTML=data;
}

function one()
{
var input=prompt("enter new item name");
ar1.unshift(input);//it will add element in first
showarray();
}

function two()
{
var input=prompt("enter item name");
ar1.push(input);//add elemnt in last
showarray();
}

function three()
{
ar1.shift();//remmove element from starting
showarray();
}

function four()
{
ar1.pop();
showarray();//remove element from last
}

function searchdata()
{
var key=prompt("enter item name to search");
var status=ar1.indexOf(key);//it will give index number of a particular item
alert(status);
if(status==-1)
{
alert("sorry item not found");
}
else
{
alert("item is available on "+status);
}
}

function sortdata()
{
ar1.sort();
showarray();
}

function showdate()
{
var obj=new Date();
alert(obj.getMinutes());//it will give minutes of system in alert box
alert(obj.getSeconds());
alert(obj.getHours());
alert(obj.getMonth());
}