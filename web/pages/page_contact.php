<?php

/* $mail = htmlspecialchars($_POST['mail']);
$name= htmlspecialchars($_POST['name']);
$msg= htmlspecialchars($_POST['message']); */

ini_set( 'display_errors', 1 );
 
error_reporting( E_ALL );

$from = $_POST['mail'];

$to = "sebgac@gmail.com";

$subject = "Message de " . $_POST['name'] . " provenant du site sebgac.com";

$message = $_POST['message'];

$headers = "From:" . $from;

mail($to,$subject,$message, $headers);

echo "L'email a été envoyé";

header ('location : contact.html');