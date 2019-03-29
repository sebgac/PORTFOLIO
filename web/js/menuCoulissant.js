(function ($) {

    $(function () {

        // on définit une variable repère

        var menuOuvert = false

        $('a#bouton').on('click', function () {
        // changement de l'icone avec les classes fontawesome
            $('i#icone')
                .toggleClass('fas fa-times')
                .toggleClass('fas fa-bars');
            if (menuOuvert == false){
                $('.menuGauche').css('display','flex');
                menuOuvert = true;
            } else if (menuOuvert == true){
                $('.menuGauche').css('display','none');
                menuOuvert = false;
            };

        });

        // quand on clique sur le menu burger, ouvrir le menu à gauche

        // quand on clique sur le bouton fermer ou en dehors de la nav gauche, on referme le menu à gauche

        // quand on clique sur une partie cliquable du menu, on affiche les sous catégories

        // quand on clique sur une autre partie cliquable du menu, on cache les sous catégories précédentes et montre les nouvelles sous catégories

    });


})(jQuery);





