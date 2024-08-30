var isStatus = document.querySelector("h5");

var add = document.querySelector("#add");

var remove = document.querySelector("#remove");
var check = 0

add.addEventListener("click", function(){
    if(check == 0)
        {
     isStatus.innerHTML= "Friends"
    isStatus.style.color= "green"
    add.innerHTML = "Remove"
    check = 1
    }else{
        isStatus.innerHTML= "Stranger"
    isStatus.style.color= "red"
    add.innerHTML = "Add"
     check = 0
        
    }
   
    
})
var con = document.querySelector("#btLike");

var Icone = document.querySelector("i");
var lOve = 0
con.addEventListener("dblclick",function(){
    console.log("hello")
   
   if(lOve==0 & check==1){
Icone.style.color= "Red"
lOve=1
check=1

   }else{
    Icone.style.color="royalblue"
    lOve=0
    check=0

   }
    
})

// remove.addEventListener("click", function(){
//     isStatus.innerHTML = "Remove"
//     isStatus.style.color= "red"

// })
