<?php

include ('connect.php');

// securisation des données du formulaire (à changer)

$name = htmlspecialchars($_POST['name']) ;
$mail = htmlspecialchars($_POST['mail']);
$website = htmlspecialchars($_POST['website']);
$msg = addslashes(htmlspecialchars($_POST['msg']));

// TO DO : effectuer une requete préparée pour sécuriser les données à la place de htmlspecialchars

// requête SQL pour insérer les données dans la BDD

$sql = "INSERT INTO livreOrPortfolioPhoto (name, mail, website, msg) VALUES ('$name', '$mail', '$website', '$msg')";

mysqli_query($conn, $sql);