function printName(){

    var name = document.getElementById("name").value;
    var namel = document.getElementById("names").value;
    var user = document.getElementById("username").innerHTML=name+" "+namel;
    var email = document.getElementById("email").value;
    
    var user1 = document.getElementById("emailid").innerHTML=email;
        
    var phone = document.getElementById("PhoneNumber").value;
    var regx=/^[7-9]\d{9}$/; 
    if(regx.test(phone)){
        document.getElementById("lblphone").style.visibility="hidden";
        var user2 = document.getElementById("phonenumber").innerHTML=phone;
        return false;
    }
    else{
        document.getElementById("lblphone").style.visibility="visible";
        return true;
    }
    
    
   
    
    var passwords = document.getElementById("password").value;
    var user3 = document.getElementById("Password").innerHTML=passwords;
    
    
    var male = document.getElementById("male");
    var female=document.getElementById("female");
    var not =document.getElementById("notwishtodisclose");
    if(male.checked==true){
        var males = document.getElementById("male").value;
        document.getElementById("genders").innerHTML=males;
    }
    else if(female.checked==true){
        var females=document.getElementById("female");
        document.getElementById("genders").innerHTML=females;
    }
    else if(not.checked==true){
        var nots=document.getElementById("notwishtodisclose");
        document.getElementById("genders").innerHTML=nots;
    }
    var address = document.getElementById("address").value;
    var user4 = document.getElementById("addresses").innerHTML=address;
    var dob = document.getElementById("dob").value;
    var user5 = document.getElementById("dobs").innerHTML=dob;
    var time = document.getElementById("time").value;
    var user6 = document.getElementById("times").innerHTML=time;
    var tamil = document.getElementById("tamil");
    var english = document.getElementById("english");
    var french = document.getElementById("french");
    if(tamil.checked==true){
        var tamil = document.getElementById("tamil").value;
        document.getElementById("languages").innerHTML=tamil;

    }
    
     
    document.getElementById("form").style.display="none";
    document.getElementById("table").style.display="block";
}