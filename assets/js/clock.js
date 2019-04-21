



function clock(){

var hour =new Date().getHours();
var mins =new Date().getMinutes();
var secs =new Date().getSeconds();

if (hour<10){hour="0"+hour}
if (mins<10){mins="0"+mins}
if (secs<10){secs="0"+secs}


	document.querySelector("#hour").innerHTML=hour;
 document.querySelector("#mins").innerHTML=":"+mins;
 document.getElementById("second").innerHTML=":"+secs;



  
}

setInterval(clock,100);