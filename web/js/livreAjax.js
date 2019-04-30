(function ($) {

    $(function () {

/*         alert ('test OK'); */

        // début du script


        $("#submit").click(function () {

            //definition des variables et vérification des champs du formulaire

            var name = $("input#name").val();
            if (name == "") {
                $("label#name_label").css('color', 'red');
                $("input#name").focus();
                return false;
            } else {
                $("label#name_label").css('color', 'white');
            };
            var mail = $("input#mail").val();
            if (mail == "") {
                $("label#mail_label").css('color', 'red');
                $("input#mail").focus();
                return false;
            } else {
                $("label#mail_label").css('color', 'white');
            };
            var website = $("input#website").val();

            // TO DO : verification pour website

            var msg = $("textarea#msg").val();
            if (msg == "") {
                $("label#msg_label").css('color', 'red');
                $("input#msg").focus();
                return false;
            } else {
                $("label#mail_label").css('color', 'white');
            };

            // TO DO : les patterns pour affiner la vérification des données 

            // Méthode ajax 

            $.ajax(

            $.post("pages/page_livre.php", {name: name, mail: mail, website: website, msg: msg}, function(data) {

            // afficher directement le message laissé sur le livre d'or

            // TO DO : mettre en forme le livre d'or et faire apparaitre chaque nouveau message par fadeIn

            $('#feedback').prepend("<hr><br>" + name + " " + mail + " " + website +  " " + msg + "<br><br>");
                
            $('#name').attr('value','');
            $('#mail').attr('value','');
            $('#website').attr('value','');
            $('#msg').attr('value','');

            }));

            // permet de rester sur la page actuelle 
            
            return false;

        });

        // fin du script

    });

})(jQuery);
