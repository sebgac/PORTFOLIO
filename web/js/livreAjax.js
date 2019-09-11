(function ($) {

    $(function () {

        // definition des Regex

        /* var regexName = /^[a-zA-Z0-9_\s-]{3,30}$/; */
        /* var regexWebsite = new RegExp("^((http|https):\/\/)?(www[.])?([a-zA-Z0-9]|-)+([.][a-zA-Z0-9(-|\/|=|?)?]+)+$"); */

        var regexName = /^[a-zA-Z0-9áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._\s-]{3,30}$/;
        var regexEmail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
        var regexWebsite = new RegExp("^((http|https):\/\/)?(www[.])?([a-zA-Z0-9]|-)+([.][a-zA-Z0-9(-|\/|=|?)?]+)+$");

        // début du script

        $("input#name").keyup(function () {

            var name = $("input#name").val();
            var lengthName = name.length;
            var verifName = regexName.test(name);
            if (verifName == false) {
                $(this).css('color', 'red');
            } else {
                $(this).css('color', 'white');
            };

            // faire en sorte que la condition if ne soit pas prise en compte lorsqu'on tape les 3 premiers caractères
            
            if (lengthName < 3) {
                $(this).css('color', 'white');
            };
            
        });

        $("input#mail").blur(function () {

            var mail = $("input#mail").val();           
            var verifEmail = regexEmail.test(mail);

            if (verifEmail == false) {
                $(this).css('color', 'red');
            } else {
                $(this).css('color', 'white');
            };
        });

        $("input#website").blur(function () {

            var website = $("input#website").val();
            var verifWebsite = regexWebsite.test(website);

            if (verifWebsite == false) {
                $(this).css('color', 'red');
            } else {
                $(this).css('color', 'white');
            };
        });

        $("#submit").click(function () {

            //definition des variables et vérification des champs du formulaire

            //FIXME: pourquoi le champ d'un formulaire se met en background blanc lorsqu'il est prérempli

            var name = $("input#name").val();           
            var verifName = regexName.test(name);
            if ((name == "") || (verifName == false)) {
                $("input#name").css('color', 'red');
                $("input#name").focus();
                return false;
            } else {
                $("input#name").css('color', '#343434');
            };

            var mail = $("input#mail").val();           
            var verifEmail = regexEmail.test(mail);
            if (mail == "") {
                verifEmail = true;
            }
            if (verifEmail == false) {
                $("input#mail").css('color', 'red');
                $("input#mail").focus();
                return false;
            } else {
                $("input#mail").css('color', '#343434');
            };

            var website = $("input#website").val();
            var verifWebsite = regexWebsite.test(website);
            if (website == "") {
                verifWebsite = true;
            }
            if (verifWebsite == false) {
                $("input#website").css('color', 'red');
                $("input#website").focus();
                return false;
            } else {
                $("input#website").css('color', '#343434');
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

            // Méthode ajax 

            $.ajax(

            $.post("pages/page_livre.php", {name: name, mail: mail, website: website, msg: msg}, function(data) {

            // afficher directement le message laissé sur le livre d'or

            $('#myFrame').attr("src",'pages/livre_iframe.php?cache='+Date.now());
                
            // on reset les inputs pour éviter le spam

            $('#name').val('');
            $('#mail').val('');
            $('#website').val('');
            $('#msg').val('');

            // On fait disparaitre le formulaire en small devices une fois le message laissé

            if (window.matchMedia("(max-width: 850px)").matches) {
                $('section form').slideUp();
            }

            }));

            // permet de rester sur la page actuelle 
            
            return false;

        });

        // fin du script

    });

})(jQuery);
