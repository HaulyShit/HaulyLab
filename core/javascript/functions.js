function loadIframe(iframeName, url) {
	var $iframe = $('.' + iframeName);
	if ($iframe.length) {
		$iframe.attr('src', url);
		return false;
	}
	return true;

}

function loadSite() {

	var site = location.hash;
	site = site.substr(1, site.length - 1);

	loadIframe("haulylab-iframe iframe", site);
}

function printSize($width, $height) {
	$('.haulylab-viewport--size').html($width + '*' + $height);
	// console.log($width + '*' + $height);
}

function randomWidth($start, $end) {

	if ($start === undefined) {
		var $start = 0,
		    nWidth = Math.floor(Math.random() * $end) + $start;
	} else if ($end === undefined) {
		$end = "";
		var nWidth = Math.floor(Math.random() * (Math.floor($(window).width()) - Math.floor($start) + 1)) + Math.floor($start);
	} else {
		var nWidth = Math.floor(Math.random() * (Math.floor($end) - Math.floor($start) + 1)) + Math.floor($start);

	}

	return nWidth;

}

loadSite();
///********************************************************************************
// * jQuery Document ready
///*******************************************************************************/
$(function() {

	/********************************************************************************
	 *      ___  __     __  ____   __   __      _  _   __   ____  ____
	 *     / __)(  )   /  \(  _ \ / _\ (  )    / )( \ / _\ (  _ \/ ___)
	 *    ( (_ \/ (_/\(  O )) _ (/    \/ (_/\  \ \/ //    \ )   /\___ \
	 *     \___/\____/ \__/(____/\_/\_/\____/   \__/ \_/\_/(__\_)(____/
	 *
	 * @formatter:off
	 /*******************************************************************************/
	var $haulyLab			= jQuery('.haulylab'),
	    $haulyLabIframe 	= jQuery('.haulylab-iframe iframe'),
	    $haulyLabMenu		= jQuery('.haulylab-menu'),
	    $haulyLabMenuLink	= jQuery('.haulylab-menu a');

	/********************************************************************************
	 * @formatter:on
	 *     ____   __   _  _  _  _   __   ____  _  _  __  __ _   ___
	 *    (    \ /  \ ( \/ )/ )( \ / _\ / ___)/ )( \(  )(  ( \ / __)
	 *     ) D ((  O )/ \/ \) __ (/    \\___ \) __ ( )( /    /( (_ \
	 *    (____/ \__/ \_)(_/\_)(_/\_/\_/(____/\_)(_/(__)\_)__) \___/
	 *
	 *******************************************************************************/

	$haulyLabMenuLink.click(function(e) {
		e.preventDefault();

		var href = $(this).attr('href');

		if (href != '#') {
			loadIframe("haulylab-iframe iframe", href);
			window.location.hash = href;
		}

	});

	printSize($haulyLabIframe.width(), $haulyLabIframe.height());

	$('.breakpoint').click(function() {

		$start = $(this).attr('data-breakpoint-start');
		$end = $(this).attr('data-breakpoint-end');

		nWidth = randomWidth($start, $end);

		$('.haulylab-iframe iframe').css({
			"width" : nWidth,
			"margin-left" : (nWidth / 2) * (-1)
		});
		
		
		printSize( nWidth, $('.haulylab-iframe iframe').height() );

	});

});
