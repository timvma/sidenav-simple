
// NAVBAR SCROLL
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}




// SIDENAV TOUCH

//document.body.addEventListener('touchmove',navTouchMove(event),false);
//document.body.addEventListener('touchend',navTouchEnd(event),false);
//document.getElementById('page').addEventListener('touchstart',navTouchStart(event));


function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

var navi = document.getElementById('mySidenav');
var startingX;

function navTouchStart(evt){
	startingX = evt.touches[0].clientX;
}
function navTouchMove(evt){
	var change = evt.touches[0].clientX - startingX ;
	var test = evt.touches[0].clientX;

	if( test <= 70  && change > 30){ // reveal
		navi.style.width = '250px';
	}
	if(change < -50 ) { // hide
		navi.style.width = '0px';
	}
}
