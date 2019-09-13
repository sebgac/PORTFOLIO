<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>

    <style>
        #retours {
            font-family: 'PT Mono', monospace;
            font-size: 0.8rem;
            color: #939393;
        }

        hr {
            /* border: 1px solid #939393; */
            border: 0;
            height: 1px;
            background: #3a3a3a;
            background-image: linear-gradient(to right, #000000, #3a3a3a, #000000);
        }

        ::-webkit-scrollbar {
            width: 8px;
        }

        ::-webkit-scrollbar-thumb {
            background: rgba(120, 120, 120, 0.8);
        }
    </style>

</head>

<body>

    <div id="retours">

        <?php

        // on établit la connection

        include('connect.php');

        // selection des données à afficher sur le livre d'or au chargement de la page

        // Avec mysqli

        /* 

        $sql = "SELECT * FROM livreOrPortfolioPhoto ORDER BY id DESC";
        $res = mysqli_query($conn, $sql); 

        while ($row = $res->fetch_assoc()) {
            echo "<br><table>
            <tr>
                <td>Nom :</td>
                <td>" . $row["name"] . "</td>
            </tr>
            <tr>
                <td>Website :</td>
                <td>" . $row["website"] . "</td>
            </tr>
            <tr>
                <td>Message :</td>
                <td>" . $row["msg"] . "</td>
            </tr>
            </table><br><hr>";
        } 

        */

        // Avec PDO

        $res=$conn->query('SELECT * FROM livreOrPortfolioPhoto ORDER BY id DESC');

        $resultats = $res->fetchAll(PDO::FETCH_ASSOC);

        foreach ($resultats as $key => $value) {
            
            echo "<br><table>
            <tr>
                <td>Nom :</td>
                <td>" . $value["name"] . "</td>
            </tr>
            <tr>
                <td>Website :</td>
                <td><a href=". $value["website"] . " target='_blank'>Lien vers site web</a></td>
            </tr>
            <tr>
                <td>Message :</td>
                <td>" . $value["msg"] . "</td>
            </tr>
            </table><br><hr>";
            }


            // TODO: mettre le lien vers siet web uniquement
            
        $conn = null;

        ?>

</body>

</html>