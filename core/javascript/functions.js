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

	loadIframe("haulylab-iframe iframe", site );
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
	 * @formatter: off
	 /*******************************************************************************/
	var $haulyLab = jQuery('.haulylab'),
	    $haulyLabIframe = jQuery('.haulylab-iframe iframe'),
	    $haulyLabMenu = jQuery('.haulylab-menu'),
	    $haulyLabMenuLink = jQuery('.haulylab-menu a');

	/********************************************************************************
	 * @formatter: on
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

});
