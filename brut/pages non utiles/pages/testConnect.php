<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
        <?php

        $servername = "db5000062859.hosting-data.io";
        $username = "dbu12292";
        $password = "%6Pfd=8K^mK9@7Ym";
        $dbname = "livreOrPortfolioPhoto";
        $port = "3306";
        
        // Creation de la connection
        
        $conn = mysqli_connect($servername, $username, $password, $dbname, $port);
        
        // Check connection
        
        if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
        }
        
        echo "Connected successfully";
        
        ?>
        

</body>
</html>