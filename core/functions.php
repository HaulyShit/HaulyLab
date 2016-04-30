<?php
// INCLUDE THE SETTINGS
require_once __DIR__.'/../_settings.php';

function printr($arr) {
	echo "<pre>";
	print_r($arr);
	echo "</pre>";
}


/*
 * NAVIGATIONS
 */
 require_once 'navigation/navigation.php';
 
 
 
 
 
/*
 * OVERVIEW
 */
 require_once 'builds/overview/overview.php';
 
 
 
 
/*
 * STATIC-FILES
 */
 // require_once 'builds/static-files/static-files.php';
 
 
 
 
/*
 * TRANSLATE
 */
 require_once 'builds/translate/translate.php';

?>