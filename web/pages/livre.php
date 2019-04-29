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
        padding: 1em;
        transition-duration: 500ms;
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

    .error {
        font-size: 0.75rem;
    }

    #checkmark {
        width: 20%;
    }

    /* #feedback {
        display:none;
    } */

</style>

<script type="text/javascript" src="js/livreAjax.js"></script>

<div class="titre">
    <h2>Livre d'or</h2>
</div>
<div id="caroussel">
    <div id="form">
        <!-- <form method="post"> -->
        <!-- <form action="pages/page_livre.php" method="post"> -->

        <form method="post">
            <fieldset>                
                <div style="margin-top:20px;">
                    <label id="name_label" for="name">Nom :</label>
                    <input type="text" id="name" name="name" value="" placeholder="Votre nom ..."  autofocus >
                </div>
                <div>
                    <label id="mail_label" for="mail">e-mail :</label>
                    <input type="email" id="mail" name="mail" value="" placeholder="Votre email ...">                    
                </div>
                <div>
                    <label id="website_label" for="website">e-mail :</label>
                    <input type="text" id="website" name="website" value="" placeholder="Votre site web">                    
                </div>
                <div>
                    <label id="msg_label" for="msg">Message :</label>
                    <textarea id="msg" name="msg" value="" placeholder="Votre message ..." ></textarea>                    
                </div>
                <div style="margin: 20px;">
                    <input type="submit" id="submit" name="submit" value="Envoyer">
                </div>
            </fieldset>
        </form>
    </div>
    <div id="feedback">


    </div>

</div>

<div>

</div>