//        decrease padding with function       


window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        document.getElementsByClassName("navbar")[0].classList.add("navbarani");
    }else{
       document.getElementsByClassName("navbar")[0].classList.remove("navbarani"); 
    }
}


//        hide empty span in navbar img icons           


var emspan = document.querySelectorAll(".iconimg span");
var i;
for(i=0;i<emspan.length;i++){
    if(emspan[i].innerHTML===""){
        emspan[i].style.display="none";
    }
}

//       toggle responsive class for menu btn         


$(document).ready(function(){
    $(".dpointer").click(function(){
        $(".navbar").toggleClass("responsive");
    })
});

//      show sidenavbar       


var sidenavbar =  document.getElementsByClassName("sidenavbar")[0];

function show(){
   sidenavbar.style.display = "block";
}


//         close sidenavbar        


document.querySelector(".closebtn").onclick = function(){
     this.parentElement.style.display = "none";
}



//                                                       input range                       



var range = document.getElementById("myRange");
var output = document.getElementsByClassName("inputvalue")[0];
output.innerHTML = Math.floor((range.value*116/100) + 83); 

range.oninput = function() {
    output.innerHTML = Math.floor((range.value*116/100) + 83);
}



//                                          select function


//       sort function 


function pricesort(){
                
                var i,switching,shouldswitch,b;
                switching = true;
                
                while(switching){
                    switching = false;
                    b = document.querySelectorAll(".procol1 p:last-child span");
                    for(i=0;i<b.length - 1;i++){
                        shouldswitch = false;
                        if((b[i].innerHTML - b[i+1].innerHTML) > 0 ){
                            shouldswitch = true;break;
                        }
                    }
                    
                    if(shouldswitch){
                        b[i].parentNode.parentNode.parentNode.parentNode.insertBefore(b[i+1].parentNode.parentNode.parentNode,b[i].parentNode.parentNode.parentNode);
                        switching = true;
                    }
                    
                }
            };



//    var select one and two 


var select1 = document.getElementById("fiselect");  
var select2 = document.getElementById("seselect");

//     select two function


select2.onchange = function(){
            
            pricesort();
    
    //     to set classes (three six all)  or write them in html page

        var elements  = document.querySelectorAll(".row .col");

        for(var i = 0;i<3;i++){
            elements[i].classList.add("three");
        }

        for(var i = 0;i<6;i++){
            elements[i].classList.add("six");
        }

        for(var i = 0;i<12;i++){
            elements[i].classList.add("all");
        }

    
    
    if(select2.options["selectedIndex"] === 2){
        
        
        var all = document.getElementsByClassName("all");
        
        for (var i = 0;i<all.length;i++){
            all[i].style.display = "block";
        }
        
        }else if(select2.options["selectedIndex"] === 1){
            
        var all = document.getElementsByClassName("all");
        
        for (var i = 0;i<all.length;i++){
            all[i].style.display = "none";
        }
        
        var six = document.getElementsByClassName("six");
        
        for (var i = 0;i<six.length;i++){
            six[i].style.display = "block";
        }
            
            
    }else{
        var all = document.getElementsByClassName("all");
        
        for (var i = 0;i<all.length;i++){
            all[i].style.display = "none";
        }
        
        var three = document.getElementsByClassName("three");
        
        for (var i = 0;i<three.length;i++){
            three[i].style.display = "block";
        }
    }
}



//              select one


select1.onchange = function(){
        
    
    if(select1.options["selectedIndex"] === 0){
                
        var all = document.getElementsByClassName("all");
        
        for (var i = 0;i<all.length;i++){
            all[i].style.display = "block";
        }
        
        }else if(select1.options["selectedIndex"] === 1){
            
            pricesort();
            
    }
}




