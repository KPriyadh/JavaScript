function calc(val){
     document.getElementById("text").innerHTML+=val;
}
function clear(){
    document.getElementById("text").innerHTML=="";
}
function output(){
    var val = document.getElementById("text").innerHTML;
    document.getElementById("text").innerHTML=eval(val)
}

