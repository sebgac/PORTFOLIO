(function ($) {

    $(function () {

        /* debut du script */


        // page chargée au lancement de la page index

        $(document).ready(function () {
            $.ajax({
                url: "pages/accueil.html", success: function (result) {
                    $('section').html(result);
                    
                }
            });
        });

        // ensuite, on charge les pages suite clic sur les liens correspondants (à peaufiner pour éviter répétition de code)

        $('a#accueil').on('click', function () {

            $.ajax({
                url: "pages/accueil.html", success: function (result) {
                    $('section').html(result);
                }
            });

        });

        $('a#street').on('click', function () {


            $.ajax({
                url: "pages/street.html", success: function (result) {
                    $('section').html(result);
                    
                }
            });

        });

        $('a#architecture').on('click', function () {

            $.ajax({
                url: "pages/architecture.html", success: function (result) {
                    $('section').html(result);
                }
            });

        });

        $('a#portrait').on('click', function () {

            $.ajax({
                url: "pages/portrait.html", success: function (result) {
                    $('section').html(result);
                }
            });

        });

        $('a#mariage').on('click', function () {

            $.ajax({
                url: "pages/mariage.html", success: function (result) {
                    $('section').html(result);
                }
            });

        });

        // pour les liens de #about, je fais un translate(0) pour que le menu ne coulisse pas au clic

        $('a#moi').on('click', function () {

            $.ajax({
                url: "pages/moi.html", success: function (result) {
                    $('section').html(result);
                    $('section .titre, section #caroussel').css('transform', 'translate(0)');
                }
            });

        });

        $('a#contact').on('click', function () {

            $.ajax({
                url: "pages/contact.html", success: function (result) {
                    $('section').html(result);
                    $('section .titre, section #caroussel').css('transform', 'translate(0)');
                }
            });

        });

        $('a#livre').on('click', function () {

            $.ajax({
                url: "pages/livre.php", success: function (result) {
                    $('section').html(result);
                    $('section .titre, section #caroussel').css('transform', 'translate(0)');
                }
            });

        });

                /* fin du script */

            });

        })(jQuery);


