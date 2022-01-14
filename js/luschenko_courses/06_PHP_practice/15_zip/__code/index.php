<?php

 $zip = new ZipArchive();
 $filename = "./test112.zip";

 if ($zip->open($filename, ZipArchive::CREATE)!==TRUE) {
     exit("Невозможно открыть <$filename>\n");
 }

 $zip->addFile("./text.txt");
 echo "numFiles: " . $zip->numFiles . "\n";
 echo "status: " . $zip->status  . "\n";
 echo "statusSys: " . $zip->statusSys . "\n";
 echo "filename: " . $zip->filename . "\n";
 echo "comment: " . $zip->comment . "\n";
 $zip->close();
?>
<?php
    $zip = new ZipArchive;
    $zip->open('test112.zip');
    $zip->extractTo('./unzip');
    $zip->close();
        echo "Ok!";
?>