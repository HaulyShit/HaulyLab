<?php
$out1 = ob_get_contents();

$datei = fopen("public/daten.html", "w");
echo fwrite($datei, $out1);
fclose($datei);
?>