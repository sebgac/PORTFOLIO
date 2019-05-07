(function ($) {

    $(function () {

        /* debut du script */

        // fonction qui permet de faire passer une partie du titre dans le liseret en small devices mode paysage

        function ajouterTitre() {
            
                // On coupe le selecteur .titre h2 à partir ce qui vient après le dernier espace recensé
                var titrePage = $('.titre h2').text().slice($('.titre h2').text().lastIndexOf(' ') + 1);

                if (window.matchMedia("(max-width: 850px) and (orientation: landscape)").matches) {

                    //on commence par retirer la span puis on ajoute la nouvelle span avec la var titrePage
                    $('#portfolio span').remove().promise().done(function() {
                        $('#portfolio p').append('<span> - ' + titrePage + '</span>');
                    });

                    //redimensionner la hauteur du caroussel pour ne pas dépasser l'overflow
                    $(document).on('fotorama:ready', function (e, fotorama) {
                        fotorama.resize({
                            maxheight: '85%'
                          });
                    });                  
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


