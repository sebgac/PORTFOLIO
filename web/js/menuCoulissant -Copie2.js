(function ($) {

    $(function () {

        // TO DO : (UX) fermer le menu lorsqu'il est ouvert et qu'on clique sur section (if menu ouvert > section translate)
        // TO DO : afficher les photos uniquement lorsque la première photo est chargée

        // Réalisation d'un menu "coulissant" qui s'ouvre et se ferme via un bouton menu

        // on fixe une valeur repère qui indique que le menu est fermé

        var menuOuvert = false

        // de base, le menu est caché
        /* $('.menuGauche').hide(); */
        /* $('section .titre').hide(); */


        $('.liseret').on('click', function () {

            // Changement de l'icone avec les classes fontawesome - le changement de couleur se fait avec le CSS

            $('i#icone').fadeOut(0)
                .toggleClass('fas fa-times')
                .fadeIn(500)
                .toggleClass('fas fa-bars');

            // Affichage / disparition du menu en lui-même

            if (menuOuvert == false) {
                /* $('.menuGauche').css('display', 'flex'); */
                /* $('header,section').css('transform', 'translate(0)'); */
                /* $('.menuGauche').show(500); */
                /* $('.menuGauche').toggle('slide'); */
                /* $('nav, #titre1, .menuGauche, .liseret, section .titre, section #caroussel').css('transform', 'translate(0)'); */
                $('nav, #titre1, .menuGauche, .liseret, section .titre, section #caroussel').css('transform', 'translate(0)');
                /* $('section .titre').slideDown(); */
                menuOuvert = true;
            } else if (menuOuvert == true) {
                /* $('.menuGauche').css('display', 'none'); */
                /* $('header,section').css('transform', 'translate(-220px)'); */
                /* $('.menuGauche').hide(500); */
                /* $('.menuGauche').toggle('slide'); */
                /* $('nav, #titre1, .menuGauche, .liseret, section .titre, section #caroussel').css('transform', 'translate(-240px)'); */
                $('nav, #titre1, .menuGauche, .liseret, section .titre, section #caroussel').css('transform', 'translate(-240px)');
                /* $('section .titre').slideUp(); */
                menuOuvert = false;
            };

        });

        // Fermeture du menu lorsqu'on clique sur certains liens

        $('a#accueil, a#street, a#portrait, a#architecture, a#mariage').on('click', function () {

            if (menuOuvert == true) {
                $('i#icone').fadeOut(0)
                    .toggleClass('fas fa-times')
                    .fadeIn(500)
                    .toggleClass('fas fa-bars');
                $('nav, #titre1, .menuGauche, .liseret, section .titre, section #caroussel').css('transform', 'translate(-240px)');
                menuOuvert = false;
            };
        });

        // Dans le menu, ajouter des catégories continents lorsqu'on clique sur Voyage
        // + changer l'icone fleche haut/bas

        var continentOuvert = false;
        $('.continents').hide();
        $('#voyages i.fas.fa-arrow-up').hide();

        $('#voyages').on('click', function () {
            if (continentOuvert == false) {
                $('.continents').slideDown(500);
                $('#voyages i.fas.fa-arrow-up').show(500);
                $('#voyages i.fas.fa-arrow-down').hide();
                continentOuvert = true;
            } else if (continentOuvert == true) {
                $('.continents').slideUp(500);
                $('#voyages i.fas.fa-arrow-down').show(500);
                $('#voyages i.fas.fa-arrow-up').hide();
                continentOuvert = false;
            };

        });

        // fermer voyage si on clique sur un autre lien (utile pour affichage smartphone)

        // TO DO : règle pour smartphone only

        $('#moi,#livre,#contact,#street,#architecture,#portrait,#mariage').on('click', function () {
            if (continentOuvert == true) {
                $('.continents').slideUp(500);
                $('#voyages i.fas.fa-arrow-down').show(500);
                $('#voyages i.fas.fa-arrow-up').hide();
                continentOuvert = false;
            };

        });

        // Faire de même avec les sous catégories pays

        var asieOuvert = false;
        $('.asie').hide();
        $('#asie i.fas.fa-arrow-up').hide();

        $(document).on('click', '#asie', function () {
            if (asieOuvert == false) {
                $('.asie').slideDown(500);
                $('#asie i.fas.fa-arrow-up').show(500);
                $('#asie i.fas.fa-arrow-down').hide();
                asieOuvert = true;
            } else if (asieOuvert == true) {
                $('.asie').slideUp("normal");
                $('#asie i.fas.fa-arrow-down').show(500);
                $('#asie i.fas.fa-arrow-up').hide();
                asieOuvert = false;
            };

        });

        var europeOuvert = false;
        $('.europe').hide();
        $('#europe i.fas.fa-arrow-up').hide();

        $(document).on('click', '#europe', function () {
            if (europeOuvert == false) {
                $('.europe').slideDown(500);
                $('#europe i.fas.fa-arrow-up').show(500);
                $('#europe i.fas.fa-arrow-down').hide();
                europeOuvert = true;
            } else if (europeOuvert == true) {
                $('.europe').slideUp("normal");
                $('#europe i.fas.fa-arrow-down').show(500);
                $('#europe i.fas.fa-arrow-up').hide();
                europeOuvert = false;
            };

        });

        var amsudOuvert = false;
        $('.amsud').hide();
        $('#amsud i.fas.fa-arrow-up').hide();

        $(document).on('click', '#amsud', function () {
            if (amsudOuvert == false) {
                $('.amsud').slideDown(500);
                $('#amsud i.fas.fa-arrow-up').show(500);
                $('#amsud i.fas.fa-arrow-down').hide();
                amsudOuvert = true;
            } else if (amsudOuvert == true) {
                $('.amsud').slideUp(500);
                $('#amsud i.fas.fa-arrow-down').show(500);
                $('#amsud i.fas.fa-arrow-up').hide();
                amsudOuvert = false;
            };

        });

        // Lorsqu'on clique sur une autre catégorie que celle ouverte, on ferme la catégorie en cours
        // et on change le sens de la flèche fas

        // Pour le continent Asie

        $(document).on('click', '#amsud,#europe', function () {
            if (asieOuvert == true) {
                $('.asie').slideUp("normal");
                $('#asie i.fas.fa-arrow-down').show();
                $('#asie i.fas.fa-arrow-up').hide();
                asieOuvert = false;
            };

        });

        // Pour le continent Europe

        $(document).on('click', '#asie,#amsud', function () {
            if (europeOuvert == true) {
                $('.europe').slideUp("normal");
                $('#europe i.fas.fa-arrow-down').show();
                $('#europe i.fas.fa-arrow-up').hide();
                europeOuvert = false;
            };

        });

        // Pour le continent AmSud

        $(document).on('click', '#asie,#europe', function () {
            if (amsudOuvert == true) {
                $('.amsud').slideUp("normal");
                $('#amsud i.fas.fa-arrow-down').show();
                $('#amsud i.fas.fa-arrow-up').hide();
                amsudOuvert = false;
            };

        });

        // Rendre le bouton + visible lorsqu'on survole la catégorie Voyages

        $('#voyages').hover(function () {
            $('#voyages i').animate({ opacity: 1 }, 500);
        });

        // Le rendre à nouveau invisible lorsqu'on ne survole plus Voyages

        $('#voyages').mouseout(function () {
            $('#voyages i').animate({ opacity: 0 }, 500);
        });

        // Faire de même avec les catégories continents

        $(document).on('mouseenter', '#asie', function () {
            $('.continents li:first-child i').animate({ opacity: 1 }, 500);
        });

        $(document).on('mouseleave', '#asie', function () {
            $('.continents li:first-child i').animate({ opacity: 0 }, 500);
        });

        $(document).on('mouseenter', '#europe', function () {
            $('.continents li:nth-child(2) i').animate({ opacity: 1 }, 500);
        });

        $(document).on('mouseleave', '#europe', function () {
            $('.continents li:nth-child(2) i').animate({ opacity: 0 }, 500);
        });

        $(document).on('mouseenter', '#amsud', function () {
            $('.continents li:nth-child(3) i').animate({ opacity: 1 }, 500);
        });

        $(document).on('mouseleave', '#amsud', function () {
            $('.continents li:nth-child(3) i').animate({ opacity: 0 }, 500);
        });


    });

})(jQuery);





