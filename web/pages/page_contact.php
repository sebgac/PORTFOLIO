<?php

$name = htmlspecialchars($_POST['name']) ;
$mail = htmlspecialchars($_POST['mail']);
$msg = htmlspecialchars($_POST['msg']);

ini_set( 'display_errors', 1 );
 
error_reporting( E_ALL );

// Gmail supprime arbitrairement les emails si je mentionne une adresse email dans cette variable ...

$from = "Portfolio";

$to = "sebgac@gmail.com";

$subject = "Message de " . $name . " provenant de mon site portfolio";

// ... j'ai donc inclu l'email de l'expéditeur dans le message

$message = "Adresse email : " . $mail . " et son message : " .$msg;

$headers = "From:" . $from;

// fonction qui permet l'envoi de l'email

mail($to,$subject,$message, $headers);

// TODO: m'envoyer un email lorsqu'un message est déposé sur le livre d'or