(function ($) {

    $(function () {

        /* debut du script */

        function ajouterTitre() {
            if (window.matchMedia("(orientation: landscape)").matches) {
                var titrePage1 = $('.titre h2').text().slice($('.titre h2').text().lastIndexOf(' ') + 1);
                $('#portfolio p').append('<span> - ' + titrePage1 + '</span>');    
            }
        }

        // page chargée au lancement de la page index

        $(document).ready(function () {
            $.ajax({
                url: "pages/accueil.html", success: function (result) {
                    $('section').html(result);
                    ajouterTitre();                   
                }
            });
        });

        // ensuite, on charge les pages suite clic sur les liens correspondants (à peaufiner pour éviter répétition de code)

        $('a#accueil').on('click', function () {

            $.ajax({
                url: "pages/accueil.html", success: function (result) {
                    $('section').html(result);
                    ajouterTitre(); 
                }
            });

        });

        $('a#street').on('click', function () {


            $.ajax({
                url: "pages/street.html", success: function (result) {
                    $('section').html(result);
                    ajouterTitre(); 
                    
                }
            });

        });

        $('a#architecture').on('click', function () {

            $.ajax({
                url: "pages/architecture.html", success: function (result) {
                    $('section').html(result);
                    ajouterTitre(); 
                }
            });

        });

        $('a#portrait').on('click', function () {

            $.ajax({
                url: "pages/portrait.html", success: function (result) {
                    $('section').html(result);
                    ajouterTitre(); 
                }
            });

        });

        $('a#mariage').on('click', function () {

            $.ajax({
                url: "pages/mariage.html", success: function (result) {
                    $('section').html(result);
                    ajouterTitre(); 
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


