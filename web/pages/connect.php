<?php

// TODO: comment sécuriser password ? ne pas afficher dans le code : voir avec htaccess ?

$servername = "db5000062859.hosting-data.io";
$username = "dbu12292";
$password = "%6Pfd=8K^mK9@7Ym";
$dbname = "dbs57608";
/* $port = "3306"; */

// Avec Mysqli

/* $conn = mysqli_connect($servername, $username, $password, $dbname, $port); 

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
} */

// Avec PDO

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
 
 }
 catch(PDOException $e){
    echo "Error: " . $e->getMessage();
 }
 
