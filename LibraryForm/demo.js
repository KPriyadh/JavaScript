function showDetails(){
    var i=0;
    document.getElementById("dept").innerHTML="IT";
    var book = document.getElementById("book").value;
    var regx = /^[a-zA-Z]+$/; 
    
    document.getElementById("bookname").innerHTML=book;
        
   
    document.getElementById("header1").innerHTML=book + " Book Details";
    var email = document.getElementById("email").value;
    var regxe = /^([a-zA-Z_]+)@([a-zA-Z]+).([a-zA-Z]{2,20})(.[a-zA-z]{2,20})?$/;
    
        
    document.getElementById("authoremail").innerHTML=email;
       
    
    var name = document.getElementById("name").value;
    var regxn = /^[a-zA-Z]+$/;
    
        
    document.getElementById("authorname").innerHTML=name;
      
    var year= document.getElementById("year").value;
    
    var regxy = /^[1-2][0-9][0-9][0-9]$/;
    
    document.getElementById("published").innerHTML=year;
        
    document.getElementById("copy").innerHTML="Copyright @"+year+" - present Syncfusion"  
    
    var price = document.getElementById("price").value;
    var regxp = /^([0-9]+).([0-9]+)$/;
    
    document.getElementById("Price").innerHTML=price;
 
    document.getElementById("form").style.display="none";
    document.getElementById("Showform").style.display="block";
  
}
/*if(regx.test(book)){ 
    return false;
        
    } else{
        document.getElementById("booklbl").style.visibility="visible";
        true;
        
    }    
    
    if(regxe.test(email)){ return false;
    }
    else{
        document.getElementById("emaillbl").style.visibility="visible";
        true;
        
    }     
    if(regxn.test(name)){ 
        return false;
    }
    else{
        document.getElementById("namelbl").style.visibility="visible";
        true;
    }    
    
    if(regxy.test(year)){
        return false;
        
    }
    else{
        document.getElementById("yearlbl").style.visibility="visible";
        true;
    }
    if(regxp.test(year)){ 
         return false;
    }
    else{
        document.getElementById("pricelbl").style.visibility="visible";
        true;
    } */