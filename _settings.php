<?php
/*
 * MENU
 * If you don't want use the default navigation and you want use your own
 * specific links, then set the $menuJson as true and edit the
 * core/navigation/menu.json.
 */
// $menuJson = TRUE;
$menuJson = FALSE;

/*
 * BREAKPOINTS
 * This give you the possibility to change the viewport-resize-action-settings
 * Haulylab works with the indices "end" and "start". But you can delete this
 * indices in the sub array of $haulylabBreakpoints.
 *
 * But keep in mind if you don't use "end" then Haulylab thinks: "okay 'end' is the
 * window width". If you don't use "start", haulylab use 0 as start.
 *
 * @formatter:off
 */
$haulylabBreakpoints = array( 
	"m"	=>	array( 
				"end" => 640
			),
	"t"	=>	array( 
				"start" => 641, 
				"end" => 1023
			),
	"d"	=>	array( 
				"start" => 1023
			)
);
// @formatter:on
?>