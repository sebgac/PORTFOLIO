<?php

// TODO: comment sécuriser password ? ne pas afficher dans le code

$servername = "db5000062859.hosting-data.io";
$username = "dbu12292";
$password = "%6Pfd=8K^mK9@7Ym";
$dbname = "dbs57608";
$port = "3306";

// Creation de la connection

$conn = mysqli_connect($servername, $username, $password, $dbname, $port);

// Check connection

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// TODO: établir une connexion PDO avec preparation de requete pour sécuriser les données.

