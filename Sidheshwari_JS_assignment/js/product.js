

window.addEventListener('load',function(){

/***************************  cart: array of items **********************/
 var cart=[];  
 var Item=function(name,price,count){
            this.name=name;  
            this.price=price;
            this.count=count; 
          } ;    
/************** onclick of addTocart button -->call to addItemtoCart() ************/  
   $(".addToCart").click(function(event){  

       event.preventDefault();  
       var name=$(this).attr("data-name");
       var price=Number($(this).attr("data-price"));   
       addItemToCart(name,price,1); 
       /*saveCart(); */  
      /* var cartName=document.getElementById(name)
       cartName.style.display="block";  */ 
       /*$(#name).style.display="block"; */  
       /* document.getElementById(name).style.display="block";*/    
       displayCart();       
   
   }); 
 /******************** onclick of removeCart call to removeFromCart()*/
 $(".removeFromCart").click(function(event){
      event.preventDefault();
      var present=0;
      var name=$(this).attr("data-name"); 
      removeItemFromCart(name); 
      displayCart();       
       
 
 })  

/******************************* displayCart() ***************************** */
 function displayCart(){  
  	var cartArray=listCart();
 	/*console.log(cartArray); */    
 	var output="";
 	for(var i in cartArray){

    output+="<li>"+cartArray[i].name +"    "+cartArray[i].price +"    "+ cartArray[i].count +
 		        "    "+ cartArray[i].price*cartArray[i].count+"    " + "</li>";     

      }       
       $("#showCart").html(output);                 
 } 


    






/************************************ additemToCart() ****************** */
 function addItemToCart(name,price,count){
 	  
 	 console.log(cart);     
    for(var i in cart){     
    	if(cart[i].name===name){
    		
    		cart[i].count++;  
    		saveCart();         
    		 return;       
    	}     
    }
    var item=new Item(name,price,count);  
    cart.push(item);         
    saveCart(); 

     /***** display count of item on cartSign ************/   
    var count=countCart(); 
    document.getElementById("itemCount").innerHTML=count;   
            
}
/***********************removeItemFromCart()-->remove one item************** */   
function removeItemFromCart(name){
	for(var i in cart){
       if(cart[i].name==name){
       	 cart[i].count--;
       	 if(cart[i].count===0){
       	  	cart.splice(i,1);  
       	  } 
       	      
       	   break; 	
       }
     }   
     saveCart(); 
       /***** display count of item on cartSign ************/   
    var count=countCart(); 
    document.getElementById("itemCount").innerHTML=count;  

} 


/**************************removeAllItemFromCart()*************************/
function removeAllItemFromCart(name){
	for(var i in cart){
       if(cart[i].name==name){
       	 if(cart[i].count===0){  
       	  	cart.splice(i,1);
       	  	 break; 
       	  }   
       }
   }  
         saveCart();   
	}   
/************  countCart()--> returns no. of items in cart ************** */
  function countCart(){
  	var totalCount=0;
  	for(var i in cart){
  		totalCount+=cart[i].count;
  	}
  	 return totalCount;  
  }
/*************** return total cost of all the items in cart ************** */ 
function totalCost(){
  var totalCartCost=0;
   for(var i in cart){
   	 totalCartCost+=cart[i].price*cart[i].count; 
   }
     return totalCartCost; 
}
/******************************* return copy of array of items ************** */  
   function listCart(){   
      var cartCopy=[];  
      for(var i in cart){
        var item=cart[i];
        var itemCopy={};
        for(var p in item){
        	itemCopy[p]=item[p]; 
        	     
        	}
        	cartCopy.push(itemCopy);       
    }	
           
      return cartCopy;   
}
/******************************* save added Item in cart  ***************** */
 function saveCart(){
    localStorage.setItem("shoppingCart",JSON.stringify(cart));   
 }
/******************* retrive saved cartItems  ****************************** */
 function loadCart(){
 	cart=JSON.parse(localStorage.getItem("shoppingCart"));  
 }
/*  loadCart() ;*/     
 /* var array=listCart();
  console.log(array);*/   

/************************* clearCart()***********************************/
 function clearCart(){
 	cart=[];
 	saveCart();      
 	displayCart();      
 }  
      
 
/***************************** clear cart  ***********************************/ 
$('#clearAll').click(function(event){
   event.preventDefault();
   clearCart();  
   
    var count=countCart();    
    document.getElementById("itemCount").innerHTML=count;   
  
}) ;  
/******************showCart() and hideCart()************** */  


/*$("#shop_cart").click(function(event) {  
    var x = document.getElementById('showTheCart');
    if (x.style.display === 'none') {
        x.style.display = 'block';
        x.style. visibility='visible'   
        var count=countCart();   
        document.getElementById("itemCount").style.display="none";     
    } else {
        x.style.display = 'none';
         x.style. visibility='hidden';     
        var count=countCart();
        document.getElementById("itemCount").style.display="block";     
        document.getElementById("itemCount").innerHTML=count;    
 
    }          
}) */     
/************************fadeIn list **************/    
/*$(document).ready(function(){  
    $("button").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");  
        $("#div3").fadeIn(3000);
    });
});*/
/*********************** show and hide product catogory ******/  

/*$(document).ready(function(){  
    $("#fruits").click(function(){
        $("#productContainer").show();
        /*$("#div2").fadeIn("slow");  
        $("#div3").fadeIn(3000);*/
/*    });
});*/      




}) ;    