(function ($) {

    $(function () {


        // Definition d'une fonction qui va mettre en majuscule la première lettre d'une chaine de caractère

        function capitalizeFirstLetter(string) 

        // Definition de la fonction qui gère le changement d'icone dans le liseret - Changement de l'icone avec les classes fontawesome

        function iconeMenu() 

        // Definition du script principal dans une fonction

        function menu() {

            // Utilisation de matchMedia pour s'adapter aux Mediaqueries CSS

            if (window.matchMedia("(max-width: 850px)").matches) {
            
                // Détecter le changement d'orientation pour mettre le titre dans le liseret

                // écouteur sur le changement d'orientation en small devices, pour modif de la mise en forme du titre de la galerie

                $(window).on('orientationchange', function () {

                    // definition de variables titrePageBrut et titrePage

                    // on ajoute le texte dans le liseret seulement si l'orientation est la bonne

                    if (window.matchMedia("(orientation: portrait)").matches) {
                        // code ici 
                });

                // adapter la position absolute de la section à la taille du liseret;

                // de base, le menu est caché

                //on cache la bordure du liseret pour éviter de surcharger

                //ecouteur le clic sur le liseret

                $('.liseret').on('click', function () {

                    // Changement de l'icone avec les classes fontawesome - le changement de couleur se fait avec le CSS

                    iconeMenu();

                    // Affichage / disparition du menu en lui-même


                // Fermeture du menu lorsqu'on clique sur un lien du menu


                // Enlève les miniatures lorsqu'on est en full screen sur mobile


            // Réalisation d'un menu "coulissant" qui s'ouvre et se ferme via un bouton menu

            // on fixe une valeur repère qui indique que le menu est fermé

            if (window.matchMedia("(min-width: 851px)").matches) {

                $('.liseret').on('click', function () {

                    // Changement de l'icone avec les classes fontawesome - le changement de couleur se fait avec le CSS

                    iconeMenu();

                    // Affichage / disparition du menu en lui-même

                // Fermeture du menu lorsqu'on clique sur certains liens

            // Dans le menu, ajouter des catégories continents lorsqu'on clique sur Voyage
            // + changer l'icone fleche haut/bas

            // fermer voyage si on clique sur un autre lien (utile pour affichage smartphone)

            // Faire de même avec les sous catégories pays

            //$(document).on permet d'écouter les éléments rajoutés par jQuery

            // Lorsqu'on clique sur une autre catégorie que celle ouverte, on ferme la catégorie en cours
            // et on change le sens de la flèche fas

            // Pour le continent Asie

            // Pour le continent Europe

            // Pour le continent AmSud

            // Rendre le bouton + visible lorsqu'on survole la catégorie Voyages

            // Le rendre à nouveau invisible lorsqu'on ne survole plus Voyages

            // Faire de même avec les catégories continents

            // Gérer la hauteur de la fenetre pour affichage du livre d'or

        }

        // definition de variable qui va nous servir dans le script

        var menuOuvert = false

        // Lancement script principal

        menu();

        // TODO: recharger le script principal au changement d'orientation (cas ipad)

        /* window.addEventListener("orientationchange", function() {
            alert('OK3');
          });

          window.addEventListener("resize", function() {
            alert('OK2');
          }); */



        /* fin du script */

       

    });

})(jQuery);