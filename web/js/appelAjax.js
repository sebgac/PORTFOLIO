(function ($) {

    $(function () {

        /* debut du script */

        // fonction qui permet de faire passer une partie du titre dans le liseret en small devices mode paysage

        function ajouterTitre() {

            // On coupe le selecteur .titre h2 à partir ce qui vient après le dernier espace recensé
            var titrePage = $('.titre h2').text().slice($('.titre h2').text().lastIndexOf(' ') + 1);

            if (window.matchMedia("(max-width: 850px) and (orientation: landscape)").matches) {

                //on commence par retirer la span puis on ajoute la nouvelle span avec la var titrePage
                $('#portfolio span').remove().promise().done(function () {
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

        // FIXME: les fonctions suivantes ne se lancent pas dans l'appel ajax, pourquoi ?

        /* function loadingInit() {
            $('#loader').fadeIn();
            $('section').html(result);
            $('section').css('opacity', '0');
        } */

        /* function loadingEnd() {
            $('#loader').fadeOut();
            $('section').fadeTo(500, 1);
        } */

        function appelAjax() {

            // Chargement de la page appelé avec index.html

            $.ajax({
                url: "pages/accueil.html", success: function (result) {
                    // on affiche le loader et commence le chargement des photos en le cachant
                    $('#loader').fadeIn();
                    $('section').html(result);
                    $('section').css('opacity', '0');
                    /* loadingInit(); */
                    // lorsque le chargement des photos est terminé, on cache le gif et modifie l'opacité de la section pour afficher les photos
                    $('.fotorama').on('fotorama:ready', function () {
                        $('#loader').fadeOut();
                        $('section').fadeTo(500, 1);
                        /* loadingEnd(); */
                    });
                    ajouterTitre();
                }
            });

            // ensuite, on charge les pages suite clic sur les liens correspondants (à peaufiner pour éviter répétition de code)

            $('a#accueil').on('click', function () {

                $.ajax({
                    url: "pages/accueil.html", success: function (result) {
                        $('#loader').fadeIn();
                        $('section').html(result);
                        $('section').css('opacity', '0');
                        $('.fotorama').on('fotorama:ready', function () {
                            $('#loader').fadeOut();
                            $('section').fadeTo(500, 1);
                        });
                        ajouterTitre();
                    }
                });

            });

            $('a#street').on('click', function () {

                $.ajax({
                    url: "pages/street.html", success: function (result) {
                        $('#loader').fadeIn();
                        $('section').html(result);
                        $('section').css('opacity', '0');
                        $('.fotorama').on('fotorama:ready', function () {
                            $('#loader').fadeOut();
                            $('section').fadeTo(500, 1);
                        });
                        ajouterTitre();

                    }
                });

            });

            $('a#architecture').on('click', function () {

                $.ajax({
                    url: "pages/architecture.html", success: function (result) {
                        $('#loader').fadeIn();
                        $('section').html(result);
                        $('section').css('opacity', '0');
                        $('.fotorama').on('fotorama:ready', function () {
                            $('#loader').fadeOut();
                            $('section').fadeTo(500, 1);
                        });
                        ajouterTitre();
                    }
                });

            });

            $('a#portrait').on('click', function () {

                $.ajax({
                    url: "pages/portrait.html", success: function (result) {
                        $('#loader').fadeIn();
                        $('section').html(result);
                        $('section').css('opacity', '0');
                        $('.fotorama').on('fotorama:ready', function () {
                            $('#loader').fadeOut();
                            $('section').fadeTo(500, 1);
                        });
                        ajouterTitre();
                    }
                });

            });

            $('a#mariage').on('click', function () {

                var motDePasse = prompt("Veuillez indiquer le mot de passe");
                if (motDePasse == "weddingpics") {
                    $.ajax({
                        url: "pages/mariage.html", success: function (result) {
                            $('#loader').fadeIn();
                            $('section').html(result);
                            $('section').css('opacity', '0');
                            $('.fotorama').on('fotorama:ready', function () {
                                $('#loader').fadeOut();
                                $('section').fadeTo(500, 1);
                            });
                            ajouterTitre();
                        }
                    });
                } else {
                    $.ajax({
                        url: "pages/accueil.html", success: function (result) {
                            $('#loader').fadeIn();
                            $('section').html(result);
                            $('section').css('opacity', '0');
                            $('.fotorama').on('fotorama:ready', function () {
                                $('#loader').fadeOut();
                                $('section').fadeTo(500, 1);
                            });
                            ajouterTitre();

                        }
                    });
                }
            });

            // pour les liens de #about, je fais un translate(0) pour que le menu ne coulisse pas au clic

            $('a#moi').on('click', function () {

                $.ajax({
                    url: "pages/moi.html", success: function (result) {
                        $('section').html(result);
                        $('section .titre, section #caroussel').css('transform', 'translate(0)');

                        if (window.matchMedia("(max-width: 850px) and (orientation: landscape)").matches) {
                            $('#portfolio span').remove().promise().done(function () {
                                $('#portfolio p').append('<span> - Sur moi </span>');
                            });
                        }
                    }
                });

            });

            $('a#contact').on('click', function () {

                $.ajax({
                    url: "pages/contact.html", success: function (result) {
                        $('section').html(result);
                        $('section .titre, section #caroussel').css('transform', 'translate(0)');

                        if (window.matchMedia("(max-width: 850px) and (orientation: landscape)").matches) {
                            $('#portfolio span').remove().promise().done(function () {
                                $('#portfolio p').append('<span> - Contact</span>');
                            });
                        }
                    }
                });

            });

            $('a#livre').on('click', function () {

                $.ajax({
                    url: "pages/livre.html", success: function (result) {
                        $('section').html(result);
                        $('section .titre, section #caroussel').css('transform', 'translate(0)');

                        if (window.matchMedia("(max-width: 850px) and (orientation: landscape)").matches) {
                            $('#portfolio span').remove().promise().done(function () {
                                $('#portfolio p').append('<span> - Livre d\'or</span>');
                            });
                        }

                        // Gérer la hauteur de la fenetre pour affichage du livre d'or

                        if (window.matchMedia("(min-width: 851px)").matches) {
                            var hauteurFenetre = $(window).height();
                            var hauteurTitre = $('section .titre').height();
                            var hauteur = hauteurFenetre - hauteurTitre - 50;

                            $('section form').css('height', '' + hauteur + 'px');
                        }

                        if (window.matchMedia("(max-width: 850px)").matches) {
                            var hauteurFenetre = $(window).height();
                            var hauteurTitre = $('section .titre').height();
                            var hauteur = hauteurFenetre - hauteurTitre - 100;

                            $('#myFrame').css('height', '' + hauteur + 'px');
                        }

                    }
                });

            });
        }

        // script chargée au lancement de la page index

        appelAjax();

        // script rechargé à chaque resize de l'écran

        $(document).on('resize', function () {
            appelAjax();

        });


        // TODO: essai pour recharger le script en resize ou orientation change

        /*$(window).resize(function () {
                    alert ('OK');
                });*/

        /* $(window).on('orientationchange', function () {
            appelAjax();
        }); */

        
        /* fin du script */

    });

})(jQuery);
