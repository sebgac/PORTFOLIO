<link href="css/style_form.css" rel="stylesheet" />

<style>
    
    #myFrame {
        border: none;
        height: 40vh;
    }

    
</style>

<script type="text/javascript" src="js/livreAjax.js"></script>

<!-- TO DO : diviser verticalement la page. Gauche message, droite les messages -->

<div class="titre">
    <h2>Livre d'or</h2>
</div>
<div id="caroussel">
    <div id="form">

        <form method="post">
            <fieldset>
                <div style="margin-top:20px;">
                    <label id="name_label" for="name">Nom :</label>
                    <input type="text" id="name" name="name" value="" placeholder="Votre nom ..." autofocus>
                </div>
                <div>
                    <label id="mail_label" for="mail">e-mail :</label>
                    <input type="email" id="mail" name="mail" value="" placeholder="Votre email ...">
                </div>
                <div>
                    <label id="website_label" for="website">website :</label>
                    <input type="text" id="website" name="website" value="" placeholder="Votre site web">
                </div>
                <div>
                    <label id="msg_label" for="msg">Message :</label>
                    <textarea id="msg" name="msg" value="" placeholder="Votre message ..."></textarea>
                </div>
                <div style="margin: 20px;">
                    <input type="submit" id="submit" name="submit" value="Envoyer">
                </div>
            </fieldset>
        </form>
    </div>

    <div id="iframe">

        <iframe src="pages/livre_iframe.php" width="90%" height="40vh" frameborder="0" name="myFrame" id="myFrame" style="border:none"></iframe>

    </div>

    <div id="feedback">

        <?php

/*         

        include('connect.php');

        

        $sql = "SELECT * FROM livreOrPortfolioPhoto ORDER BY id DESC";

        $result = mysqli_query($conn, $sql);

        while ($row = $result->fetch_assoc()) {
            echo "<hr><br>" . $row["name"] . " " . $row["mail"] . " " . $row["website"] . " " . $row["msg"] . "<br><br>";
        } */

        ?>

    </div>

</div>

<div>

</div>