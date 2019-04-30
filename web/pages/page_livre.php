<?php

include ('connect.php');

// securisation des données du formulaire

$name = htmlspecialchars($_POST['name']) ;
$mail = htmlspecialchars($_POST['mail']);
$website = htmlspecialchars($_POST['website']);
$msg = htmlentities($_POST['msg']);

// requête SQL pour insérer les données dans la BDD

$sql = "INSERT INTO livreOrPortfolioPhoto (name, mail, website, msg) VALUES ('$name', '$mail', '$website', '$msg')";

mysqli_query($conn, $sql);