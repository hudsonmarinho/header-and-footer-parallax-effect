//<![CDATA[
// scrollFooter() create function to verify scroll position and thus hide the footer.
function scrollFooter(scrollY, heightFooter)
{
	if(scrollY >= heightFooter)
	{
		$('footer').css({
			'bottom' : '0px'
		});
	}
	else
	{
		$('footer').css({
			'bottom' : '-' + heightFooter + 'px'
		});
	}
}

// Start Action to load the whole page
$(window).load(function(){
	var windowHeight	= $(window).height(),
		footerHeight	= $('footer').height(),
		heightDocument	= (windowHeight) + ($('.content').height()) + ($('footer').height());

	// Defining the size of the element to animate
	$('#scroll-animate, #scroll-animate-main').css({
		'height' :  heightDocument + 'px'
	});

	// Defining the size of the header and content elements
	$('header').css({
		'height' : windowHeight + 'px',
		'line-height' : windowHeight + 'px'
	});

	$('.wrapper-parallax').css({
		'margin-top' : windowHeight + 'px'
	});

	// Getting function scrollFooter() to verify the position of the scroll and hide the footer
	scrollFooter(window.scrollY, footerHeight);

	// Start Action on scrolling
	window.onscroll = function(){
		var scroll = window.scrollY;

		// Creating the effect of smooth animation content to use the scroll.
		$('#scroll-animate-main').css({
			'top' : '-' + scroll + 'px'
		});

		// Creating sensation of parallax in the header bg.
		$('header').css({
			'background-position-y' : 50 - (scroll * 100 / heightDocument) + '%'
		});

		// On scrolling using function scrollFooter() to verify the position of the scroll and hide the footer
		scrollFooter(scroll, footerHeight);
	};
});
//]]>
