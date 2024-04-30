document.write("Hello World");
var num =5;
var na = "priya";
var nam="sai";
var flag=true;
document.write(num);
document.write(name);
document.write(nam);
alert(num);
var n = (5 > 3) ? "yes":"No";
document.write(n);
//left-right associativity
var n1 =3;
var n2= 4;
var n3 = n1 + n2 +"a" + n1 + n2;
document.write(n3);
document.write("<br>");

var a=5;
var b=6;
if(a>b){
    document.write(a);
}
else{
    document.write(b);
}
for(var x=1; x<=10;x++){
    document.write("<h3>" + x*5 +"</h2>");

}
function addNumbers(){
    var c = 5;
    var d =  5;
    var add =c + d;
    document.write(add);
}
addNumbers();
var cars =["audi", "benz", "suzuki"];
cars.push("mercedes");
for(var i=0; i<cars.length;i++){
    document.write(cars[i]);
}

var car={
    car_brand:"telsa",
    price:35000,
    teslaAutoPilot:function(){
        document.write("this car has autopilot");
    }
}
car.teslaAutoPilot();

function car(car_brand,price){
    this.car_brand = car_brand;
    this.price=price;
    this.teslaAutoPilot =function(){
        document.write("this car has autopilot");

    }
}
var cars = new car("tesla", 350000);
var cars1 = new  car()
cars.teslaAutpPilot("audi" ,50000);
document.write(cars.car_model);

car.fueltype="electric";
car.price="45000"; //changing  datatype
delete car.price;
document.write(typeof(car.price));
/*
method getelement by id*/

function buttonClick(){
   var func = document.getElementById("heading").innerHTML("HELLO");
   alert(func);
}


function newButtonClick(){
    var s = document.getElementById("text1").value;
    alert("Value inside text box is" + s);
}

function fn(){
    var rds=document.getElementById("rd1");
    var rd2=document.getElementById("rd2");
    if(rds.checked==true){
        alert(rd1.value);
    }
    else{
        alert(rd2).value;    }
    
}

function fn1(){
    var selects = document.getElementById("select").value;
    
    alert(selects.options[0].value);
    alert(selects.options[selects.selectedIndex].value);
}
function fn2(){
    var para = document.getElementsByTagName("p");
    para[0].style.fontSize = 50;
    para[1].style.color = "red";
    para[2].style.fontStyle = "italic";
}
function img(){
   document.getElementById("i").src="blue.png";
}
function img1(){
    document.getElementById("i").src="bolddesk.png";
}


