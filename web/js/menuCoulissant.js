(function ($) {

    $(function () {

        // Essai fix fotorama fullscreen pb

       /*  $('.fotorama').on('fotorama:fullscreenenter', function () {
            $(this).data('fotorama').setOptions({ fit: 'contain' });
        });

        $('.fotorama').on('fotorama:fullscreenexit', function () {
            $(this).data('fotorama').setOptions({ fit: 'contain' });
        }); */


        // Réalisation d'un menu "coulissant" qui s'ouvre et se ferme via un bouton menu

        // on fixe une valeur repère qui indique que le menu est fermé
        var menuOuvert = false
        // de base, le menu est caché
        $('.menuGauche').hide();

        $('a#bouton').on('click', function () {

            // Changement de l'icone avec les classes fontawesome - le changement de couleur se fait avec le CSS

            $('i#icone').fadeOut(0)
                .toggleClass('fas fa-times')
                .fadeIn(500)
                .toggleClass('fas fa-bars');

            // Affichage / disparition du menu en lui-même
            // Note : j'ai trouvé une solution avec les fonctions show et hide, mais ce n'est pas ce que je veux
            // But : faire bougé les div de manière à ce que le texte vienne du côté gauche de l'écran (essai avec transform qui ne fonctionne pas)

            if (menuOuvert == false) {
                /* $('.menuGauche').css('display', 'flex'); */
                /* $('.menuGauche').show(500); */
                $('.menuGauche').toggle('slide');
                /* $('header,section').css('transform', 'translate(0)'); */
                /*  $('.titre').css('transform', 'translate(0)');
                 $('.menuGauche nav').css('transform', 'translate(0)'); */
                menuOuvert = true;
            } else if (menuOuvert == true) {
                /* $('.menuGauche').css('display', 'none'); */
                /* $('.menuGauche').hide(500); */
                $('.menuGauche').toggle('slide');
                /* $('header,section').css('transform', 'translate(-220px)'); */
                /* $('.titre').css('transform', 'translate(220px)');
                $('.menuGauche nav').css('transform', 'translate(220px)'); */
                menuOuvert = false;
            };

        });

        // A essayer, slide Toogle, pour faire glisser les éléments latéralement, à essayer sur les div internes pourquoi pas

/*        
https://www.learningjquery.com/2009/02/slide-elements-in-different-directions

Horizontal Slides
Animate Width
We can also slide elements to the left and right. The simplest way is to animate the element's width property.

[js]$(document).ready(function() { $('#slidewidth button').click(function() { $(this).next().animate({width: 'toggle'}); }); });[/js]
In this case it's not necessary for the sliding element to be positioned. */

        // + Flexibilité / click à l'extérieur du header ferme le menuGauche 
        // A adapter quand pb de menu résolu

        /*         $('section').on('click', function () {
                    if (menuOuvert == true) {
                        $('.menuGauche').css('display', 'none');
                        menuOuvert = false;
                    };      
        
                }); */

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





