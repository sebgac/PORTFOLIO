<style>
    section {
        justify-content: space-between;
    }

    form {
        /* Uniquement centrer le formulaire sur la page */
        margin: auto;
        width: 80%;
        /* Encadré pour voir les limites du formulaire */
        padding: 10px;

    }

    label {
        display: inline-block;
        width: 25%;
        text-align: right;
        padding: 1em
    }

    fieldset {
        border-color: #3a3a3a;
    }

    fieldset>div {
        margin: 10px 0;
    }

    input,
    textarea {
        font-size: 1em;
        width: 50%;
    }

    textarea {
        vertical-align: top;
        height: 10em;
    }

    input#submit {
        width: 70px;
        font-family: monospace;
        font-size: 2rem;
    }


</style>

<?php

if(isset($_POST['submit'])){

echo "L'email a été envoyé";

}

?>

<div class="titre">
    <h2>Formulaire de contact 8</h2>
</div>
<div id="caroussel">
    <div id="form">
        <form method="post">
            <fieldset>
                
                <div style="margin-top:20px;">
                    <label for="name">Nom :</label>
                    <input type="text" id="name" name="name" required pattern="[A-Za-z]+" placeholder="Votre nom ..." minlength="2" maxlength="20" autofocus >
                </div>
                <div>
                    <label for="mail">e-mail :</label>
                    <input type="email" id="mail" name="mail" required placeholder="Votre email ...">
                </div>
                <div>
                    <label for="msg">Message :</label>
                    <textarea id="msg" name="message" required placeholder="Votre message ..." minlength="2"></textarea>
                </div>
                <div style="margin: 20px;">
                    <input type="submit" id="submit" name="submit" value="Envoyer">
                </div>
            </fieldset>
        </form>
    </div>

</div>

<div>

</div>