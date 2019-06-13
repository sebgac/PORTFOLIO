<?php

include('connect.php');

// récupération des données du formulaire

$name = $_POST['name'];
$mail = $_POST['mail'];
$website = $_POST['website'];
$msg = $_POST['msg'];

// requête SQL pour insérer les données dans la BDD

// Avec mysqli

/* $sql = "INSERT INTO livreOrPortfolioPhoto (name, mail, website, msg) VALUES ('$name', '$mail', '$website', '$msg')";
mysqli_query($conn, $sql); */

// Avec PDO requete préparée pour sécuriser vis à vis des injections SQL

/* $sql = "INSERT INTO livreOrPortfolioPhoto (name, mail, website, msg) VALUES (:name, :mail, :website, :msg)";
$conn->exec($sql); */

$requete = $conn->prepare('INSERT INTO livreOrPortfolioPhoto (name, mail, website, msg) VALUES (:name, :mail, :website, :msg)');
$requete->bindParam(':name', $name, PDO::PARAM_STR);
$requete->bindParam(':mail', $mail, PDO::PARAM_STR);
$requete->bindParam(':website', $website, PDO::PARAM_STR);
$requete->bindParam(':msg', $msg, PDO::PARAM_STR);
$requete->execute();

/* $resultats = $requete->fetchAll(PDO::FETCH_OBJ); // PDO::FETCH_OBJ // PDO::FETCH_BOTH (défaut)
var_dump($resultats); */

$conn = null;
