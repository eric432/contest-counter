<?php

$num = $_POST["data"];
$numcontent = str_replace( ',', '', $num );
$numcontent = $numcontent+1;
$filename = 'counter.txt';

// Is counter writable.
if (is_writable($filename)) {
    if (!$handle = fopen($filename, 'r+')) {
         echo "Cannot open file ($filename)";
         exit;
    }
    if (fwrite($handle, $numcontent) === FALSE) {
        echo "Cannot write to file ($filename)";
        exit;
    }
    echo "Success, wrote ($numcontent) to file ($filename)";

    fclose($handle);

} else {
    echo "The file $filename is not writable";
}

?>
