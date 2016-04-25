<?php
function printr($arr) {
	echo "<pre>";
	print_r($arr);
	echo "</pre>";
}

/*
 * NAVIGATIONS
 */

 require_once 'navigation/navigation.php';
 require_once 'builds/overview/overview.php';
 // require_once 'builds/static-files/static-files.php';
 require_once 'builds/translate/translate.php';

?>