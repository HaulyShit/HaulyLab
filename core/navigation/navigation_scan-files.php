<ul>
	<?php

	$dir = "patterns";

	$dir_all = scandir($dir);
	unset($dir_all[0], $dir_all[1]);

	foreach ($dir_all as $dir_firstlevel) {
		unset($dir_all[0], $dir_all[1]);

		// echo "<li><a href='$dir/$dir_firstlevel/'>$dir_firstlevel</a>";
		echo "<li><a href='#'>$dir_firstlevel</a>";

		$dir_sub = scandir($dir . '/' . $dir_firstlevel);
		unset($dir_sub[0], $dir_sub[1]);

		echo "<ul>";
		foreach ($dir_sub as $dir_secondlevel) {

			// @formatter: off
			// echo "<li> <a href='$dir/$dir_firstlevel/$dir_secondlevel/'>$dir_secondlevel</a> <ul>";
			echo "<li> <a href='#'>$dir_secondlevel</a> <ul>";
			
			$dir_sub2 = scandir($dir . '/' . $dir_firstlevel . '/' . $dir_secondlevel);
			unset($dir_sub2[0], $dir_sub2[1]);
			
			foreach ($dir_sub2 as $dir_thirdlevel) {
				
				echo "<li><a href='$dir/$dir_firstlevel/$dir_secondlevel/$dir_thirdlevel'>$dir_thirdlevel</a></li>";
				
			}
					
			echo "</ul>";
			
			// @formatter: on

		}
		echo "</ul>";

		echo "</li>";

	}
	?>
</ul>