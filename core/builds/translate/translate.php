<?php
function __($ex) {
    echo "$ex";
}


/**
 * Mockobject
 */
class Mockobject {
	
	function __call( $name, $arguments ) {
		return $this;
	}
	
	
		
	function __toString(  ) {
		return "";
	}
	
	
		
	
	
}




$block= new Mockobject();


?>