<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- <link href="../css/style.css" rel="stylesheet" /> -->
    <title>Document</title>

    <style>
    
        #retours{
            color: white;
        }

    </style>

</head>
<body>
  
<div id="retours">

<?php

// on établit la connection

include('connect.php');

// selection des données à afficher sur le livre d'or au chargement de la page

$sql = "SELECT * FROM livreOrPortfolioPhoto ORDER BY id DESC";

$result = mysqli_query($conn, $sql);

while ($row = $result->fetch_assoc()) {
    echo "<hr><br>" . $row["name"]. " " . $row["mail"]. " " . $row["website"]. " " . $row["msg"] . "<br><br>";
}

?>

</div>



</body>
</html>
    

 