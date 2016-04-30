<?php
function navigation() {
?>

<nav class="haulylab-menu">
	
	<?php
		global $menuJson;
	
		if ( $menuJson === FALSE ) {
			require_once 'navigation_scan-files.php'; 
		} else {
			require_once 'navigation_json.php'; 			
		}
		
		require_once 'navigation_actions.php';
	
	?>
	
</nav>

<?php
}
?>