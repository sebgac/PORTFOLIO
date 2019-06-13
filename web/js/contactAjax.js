(function ($) {

    $(function () {

        // début du script


        $("#submit").click(function () {

            //vérification des champs

            var name = $("input#name").val();
            var regexName = /^[a-zA-Z0-9_-\s]{3,30}$/;
            var verifName = regexName.test(name);
            if ((name == "") || (verifName == false)) {
                $("input#name").css('color', 'red');
                $("input#name").focus();
                return false;
            } else {
                $("input#name").css('color', 'white');
            };
            var mail = $("input#mail").val();
            var regexEmail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
            var verifEmail = regexEmail.test(mail);
            if ((mail == "") || (verifEmail == false)) {
                $("input#mail").css('color', 'red');
                $("input#mail").focus();
                return false;
            } else if (verifEmail) {
                $("input#mail").css('color', 'white');
            };
            var website = $("input#website").val();

            var msg = $("textarea#msg").val();
            var msg = $("textarea#msg").val();
            if (msg == "") {
                $("textarea#msg").attr('placeholder', 'Vous n\'avez pas laissé de message ! Ecrire ici');
                $("textarea#msg").focus();
                return false;
            } else {
                $("textarea#msg").attr('placeholder', 'Votre message ...');
            };


            /* var name = $("input#name").val();
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
            } */

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
