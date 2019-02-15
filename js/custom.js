




var navi = document.getElementById("mySidenav").style;

function openNav() {
	nav.width = "250px";
}

function closeNav() {
  nav.width = "0";
}

var xx;
var b = document.body;

window.addEventListener('load', function(){
	
	b.addEventListener('touchstart', function(e){
		xx = e.touches[0].clientX;
	});
	
	
	b.addEventListener('touchmove', function(e){
		var change = e.touches[0].clientX - xx ;
		var test = e.touches[0].clientX;

		if( test <= 70  && change > 30){ // reveal
			navi.width = '250px';
		}
		if(change < -50 ) { // hide
			navi.width = '0px';
		}
	});

	
	
});