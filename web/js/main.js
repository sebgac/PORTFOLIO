(function ($) {

    $(function () {

        // TODO: s'inspirer de https://www.grafikart.fr/tutoriels/jquery-on-events-518 pour ajouter un écouteur unique sur tous les liens. Puis s'inspirer de $('.titre h2').text().slice($('.titre h2').text().lastIndexOf(' ') + 1) pour récupérer le nom de la page à charger sans répétition de code

        // TODO: laisser la fleche à coté de voyage meme lorsqu'on clique sur un continent // fait pour voyage, à faire pour les autres

        // TODO: recharger le design au changement d'orientation ou de resize (possiblement à faire en ajax)
        // idée : recharger dans l'écouteur orientation change le script menuCoulissant (peut etre mettre en ajax, ou à l'extérieur de ce fichier)

        // TODO: lazy loading pour les images, voir srcset si possible

        // TODO: épurer le code en faisant des fonctions - eviter répétitions (en cours)

        // TODO: charger dynamiquement les photos (peu importe leur nombre dans le dossier physique)

        // TODO: méthode sécurisé pour mot de passe page mariage

        // TODO: rédiger un script pour charger automatiquement les valeurs par défauts du plugin fotorama

        // TODO: réaliser une page de login en php pour sécuriser mot de passe mariage



        // FIXME: fixer le bug orientationchange pour les pages de la section about

        // FIXME: réaligner portfolio seb dans mozilla - à essayer avec moz- dans CSS

        // FIXME: pourquoi en small devices l'écran n'est pas fixe (il y a un tout petit scroll)

        // FIXME: portfolio ne reste pas vraiment en place lors du scroll bas

        // FIXME: bug de design small devices, lors changement orientation le caroussel ne sadapte pas compltement au height (de portrait vers paysage)



        /* ----------- Définitions des fonctions du script ------------- */

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

        // Fonction pour adapter la position absolute de la section à la taille du liseret;

        function liseretHeight() {
            var hauteurLiseret = $('.liseret').height();
            $('section').css('top', hauteurLiseret);
        }

        // Fonction qui enlève les miniatures du caroussel en fullscreen

        function fullscreenWithoutThumbnails() {
            $(document).on('fotorama:fullscreenenter fotorama:fullscreenexit', function (e, fotorama) {
                fotorama.setOptions({ nav: e.type === 'fotorama:fullscreenexit' && 'thumbs' });
            });
        }

        // Fonctions d'ouverture et de fermeture du menu pour les small et large devices

        function menuOpenSmall() {
            $('.menuGauche').slideDown(500);
            $('.liseret').css('border-bottom', '1px solid #3a3a3a');
            menuOuvert = true;
        }

        function menuCloseSmall() {
            //utilisation de promise pour enlever la bordure une fois le menu slidé
            $('.menuGauche').slideUp(500).promise().done(function () {
                $('.liseret').css('border-bottom', '0');
            });
            menuOuvert = false;
        }

        function menuOpenLarge() {
            $('nav, #titre1, .menuGauche, .liseret, section .titre, section #caroussel').css('transform', 'translate(0)');
            menuOuvert = true;
        }

        function menuCloseLarge() {
            $('nav, #titre1, .menuGauche, .liseret, section .titre, section #caroussel').css('transform', 'translate(-240px)');
            menuOuvert = false;
        }

        // Fonctions qui gèrent la hauteur de la fenetre pour affichage dans le livre d'or pour small et large devices

        function sectionHeightLargeGold() {
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

        function sectionHeightSmallGold() {
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

        // Fonctions définissant le comportement des flèches aidant à la navigation des menus

        function arrowUp(id) {
            $(id + ' i.fas.fa-arrow-up').show(500);
            $(id + ' i.fas.fa-arrow-down').hide();
        }

        function arrowDown(id) {
            $(id + ' i.fas.fa-arrow-down').show(500);
            $(id + ' i.fas.fa-arrow-up').hide();
        }

        // Fonctions commandant l'ouverture des sous-catégories

        function continentOpen() {
            $('.continents').slideDown(500);
            continentOuvert = true;
        }

        function continentClose() {
            $('.continents').slideUp(500);
            continentOuvert = false;
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


        /* --------- Début du Script --------------- */

        // Utilisation de matchMedia pour s'adapter aux Mediaqueries CSS

        // on fixe une valeur repère qui indique que le menu est fermé

        var menuOuvert = false


        /* ------- INFERIEUR à 850 px --------- */

        if (window.matchMedia("(max-width: 850px)").matches) {

            // Détecter le changement d'orientation pour mettre le titre dans le liseret

            $(window).on('orientationchange', function () {
                titleChange();
            });

            // adapter la position absolute de la section à la taille du liseret;

            liseretHeight();

            // de base, le menu est caché

            $('.menuGauche').hide();

            //on cache la bordure du liseret pour éviter de surcharger

            $('.liseret').css('border-bottom', '0');

            //ecouteur le clic sur le liseret

            $('.liseret').on('click', function () {

                // Changement de l'icone avec les classes fontawesome - le changement de couleur se fait avec le CSS

                iconeMenu();

                // Affichage / disparition du menu en lui-même

                if (menuOuvert == false) {
                    menuOpenSmall();
                } else if (menuOuvert == true) {
                    menuCloseSmall();
                };

            });

            // Fermeture du menu lorsqu'on clique sur un lien du menu

            $('a#accueil, .asie a, .europe a, .amsud a,a#street, a#portrait, a#architecture, a#mariage, a#moi, a#contact, a#livre').on('click', function () {

                if (menuOuvert == true) {
                    iconeMenu();
                    menuCloseSmall();
                };
            });

            // Enlève les miniatures lorsqu'on est en full screen sur mobile

            fullscreenWithoutThumbnails();

        }

        /*  ------- SUPERIEUR à 851 px ---------- */

        if (window.matchMedia("(min-width: 851px)").matches) {

            $('.liseret').on('click', function () {

                // Changement de l'icone avec les classes fontawesome - le changement de couleur se fait avec le CSS

                iconeMenu();

                // Affichage / disparition du menu en lui-même

                if (menuOuvert == false) {
                    menuOpenLarge();
                } else if (menuOuvert == true) {
                    menuCloseLarge();
                };

            });

            // Fermeture du menu lorsqu'on clique sur certains liens

            $('a#accueil, a#street, a#portrait, a#architecture, a#mariage').on('click', function () {

                if (menuOuvert == true) {
                    iconeMenu();
                    menuCloseLarge();
                };
            });
        }

        // Dans le menu, ajouter des catégories continents lorsqu'on clique sur Voyage + changer l'icone fleche haut/bas

        // TODO: Code à refactoriser

        // définition comportement de base
        var continentOuvert = false;
        $('.continents').hide();
        $('#voyages i.fas.fa-arrow-up').hide();

        $('#voyages').on('click', function () {
            if (continentOuvert == false) {
                continentOpen();
                arrowUp('#' + $(this).attr('id'));
            } else if (continentOuvert == true) {
                continentClose();
                arrowDown('#' + $(this).attr('id'));
            };

        });

        // fermer voyage si on clique sur un autre lien (utile pour affichage smartphone)

        $('#moi,#livre,#contact,#street,#architecture,#portrait,#mariage').on('click', function () {
            if (continentOuvert == true) {
                $('.continents').slideUp(500);
                continentClose();
                arrowDown('#' + $(this).attr('id'));
            };

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

        // Gérer la hauteur de la fenetre pour affichage du livre d'or

        if (window.matchMedia("(min-width: 851px)").matches) {
            sectionHeightLargeGold();
        }

        if (window.matchMedia("(max-width: 850px)").matches) {
            sectionHeightSmallGold();
        }


        // Lancement script principal

        // TODO: recharger le script principal au changement d'orientation (cas ipad)

        /* window.addEventListener("orientationchange", function() {
            alert('OK3');
          });

          window.addEventListener("resize", function() {
            alert('OK2');
          }); */

        /* --------- Fin du script ------------ */

    });

})(jQuery);