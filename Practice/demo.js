function validate(){
    var username = document.getElementById("uname");
    var password = document.getElementById("pass");
    if(username.value.trim()=="" || password.value.trim()==""){
        alert("No Blank values allowed");
        username.style.border = "solid 3px red";
        document.getElementById("lbluser").style.visibility="visible";
        return false;
    }
    else if(password.value.trim().length<5){
        alert("Password too short");
        return false;
    }
    
    else{
        true;

    }

}
function validate(){
    var username = document.getElementById("uname").value;
    //regx = new RegExp("E00","i");h
    //var regx = /E00/;
    //var regx=/[sdp]imple/;
    var regx = /[a-x]imple/i; //i means case insensitive or /[a-x A-X]imple/;
    var a = /[^1]abc/;
    // \d-match any digit[0-9]
//       \w -(a-zA-Z,0-9 & _)
// \s -spaces and tabs
// \t tab only
//phone number validation
var num =document.getElementById("lbluser").value;
var regx=/^[7-9]\d{9}$/; //inside square braket ^ means excludes first value but outside denotes it should be first value in password $denotes end of the password
//email validation
var regx =/^([a-zA-Z\.-]+)@([a-z0-9-]+).([a-z(2,20})(.[a-z]{2,8})])?$/;
    if(regx.test(username)){
        document.getElementById("lbluser").style.visibility="hidden";
        
    }else{
       
        document.getElementById("lbluser").style.visibility="visible";
    }
}
var ID=0;
var seconds=0;
function printMsg(){
    document.getElementById("op").innerHTML="5 seconds passed";
}
function start(){
    window.setTimeout(printMsg,5000);
}
function stop(){
    window.clearTimeout(ID);
}
function printMsg(){
    document.getElementById("op").innerHTML=seconds+"seconds";
    seconds++
}
function start(){
    window.setInterval(printMsg,1000);
}
function stop(){
    window.clearInterval(ID);
}