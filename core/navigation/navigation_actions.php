<ul class="haulylab-menu--action">
	<li>
		<a href="#">Size <span class="haulylab-viewport--size">1920*1080</span></a>
	</li>
	
	<?php
		global $haulylabBreakpoints;
		foreach ($haulylabBreakpoints as $alias => $points) {

			if ( !array_key_exists('start', $points) ) {
				$start = "";
			} else {
				$start = "data-breakpoint-start='$points[start]'";
			}
			
			if ( !array_key_exists('end', $points) ) {
				$end = "";
			} else {
				$end = "data-breakpoint-end='$points[end]'";
			}

			echo "<li><a href='#' class='breakpoint' $start $end >$alias</a></li>";
		}
	
	?>
	
	<li>View
		<ul>
			<li><a href="">Annotations</a></li>
			<li><a href="">Code</a></li>
			<li><a href="" target="_blank" class="haulylab-blank">Open in a new Window</a></li>
		</ul>
	</li>
	
</ul>