a = document.getElementById("1");
b = document.getElementById("2");
c = document.getElementById("3");
d = document.getElementById("4");
e = document.getElementById("5");
f = document.getElementById("6");
g = document.getElementById("7");
h = document.getElementById("8");
i = document.getElementById("9");
// the document.getElementById's actually put them into html and also to make to put it into the function checkImage to make them a,b,c,d,e,f,g,h,i and the functions rotateImage is setting up by using the onclick to do the classlist.toggle and also to add class and also in the if else if *//
var img = document.getElementById('blinking_image');

var interval = window.setInterval(function(){
    if(img.display == 'hidden'){
        img.style.visibility = 'visible';
    }else{
        img.style.visibility = 'hidden';
    }
}, 1000);

function rotateImage(el){
	el.classList.toggle("rotate");
	el.classList.add("rotate");
}
function rotateImage2(el){
	el.classList.toggle("rotate2");
	el.classList.add("rotate2");
}
function rotateImage3(el){
	el.classList.toggle("rotate3");
	el.classList.add("rotate3");
}
function checkImage(el){
	if(a.classList.contains("rotate") && b.classList.contains("rotate2") && c.classList.contains("rotate3") && d.classList.contains("rotate")&& e.classList.contains("rotate2")&& f.classList.contains("rotate3")&& g.classList.contains("rotate")&& h.classList.contains("rotate2")&& i.classList.contains("rotate3")){
		console.log("You Win!");
		a.classList.add("opaque");
		b.classList.add("opaque");
		c.classList.add("opaque");
		d.classList.add("opaque");
		e.classList.add("opaque");
		f.classList.add("opaque");
		g.classList.add("opaque");
		h.classList.add("opaque");
		i.classList.add("opaque");
		document.getElementById("key").classList.remove("hide");
	}
	else {
		window.alert("awww");
	}

}
function on(){
	if (document.getElementById)
		//the value for visibility of the logo image with will visible
	document.getElementById("blink1").style.visibility = "visible";
}
//this function is to hide the logo with the value hidden
function off(){
	if (document.getElementById)
	document.getElementById("blink1").style.visibility = "hidden";
}

// toggle "on" and "off"every 500 ms to show the nhl logo blinking
// end after 5500 ms which is about 5 seconds
for(var i=900; i < 5500; i=i+900){
	setTimeout("off()",i);
	setTimeout("on()",i+500);
}
