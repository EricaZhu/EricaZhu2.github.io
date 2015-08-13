function show(id) {
	document.getElementByld(id).style.display='block';
}
function hide(id) {
	document.getElementByld(id).style.display='none';
}


var timeout = 500;
var closetimer= 0;
var ddmenuitem = 0;
// open hidden layer
function mopen(id)
{	
	// cancel close timer
	mcancelclosetime();

	// close old layer
	if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';

	// get new layer and show it
	ddmenuitem = document.getElementById(id);
	ddmenuitem.style.visibility = 'visible';

}
// close showed layer
function mclose()
{
	if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';
}

// go close timer
function mclosetime()
{
	closetimer = window.setTimeout(mclose, timeout);
}

// cancel close timer
function mcancelclosetime()
{
	if(closetimer)
	{
		window.clearTimeout(closetimer);
		closetimer = null;
	}
}

// close layer when click-out
document.onclick = mclose; 



/*
$(document).ready(function() {
 
        //Calculate the height of <header>
        //Use outerHeight() instead of height() if have padding
        var aboveHeight = $('nav').outerHeight();
 
	//when scroll
        $(window).scroll(function(){
 
	        //if scrolled down more than the header’s height
                if ($(window).scrollTop() > aboveHeight){
 
	        // if yes, add “fixed” class to the <nav>
	        // add padding top to the #content 
                (value is same as the height of the nav)
                $('nav').addClass('fixed').css('top','0').next()
                .css('padding-top','60px');
 
                } else {
 
	        // when scroll up or less than aboveHeight,
                remove the “fixed” class, and the padding-top
                $('nav').removeClass('fixed').next()
                .css('padding-top','0');
                }
        });
});*/