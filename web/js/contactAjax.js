(function ($) {

    $(function () {

        // début du script

        $("#submit").click(function () {

            // définition des variables

            var name = $("input#name").val();
            var email = $("input#mail").val();
            var msg = $("input#msg").val();
            var dataString = 'name=' + name + '&email=' + email + '&msg=' + msg;

        /* alert (dataString); */

        // méthode ajax POST pour envoyer les données vers page_contact.php

        $.ajax({
            type: "POST",
            url: "pages/page_contact.php",
            data: dataString,
            success: function() {
              $('#form').html("<div id='message'></div>");
              $('#message').html("<h2>Merci pour votre message !</h2><br><p>Je reviens vers vous prochainement</p>")
              .hide()
              .fadeIn(1500);
            }
          });
          // permet de ne pas recharger la page
          return false;

        });


        // fin du script

    });

})(jQuery);
