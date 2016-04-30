<?php

// echo '<a href="#">hallo welt</a>';

$jsonfile = file_get_contents('core/navigation/menu.json');

$jsonarray = json_decode($jsonfile);

// printr($jsonarray);
?>
<ul>

	<?php
	foreach ($jsonarray->menu as $dirs) {

		// printr($mydata);
		foreach ($dirs as $dir) {

			foreach ($dir as $value) {
				// printr($value);
				
				echo "<li><a href='$value->dirurl'>$value->dirname</a><ul>";
				
				foreach ($value->links as $value) {
					echo "<li><a href='$value->url'>$value->value</a></li>";
				}
				
				echo "</ul></li>";

			}

		}
		// foreach ($mydata->values as $values) {
		// echo $values -> value . "\n";
		// }

	}
?>
</ul>