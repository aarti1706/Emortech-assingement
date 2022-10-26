function verifyPassword(e) {  
  
    var pw = document.getElementById("pswd").value;  
    var rpw= document.getElementById("re-pswd").value;
    
    if(pw==rpw){
       
        document.getElementById("pwd-changed").style.display="block"
        document.getElementById("login").style.display="none"
       
    }
    else {
      document.getElementById("alert").innerHTML=" Passwords do not match. "
      
    }

    e.preventDefault();
}  



