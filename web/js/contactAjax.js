(function ($) {

    $(function () {

        // début du script

        //definition des regex

        var regexName = /^[a-zA-Z0-9_-\s]{3,30}$/;
        var regexEmail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;

        //vérification des champs

        $("input#name").keyup(function () {

            var name = $("input#name").val();
            var verifName = regexName.test(name);
            if (verifName == false) {
                $(this).css('color', 'red');
            } else {
                $(this).css('color', 'white');
            };
        });

        $("input#mail").keyup(function () {

            var mail = $("input#mail").val();           
            var verifEmail = regexEmail.test(mail);

            if (verifEmail == false) {
                $(this).css('color', 'red');
            } else {
                $(this).css('color', 'white');
            };
        });

        $("#submit").click(function () {

            var name = $("input#name").val();
            var verifName = regexName.test(name);
            
            if (verifName == false) {
                $("input#name").css('color', 'red');
                $("input#name").focus();
                return false;
            } else {
                $("input#name").css('color', 'white');
            };

            var mail = $("input#mail").val();
            var verifEmail = regexEmail.test(mail);
            if (verifEmail == false) {
                $("input#mail").css('color', 'red');
                $("input#mail").focus();
                return false;
            } else if (verifEmail) {
                $("input#mail").css('color', 'white');
            };

            var msg = $("textarea#msg").val();
            var msg = $("textarea#msg").val();
            if (msg == "") {
                $("textarea#msg").attr('placeholder', 'Vous n\'avez pas laissé de message ! Ecrire ici');
                $("textarea#msg").focus();
                return false;
            } else {
                $("textarea#msg").attr('placeholder', 'Votre message ...');
            };

            //TODO: effectuer une transition douce pour le placeholder du textarea

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
