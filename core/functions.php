<?php
// INCLUDE THE SETTINGS
require_once __DIR__.'/../_settings.php';

// CATCH ERRORS
$handler = function ( $errno , $errstr) {
	echo "$errstr";
	return true;
};
set_error_handler($handler, E_ALL );
function fatal_handler() {
  $errfile = "unknown file";
  $errstr  = "shutdown";
  $errno   = E_CORE_ERROR;
  $errline = 0;

  $error = error_get_last();

  if( $error !== NULL) {
    $errno   = $error["type"];
    $errfile = $error["file"];
    $errline = $error["line"];
    $errstr  = $error["message"];
  }
}
register_shutdown_function( "fatal_handler" );




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