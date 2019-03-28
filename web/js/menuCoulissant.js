(function ($) {

    $(function () {

        // transformer le bouton menu en bouton fermer et vice versa avec click toogle

        $('a#bouton').on('click', function () {
            $('i')
                .toogleClass('fas fa-times')
                .toogleClass('fas fa-bars');
            $('#portfolio').hide();
            $('.menuGauche').css('display','none');
        });

        // quand on clique sur le menu burger, ouvrir le menu à gauche

        // quand on clique sur le bouton fermer ou en dehors de la nav gauche, on referme le menu à gauche

        // quand on clique sur une partie cliquable du menu, on affiche les sous catégories

        // quand on clique sur une autre partie cliquable du menu, on cache les sous catégories précédentes et montre les nouvelles sous catégories

    });


})(jQuery);





