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

        var menuOuvert = false

        $('a#bouton').on('click', function () {

            // Changement de l'icone avec les classes fontawesome - le changement de couleur se fait avec le CSS

            $('i#icone').fadeOut(0)
                .toggleClass('fas fa-times')
                .fadeIn(500)
                .toggleClass('fas fa-bars');

            // Affichage / disparition du menu en lui-même

            if (menuOuvert == false) {
                /* $('.menuGauche').css('display', 'flex'); */
                $('header,section').css('transform', 'translate(0)');
                /*  $('.titre').css('transform', 'translate(0)');
                 $('.menuGauche nav').css('transform', 'translate(0)'); */
                menuOuvert = true;
            } else if (menuOuvert == true) {
                /* $('.menuGauche').css('display', 'none'); */
                $('header,section').css('transform', 'translate(-220px)');
                /* $('.titre').css('transform', 'translate(220px)');
                $('.menuGauche nav').css('transform', 'translate(220px)'); */
                menuOuvert = false;
            };

        });

        // test à supprimer

        /* $('a#bouton').on('click', function () {
            $('.titre').css('transform', 'translate(220px)');
        });
 */


        // + Flexibilité / click à l'extérieur du header ferme le menuGauche

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
                /* $('.menuGauche li:first-child').append('<ul class="continents"><li><a id="asie" href="#">Asie</a>  <i class="fas fa-plus"></i></li><li><a id="europe" href="#">Europe</a>  <i class="fas fa-plus"></i></li><li><a id="amsud" href="#">AmSud</a>  <i class="fas fa-plus"></i></li></ul>'); */
                /* $('.menuGauche li:first-child').slideDown("normal"); */
                /* $('.menuGauche li:first-child').append('<ul class="continents"><li> </li><li> </li><li> </li></ul>'); */
                $('.continents').slideDown("normal");
                $('#voyages i.fas.fa-arrow-up').show();
                $('#voyages i.fas.fa-arrow-down').hide();   
                continentOuvert = true;
            } else if (continentOuvert == true) {
                /* $('.continents').remove(); */
                $('.continents').slideUp("normal");
                $('#voyages i.fas.fa-arrow-down').show();
                $('#voyages i.fas.fa-arrow-up').hide(); 
                /* $('.continents').remove(); */
                continentOuvert = false;
            };

        });

        // Faire de même avec les sous catégories pays

        var asieOuvert = false;
        $('.asie').hide();
        $('#asie i.fas.fa-arrow-up').hide();

        $(document).on('click', '#asie', function () {
            if (asieOuvert == false) {
                /* $('.continents li:first-child').append('<ul class="asie"><li><a id="inde" href="#">Inde</a></li><li><a id="japon" href="#">Japon</a></li><li><a id="coree" href="#">Corée du Sud</a></li><li><a id="mongolie" href="#">Mongolie</a></li><li><a id="chine" href="#">Chine</a></li><li><a id="vietnam" href="#">Vietnam</a></li><li><a id="laos" href="#">Laos</a></li><li><a id="thailande" href="#">Thailande</a></li></ul>'); */
                $('.asie').slideDown("normal");
                $('#asie i.fas.fa-arrow-up').show();
                $('#asie i.fas.fa-arrow-down').hide();   
                asieOuvert = true;
            } else if (asieOuvert == true) {
                $('.asie').slideUp("normal");
                $('#asie i.fas.fa-arrow-down').show();
                $('#asie i.fas.fa-arrow-up').hide(); 
                asieOuvert = false;
            };

        });

        var europeOuvert = false;
        $('.europe').hide();
        $('#europe i.fas.fa-arrow-up').hide();

        $(document).on('click', '#europe', function () {
            if (europeOuvert == false) {
                /* $('.continents li:nth-child(2)').append('<ul class="europe"><li><a id="france" href="#">France</a></li><li><a id="allemagne" href="#">Allemagne</a></li><li><a id="autriche" href="#">Autriche</a></li><li><a id="slovenie" href="#">Slovénie</a></li><li><a id="croatie" href="#">Croatie</a></li><li><a id="montenegro" href="#">Monténegro</a></li><li><a id="albanie" href="#">Albanie</a></li><li><a id="grece" href="#">Grèce</a></li><li><a id="Turquie" href="#">Turquie</a></li></ul>'); */
                $('.europe').slideDown("normal");
                $('#europe i.fas.fa-arrow-up').show();
                $('#europe i.fas.fa-arrow-down').hide();   
                europeOuvert = true;
            } else if (europeOuvert == true) {
                $('.europe').slideUp("normal");
                $('#europe i.fas.fa-arrow-down').show();
                $('#europe i.fas.fa-arrow-up').hide(); 
                europeOuvert = false;
            };

        });

        var amsudOuvert = false;
        $('.amsud').hide();
        $('#amsud i.fas.fa-arrow-up').hide();

        $(document).on('click', '#amsud', function () {
            if (amsudOuvert == false) {
                /* $('.continents li:nth-child(3)').append('<ul class="amsud"><li><a id="chili" href="#">Chili</a></li><li><a id="bolivie" href="#">Bolivie</a></li><li><a id="perou" href="#">Pérou</a></li><li><a id="argentine" href="#">Argentine</a></li></ul>'); */
                $('.amsud').slideDown("normal");
                $('#amsud i.fas.fa-arrow-up').show();
                $('#amsud i.fas.fa-arrow-down').hide(); 
                amsudOuvert = true;
            } else if (amsudOuvert == true) {
                $('.amsud').slideUp("normal");
                $('#amsud i.fas.fa-arrow-down').show();
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

        // test Evenements

        /* $('#voyages').on('click', function () {
            alert ('OK Continent');
        }); 
        */

        /*             $('#street').click(function () {
                        alert ('OK Street');
                    });  */

        /*             $(document).on('click','#asie',function () {
                        alert ('OK Asie');
                    });  */

        /* $(document).on('click', '#voyages', function () {
            alert ('OK');
        });
        */



    });

})(jQuery);





