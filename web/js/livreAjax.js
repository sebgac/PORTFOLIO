(function ($) {

    $(function () {

/*         alert ('test OK'); */

        // début du script


        $("#submit").click(function () {

            //definition des variables et vérification des champs du formulaire

            var name = $("input#name").val();
            /* if (name == "") {
                $("label#name_label").css('color', 'red');
                $("input#name").focus();
                return false;
            } else {
                $("label#name_label").css('color', 'white');
            } */
            var email = $("input#mail").val();
            /* if (email == "") {
                $("label#mail_label").css('color', 'red');
                $("input#mail").focus();
                return false;
            } else {
                $("label#mail_label").css('color', 'white');
            } */
            var email = $("input#website").val();
            var msg = $("textarea#msg").val();
            /* if (msg == "") {
                $("label#msg_label").css('color', 'red');
                $("input#msg").focus();
                return false;
            } else {
                $("label#mail_label").css('color', 'white');
            } */

            // TO DO : les patterns pour affiner la vérification des données 

            // Méthode ajax 

            $.ajax(

            $.post("pages/page_livre.php", {name: name, msg:msg}, function(data) {

              $('#feedback').append(data);
                
              /*   $('#form').html("<div id='message'></div>");
                    $('#message').html("<h2>Merci pour votre message !</h2><br><p>Je reviens vers vous prochainement</p>")
                        .hide()
                        .fadeIn(1500); */
            }));

            // permet de rester sur la page actuelle 
            
            return false;

        });

        // fin du script

    });

})(jQuery);
