
var index = 1;     
      
function openNav() { 
    document.getElementById("myNav").style.width = "100%";
}   

function closeNav() {  
    document.getElementById("myNav").style.width = "0%";                    
}   

function openLogin() {
          document.getElementById("myLogin").style.height = "23%";          
}         
   
function closeLogin() {
    document.getElementById("myLogin").style.height = "0%";            
}    

/*****************Start of Image slider javascript************************/ 

/*element.addEventListener("click", make_handler(extra_data));
   var minus=-1;
   var plus=1;  

var plusIndex= function(n){   
  return function(event)
  { 
    index = index + 1;    
   alert("after plus index")
    alert(index) ;       
  showImage(index);      
  };  
};
   
document.getElementById('btn1').addEventListener("click",plusIndex(minus),false);    
document.getElementById('btn2').addEventListener("click",plusIndex.bind(1),false);*/             
    
/*showImage(1);    
   
function showImage(n){   
var i;
var x = document.getElementsByClassName("slides");
if(n > x.length){ index = 1};
if(n < 1){ index = x.length};
for(i=0;i<x.length;i++)
{
   x[i].style.display = "none";
}  
   if(index-1 >= 0)
   {  
      x[index-1].style.display = "block";   
   } 
} */ 

 autoSlide();      
function autoSlide(){                 
var i;
var x = document.getElementsByClassName("slides");
for(i=0;i<x.length;i++){
   x[i].style.display = "none";       
}   
   index++;  
  if(index > x.length){index = 1}
    if(index-1 >= 0) 
    {        
     x[index-1].style.display = "block";
     setTimeout(autoSlide,2000); 
    }                       
 }     
 
  
 /*****************End of Image slider javascript************************/ 

          

  /*************************  start of autosearch   *******************/ 
function autoSearch() {         
     var input, filter, figurelist,  products, i,status;
     input = document.getElementById("search");  
     filter = input.value.toUpperCase();  
  
    imagelist = document.getElementsByClassName("images");    
    var count=0;
    for (i = 0; i <  imagelist.length; i++)   
     {
         products= imagelist[i].getElementsByTagName("figcaption")[0].
                      getAttribute("name"); 
         firstLetter=products[0].toUpperCase().charAt(0);      
                        
       if (firstLetter==filter)     
       {    count++;
            imagelist[i].style.display = "";          
       }  
       else     
       {          
             imagelist[i].style.display = "none";                    
       }    
     }      
    
}      
/****************   end of autosearch  *****************************/ 
    
         

    