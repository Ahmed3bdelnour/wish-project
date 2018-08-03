//        decrease padding with function       


window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        document.getElementsByClassName("navbar")[0].classList.add("navbarani");
    }else{
       document.getElementsByClassName("navbar")[0].classList.remove("navbarani"); 
    }
};


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
    });
});


//      show sidenavbar       


var sidenavbar =  document.getElementsByClassName("sidenavbar")[0];

function show(){
   sidenavbar.style.display = "block";
}


//         close sidenavbar        


document.querySelector(".closebtn").onclick = function(){
     this.parentElement.style.display = "none";
};


//            slider function           


function showSlides() {

  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
     
  
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
      dots[i].classList.remove("active");

    }
   
  //  parameter (n)
  
    if (n > slides.length-1) {n = 0;}   
    if (n < 0) {n = slides.length-1;}
  
    slides[n].style.display = "block";        
    dots[n].classList.add("active");
    
    insertline();
   
}

showSlides(n=0);

setInterval(function(){showSlides(n+=1);},4000);



//                   inserting line after active dot                     



function insertline(){

  var dotscont = document.getElementsByClassName("bottomindicator")[0] ;
  var empty =  document.getElementsByClassName("empty")[0] ;
  var active =  document.getElementsByClassName("active")[0] ;
    
  dotscont.insertBefore(empty,active.nextElementSibling);
    
}

var images = document.getElementsByClassName("s3img");
var x;

function imgfunc(){
    
    document.getElementsByClassName("coverdiv")[0].style = "transform:scale(1)";
    document.querySelector(".indiv img").src = this.firstElementChild.src;
    
}

for(x=0;x<images.length;x++){
    
    images[x].onclick = imgfunc;
}
    
    

document.getElementsByClassName("times")[0].onclick = function(){
    this.parentElement.style = "transform:scale(0)";
};



//               testemonial slider                



function showTestemonials() {

    var i;
    var testemonials = document.getElementsByClassName("teslide");
           
    for (i = 0; i < testemonials.length; i++) {
        testemonials[i].style.display = "none";   
      }
     
    //  parameter (n)
    
      if (x > testemonials.length-1) {x = 0;}   
      if (x < 0) {x = testemonials.length-1;}
    
      testemonials[x].style.display = "block";
  }


showTestemonials(x = 0);
setInterval(function(){showTestemonials(x += 1);},4000);




