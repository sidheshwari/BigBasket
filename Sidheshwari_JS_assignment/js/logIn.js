 

window.addEventListener('load',function(){
    
 /* background image autoslider */    
var index = 1;   
autoSlide();       
function autoSlide(){         
var i;     
var x = document.getElementsByClassName("slides");  
for(i=0;i<x.length;i++){
x[i].style.display = "none";       
}
index++;
if(index > x.length){index = 1}
x[index-1].style.display = "block";             
setTimeout(autoSlide,2000);                    
  
}   

/**********************get login form ***********************/  
// Get the loginForm
var loginForm = document.getElementById('loginForm');   
var signupForm = document.getElementById('signupForm');

// When the user clicks anywhere outside of the loginForm, close it
window.onclick = function(event){
    closeLogIn(event);
}
window.onclick = function(event){
    closeLogIn(event);    
}
function closeLogIn(event) {        
    if (event.target == loginForm) {            
                    
        document.getElementById('loginForm').style.display = "none";                   
    } 
    else if(event.target == signupForm) {       
      document.getElementById('signupForm').style.display = "none";                   
    }     
}  

/******** AddEveneListener for Login Form */ 

/* (1) open LoginForm when clicked on Login button */  
document.getElementById("loginBtn").addEventListener("click",displayLoginForm);

function displayLoginForm() {      
          document.getElementById('loginForm').style.display='block';               
}   

/******** AddEveneListener for signUp Form */   
/* (1) open SignUpForm when clicked on SignUp button */   

document.getElementById("signupBtn").addEventListener("click", displaySignUpForm);    

function displaySignUpForm() {       
      document.getElementById('signupForm').style.display='block';                
}

/******** to close Login or signUp Form when click on cross sign */            
document.getElementById('closeLogin').addEventListener("click",closeLoginForm);
    function closeLoginForm(){  
        document.getElementById('loginForm').style.display='none';        
    }

 document.getElementById('closeSignup').addEventListener("click",closeSignupForm);
    function closeSignupForm(){     
        document.getElementById('signupForm').style.display='none';       
    }   
 /********* cancel signup form onclick cancel button ************/       
   document.getElementById('cancelSignup').addEventListener("click",cancelSignup);
    function cancelSignup(){         
        document.getElementById('signupForm').style.display='none';           
    } 
 
    document.getElementById('cancelLogin').addEventListener("click",cancelLogin);
    function cancelLogin(){         
        document.getElementById('loginForm').style.display='none';          
    }     


 /****************** validation FOR signUp Form *********************************/

/*#######getting all input text objects########*/
var userName =document.signUp.uName;       
var password =document.signUp.password;   
var confirm_Password =document.signUp.confirm_password;    
 
 /*#######getting all error div display objects########*/   
 var name_error=document.getElementById("name_error");  
 var password_error =document.getElementById("password_error");     
 var confirmPassword_error=document.getElementById("confirmPassword_error");
  
/*#######Setting all eventLiseners ########*/        
 userName.addEventListener("blur",nameVerify,true);  
 password.addEventListener("blur",passwordVerify,true);     
 confirm_Password.addEventListener("blur",confirm_PasswordVerify,true);            
 confirm_Password.addEventListener("blur",matchPasswords,true);     
/*####### signUp Form validation ########*/ 
    
function validate(){   
  if(userName.value=="")   
  {
      userName.style.border="1px solid #f7070b" ;  
      name_error.textContent="userName is required";
      userName.focus();
      return false;        
  }  
   
  if(password.value=="")
   {
      password.style.border="1px solid #f7070b" ;
      password_error.textContent="password is required"; 
      password.focus();       
      return false;              
   }    

    if(confirm_Password.value=="")
    {
      confirm_Password.style.border="1px solid #f7070b" ;
      confirmPassword_error.textContent="confirm password is required";
      confirm_Password.focus();          
      return false;                            
    }  
   

}   

/*######## event Handler functions for signUp Form #########*/    

function nameVerify()
 {
     if(userName.value !="")
      {       
           userName.style.border="1px solid #ccc" ;     
           name_error.innerHTML=""; 
           return true;  
      } 
       validate();

 }   

 function passwordVerify()
 {  
    if(password.value !="")
     {        
         if( password.value.length>=5)
         {   
             password.style.border="1px solid #ccc" ; 
             password_error.innerHTML="";
             return true;  
          }else{   
             password.style.border="1px solid #f7070b" ;   
             password_error.innerHTML="password length should be atleast 5";
             password.focus();  
             return false;        
          }      
      }      
        
       validate();        
 }     

 function confirm_PasswordVerify()   
 {   
       if(confirm_Password.value !="")
      {    /*alert("inside passwordVerify"); */   
           confirm_Password.style.border="1px solid #ccc" ;     
           confirmPassword_error.innerHTML="";      
           return true;  
      } 
       validate(); 
       matchPasswords();        
 }         
/*######### check if two passoword match in Login form ######*/

function matchPasswords()
{
   if( password.value != confirm_Password.value)
   {
       /*alert("passwords matching"); */      
       password.style.border="1px solid #f7070b"; 
       confirm_Password.style.border="1px solid #f7070b";  
       confirmPassword_error.innerHTML="Two password should match";
       return false;

   } else {
             password.style.border="1px solid #ccc"; 
             confirm_Password.style.border="1px solid #ccc"; 
             confirmPassword_error.innerHTML="";   
             return true;  
          }      
}  

/*############ on signUp submit store userInfo in localStorage ####################*/ 
var users=[];
var submitSignup=document.getElementById("submitSignup");   
submitSignup.addEventListener("click",signUp_now);          
  
function signUp_now(){ 

if(nameVerify()&& passwordVerify()&&confirm_PasswordVerify()&& matchPasswords()) 
  {   
       var newUser={ };   
        users=loadUser();
        alert(users);
        console.log(users); 
        newUser.name=document.signUp.uName.value;
        newUser.password= document.signUp.password.value; 
          
        for(var i in users)
        { 
            if(users[i].name == newUser.name)  
             {  
                alert("user already exist..try again");   
                return;  
             }   
        }      
        users.push(newUser);
        saveUser();   
        alert("succefully registered...NOW you can login");       
                    
   }  

}   

function saveUser(){
   localStorage.setItem("users",JSON.stringify(users));       
}   

function loadUser(){
  return JSON.parse(localStorage.getItem("users"));  
}


/****************** validation FOR login Form *********************************/

/*#######getting all input text objects########*/
 var loginUname =document.logIn.loginUname;       
 var loginPassword =document.logIn.loginPassword;  

 /*#######getting all error div display objects########*/ 

 var loginUserName_error=document.getElementById("loginUserName_error");  
 var loginPassword_error =document.getElementById("loginPassword_error");     

/*#######Setting all eventLiseners ########*/        
 loginUname.addEventListener("blur",loginNameVerify,true);  
 loginPassword.addEventListener("blur",loginPasswordVerify,true);     
 
/*######## event Handler functions for Login Form #########*/    
 function loginValidate(){    
  if(loginUname.value=="")
  {
      loginUname.style.border="1px solid #f7070b" ;  
      loginUserName_error.textContent="userName is required";
      loginUname.focus();
      return false;          
  }  

  if(loginPassword.value=="")
   {
      loginPassword.style.border="1px solid #f7070b" ;
      loginPassword_error.textContent="password is required"; 
      loginPassword_error.focus();       
      return false;               
   }      
}

/*######## event Handler functions for LogIn Form #########*/    

function loginNameVerify()
 {
     if(loginUname.value !="")  
      {        
           loginUname.style.border="1px solid #ccc" ;     
           loginUserName_error.innerHTML=""; 
           return true;  
      } 
       loginValidate();  
  
 }   

 function loginPasswordVerify()
 {
       if( loginPassword.value !="")
      {    
           loginPassword.style.border="1px solid #ccc" ;     
           loginPassword_error.innerHTML="";         
           return true;    
      } 
        loginValidate();              
 }                 

/*********************** login functionality ****************************/
var count=2;
var submitSignup=document.getElementById("submitLogin");   
submitSignup.addEventListener("click",logIn_now); 

function logIn_now() {

   var name =document.logIn.loginUname.value;       
   var password =document.logIn.loginPassword.value;    
   var valid = false;
 
 users=loadUser();  
  for (var i=0; i <users.length; i++) {   
     if ((name == users[i].name) && (password == users[i].password)) {        
        valid = true;   
         break;   
      }   
   } 

if (valid) {
alert ("Login sucessfully processed. You will be redirected to the members page now.");
window.open('Products.html');
 return true;      
}            

alert ("Invalid username and/or password.");    
return false; 
            
}        
}); 