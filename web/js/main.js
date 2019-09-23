(function ($) {

    /* $(function () { */

    /* ----------- Définitions des fonctions du script ------------- */

    // Chargement initial de la page en small devices

    function initLoadSmall() {

        if (window.matchMedia("(max-width: 850px)").matches) {

            // de base, le menu est caché
            $('.menuGauche').hide();
            //on cache la bordure du liseret pour éviter de surcharger
            $('.liseret').css('border-bottom', '0');
        }
    }

    // Fonction qui enlève les miniatures du caroussel en fullscreen en small devices uniquement

    function fullscreenWithoutThumbnails() {
        if (window.matchMedia("(max-width: 850px)").matches) {
            $(document).on('fotorama:fullscreenenter fotorama:fullscreenexit', function (e, fotorama) {
                fotorama.setOptions({ nav: e.type === 'fotorama:fullscreenexit' && 'thumbs' });
            });
        }

    }

    // Fonction qui met en majuscule la première lettre d'une chaine de caractère

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // Fonction qui gère le changement d'icone dans le liseret - Changement de l'icone avec les classes fontawesome

    function iconeMenu() {
        $('i#icone').fadeOut(0)
            .toggleClass('fas fa-times')
            .fadeIn(500)
            .toggleClass('fas fa-bars');
    }

    // Fonction pour modif de la mise en forme du titre de la galerie

    function titleChange() {

        if (window.matchMedia("(max-width: 850px)").matches) {

            var titrePageBrut = $('.titre h2').text().slice($('.titre h2').text().lastIndexOf(' ') + 1);
            var titrePage = capitalizeFirstLetter(titrePageBrut);
            // on ajoute le texte dans le liseret seulement si l'orientation est la bonne
            if (window.matchMedia("(orientation: portrait)").matches) {
                var titreSection = $('section .titre').text().length;
                if (titreSection == 16) {
                    $('#portfolio p').append('<span> - Livre d\'or </span>');
                } else if (titreSection == 13) {
                    $('#portfolio p').append('<span> - Sur moi </span>');
                } else {
                    $('#portfolio p').append('<span> - ' + titrePage + '</span>');
                }
            } else {
                $('#portfolio span').remove();
            }
        }

    }

    // Fonction pour adapter la position absolute de la section à la taille du liseret - en mode Small Device;

    function liseretHeight() {
        if (window.matchMedia("(max-width: 850px)").matches) {
            var hauteurLiseret = $('.liseret').height();
            $('section').css('top', hauteurLiseret);
        }
    }

    // Fonctions d'ouverture et de fermeture du menu pour les small et large devices

    function menuOpen() {

        if (window.matchMedia("(min-width: 851px)").matches) {
            $('nav, #titre1, .menuGauche, .liseret, section .titre, section #caroussel').css('transform', 'translate(0)');

        } else {
            $('.menuGauche').slideDown(500);
            $('.liseret').css('border-bottom', '1px solid #3a3a3a');

        }
        menuOuvert = true;
    }

    function menuClose() {
        if (window.matchMedia("(min-width: 851px)").matches) {
            $('nav, #titre1, .menuGauche, .liseret, section .titre, section #caroussel').css('transform', 'translate(-260px)');

        } else {
            $('.menuGauche').slideUp(500).promise().done(function () {
                $('.liseret').css('border-bottom', '0');
            });

        }
        menuOuvert = false;
    
    }
    
    // Fonction qui gère le comportement du menu lors d'un resize (responsive)

    function sizeChange() {

        $(window).resize(function () {
        
            if (window.matchMedia("(max-width: 850px)").matches) {
                $('nav, #titre1, .menuGauche, .liseret, section .titre, section #caroussel').css('transform', 'none');
                if (menuOuvert == false) {
                    $('.menuGauche').hide();
                    $('.liseret').css('border-bottom', '0');
                }
            }
    
            else {
                if (menuOuvert == false) {
                    $('.menuGauche').show();
                    $('nav, #titre1, .menuGauche, .liseret, section .titre, section #caroussel').css('transform', 'translate(-260px)');
    
                }
            }
    
        });
        
    }

    // Fonction qui gère la fermeture du menu en cliquant sur certains liens

    function closeFromLinks() {
        if (window.matchMedia("(min-width: 851px)").matches) {
            $('a#accueil, a#street, a#portrait, a#architecture, a#mariage, a#inde, .europe li a, .asie li a, .amsud li a').on('click', function () {
                if (menuOuvert == true) {
                    iconeMenu();
                    menuClose();
                };
            });
        } else {
            $('a#accueil, .asie a, .europe a, .amsud a,a#street, a#portrait, a#architecture, a#mariage, a#moi, a#contact, a#livre, a#inde, .asie li a, .amsud li a, .europe li a').on('click', function () {
                if (menuOuvert == true) {
                    iconeMenu();
                    menuClose();
                };
            });
        }
    }

    // Fonctions qui gèrent la hauteur de la fenetre pour affichage dans le livre d'or pour small et large devices

    function sectionHeightGold() {

        if (window.matchMedia("(min-width: 851px)").matches) {
            var hauteurFenetre = $(window).height();
            var hauteurTitre = $('section .titre').height();
            var hauteur = hauteurFenetre - hauteurTitre - 50;

            $('section form').css('height', '' + hauteur + 'px');

            $(window).resize(function () {

                var hauteurFenetre = $(window).height();
                var hauteurTitre = $('section .titre').height();
                var hauteur = hauteurFenetre - hauteurTitre - 50;

                $('section #form_contact').css('height', '' + hauteur + 'px');

            });
        }

        else {
            var hauteurFenetre = $(window).height();
            var hauteurTitre = $('section .titre').height();
            var hauteur = hauteurFenetre - hauteurTitre - 100;

            $('#myFrame').css('height', '' + hauteur + 'px');

            $(window).resize(function () {

                var hauteurFenetre = $(window).height();
                var hauteurTitre = $('section .titre').height();
                var hauteur = hauteurFenetre - hauteurTitre - 100;

                $('#myFrame').css('height', '' + hauteur + 'px');
            });
        }

    }

    // Fonctions définissant le comportement des flèches aidant à la navigation des menus

    function arrowUp(id) {
        $(id + ' i.fas.fa-arrow-up').show(500);
        $(id + ' i.fas.fa-arrow-down').hide();
        console.log('arrowUp = ' + id);
    }

    function arrowDown(id) {
        $(id + ' i.fas.fa-arrow-down').show(500);
        $(id + ' i.fas.fa-arrow-up').hide();
        console.log('arrowDown = ' + id);
    }

    function continentOpen() {
        $('.continents').slideDown(500);
        continentsOuvert = true;
    }

    function continentClose() {
        $('.continents').slideUp(500);
        continentsOuvert = false;
    }

    function asieOpen() {
        $('.asie').slideDown(500);
        asieOuvert = true;
    }

    function asieClose() {
        $('.asie').slideUp(500);
        asieOuvert = false;
    }

    function europeOpen() {
        $('.europe').slideDown(500);
        europeOuvert = true;
    }

    function europeClose() {
        $('.europe').slideUp(500);
        europeOuvert = false;
    }
    function amsudOpen() {
        $('.amsud').slideDown(500);
        amsudOuvert = true;
    }

    function amsudClose() {
        $('.amsud').slideUp(500);
        amsudOuvert = false;
    }

    // Fonction qui gère l'affichage de l'icone par un hover sur lien (pas utilisée pour le moment)

    function iconeHover() {

        // Rendre l'icone visible lorsqu'on survole la catégorie Voyages

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
    }


    /* --------- Début du Script --------------- */


    // on fixe une valeur repère qui indique que le menu est fermé

    var menuOuvert = false
    

    // Chargement de la page en small devices

    initLoadSmall();

    // Chargement de la page en small devices

    /* initLoadLarge(); */

    // Détecter le changement d'orientation pour mettre le titre dans le liseret

    $(window).on('orientationchange', function () {
        titleChange();
    });

    // Corrections des comportements "anormaux" lors du resize de l'écran (pour rendre responsive en live)

    



    // adapter la position absolute de la section à la taille du liseret;

    liseretHeight();


    $('.liseret').on('click', function () {

        // Changement de l'icone avec les classes fontawesome - le changement de couleur se fait avec le CSS

        iconeMenu();

        // Affichage / disparition du menu en lui-même

        if (menuOuvert == false) {
            menuOpen();
            
        } else if (menuOuvert == true) {
            menuClose();
            
        };

    });

    // Enlève les miniatures lorsqu'on est en full screen sur mobile

    fullscreenWithoutThumbnails();

    // Fermer le menu en cliquant sur certains liens

    closeFromLinks();


    // Dans le menu, ajouter des catégories continents lorsqu'on clique sur Voyage + changer l'icone fleche haut/bas

    // TODO: Code à refactoriser


    // définition comportement de base
    var continentsOuvert = false;
    $('.continents').hide();
    $('#voyages i.fas.fa-arrow-up').hide();

    $('#voyages').on('click', function () {
        if (continentsOuvert == false) {
            continentOpen();
            arrowUp('#' + $(this).attr('id'));
        } else if (continentsOuvert == true) {
            continentClose();
            arrowDown('#' + $(this).attr('id'));
        }

    });


    // Faire de même avec les sous catégories pays

    var asieOuvert = false;
    $('.asie').hide();
    $('#asie i.fas.fa-arrow-up').hide();

    //$(document).on permet d'écouter les éléments rajoutés par jQuery

    $(document).on('click', '#asie', function () {
        if (asieOuvert == false) {
            asieOpen();
            arrowUp('#' + $(this).attr('id'));
        } else if (asieOuvert == true) {
            asieClose();
            arrowDown('#' + $(this).attr('id'));
        };

    });

    var europeOuvert = false;
    $('.europe').hide();
    $('#europe i.fas.fa-arrow-up').hide();

    $(document).on('click', '#europe', function () {
        if (europeOuvert == false) {
            europeOpen();
            arrowUp('#' + $(this).attr('id'));

        } else if (europeOuvert == true) {
            europeClose();
            arrowDown('#' + $(this).attr('id'));
        };

    });

    var amsudOuvert = false;
    $('.amsud').hide();
    $('#amsud i.fas.fa-arrow-up').hide();

    $(document).on('click', '#amsud', function () {
        if (amsudOuvert == false) {
            amsudOpen();
            arrowUp('#' + $(this).attr('id'));

        } else if (amsudOuvert == true) {
            amsudClose();
            arrowDown('#' + $(this).attr('id'));
        };

    });

    // fermer voyage si on clique sur un autre lien (utile pour affichage smartphone)

    $('#moi,#livre,#contact,#street,#architecture,#portrait,#mariage').on('click', function () {
        if (continentsOuvert == true) {
            continentClose();
            arrowDown('#' + $(this).attr('id'));
        };

    });

    // Lorsqu'on clique sur une autre catégorie que celle ouverte, on ferme la catégorie en cours
    // et on change le sens de la flèche fas

    // Pour le continent Asie

    $(document).on('click', '#amsud,#europe', function () {
        if (asieOuvert == true) {
            asieClose();
            arrowDown('#' + $(this).attr('id'));
        };

    });

    // Pour le continent Europe

    $(document).on('click', '#asie,#amsud', function () {
        if (europeOuvert == true) {
            europeClose();
            arrowDown('#' + $(this).attr('id'));
        };

    });

    // Pour le continent AmSud

    $(document).on('click', '#asie,#europe', function () {
        if (amsudOuvert == true) {
            amsudClose();
            arrowDown('#' + $(this).attr('id'));
        };

    });

    // Gestion du hover de l'icone

    /* iconeHover(); */

    // Gérer la hauteur de la fenetre pour affichage du livre d'or

    sectionHeightGold();


    /* --------- Fin du script ------------ */


})(jQuery); 