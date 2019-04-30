(function ($) {

    $(function () {

        // début du script


        $("#submit").click(function () {

            //vérification des champs

            var name = $("input#name").val();
            if (name == "") {
                $("label#name_label").css('color', 'red');
                $("input#name").focus();
                return false;
            } else {
                $("label#name_label").css('color', 'white');
            }
            var mail = $("input#mail").val();
            if (mail == "") {
                $("label#mail_label").css('color', 'red');
                $("input#mail").focus();
                return false;
            } else {
                $("label#mail_label").css('color', 'white');
            }
            var msg = $("textarea#msg").val();
            if (msg == "") {
                $("label#msg_label").css('color', 'red');
                $("input#msg").focus();
                return false;
            } else {
                $("label#mail_label").css('color', 'white');
            }

            // TO DO : les patterns pour affiner la vérification des données 

            // Méthode ajax POST pour envoyer les données vers page_contact.php sans recharger la page

            // 1ere façon d'écrire

            $.ajax({
                type: "POST",
                url: "pages/page_contact.php",
                data: 
                {
                    name: name,
                    mail: mail,
                    msg: msg
                },
                success: function () {
                    $('#form').html("<div id='message'></div>");
                    $('#message').html("<h2>Merci pour votre message !</h2><br><p>Je reviens vers vous prochainement</p>")
                        .hide()
                        .fadeIn(1500);
                }
            });

            //2nde façon de l'écrire

            /* $.post( "pages/page_contact.php", function( dataString ) {
                
                $('#form').html("<div id='message'></div>");
                    $('#message').html("<h2>Merci pour votre message !</h2><br><p>Je reviens vers vous prochainement</p>")
                        .hide()
                        .fadeIn(1500);
            }); */

            // permet de rester sur la page actuelle 
            
            return false;

        });

        // fin du script

    });

})(jQuery);
