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


//                 image click slider            



var images = document.querySelectorAll(".sscolrowch");

for (var i=0;i<images.length;i++){
	
	images[i].onclick = function(){
		
		document.getElementById("mimg").firstElementChild.src = this.firstElementChild.src;
	}
	
}




//                               google map function                       



function myMap() {
  var mapCanvas = document.getElementById("map");
  var myCenter = new google.maps.LatLng(51.508742,-0.120850);
	
  var mapOptions = {
	  
	center: myCenter,
    zoom: 5,
	  
//	disableDefaultUI: true,
//    panControl: true,
//    zoomControl: true,
//    mapTypeControl: true,
//    scaleControl: true,
//    streetViewControl: true,
//    overviewMapControl: true,
//    rotateControl: true 
	  
  };
	
  var map = new google.maps.Map(mapCanvas,mapOptions);
	
  var marker = new google.maps.Marker({
	  
    position: myCenter,
    animation: google.maps.Animation.BOUNCE
	  
  });
	
  marker.setMap(map);
	
}












