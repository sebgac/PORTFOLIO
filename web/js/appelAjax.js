(function ($) {

    $(function () {

/* debut du script */

        $(document).ready(function() {
            $.ajax({
                url: "pages/accueil.html", success: function (result) {
                    $('section').html(result);
                    /* $('section .titre, section #caroussel').css('transform', 'translate(0)'); */
                }
            });
        });

        $('a#accueil').on('click', function () {

           /*  alert ('OKtitre'); */

           $.ajax({
                url: "pages/accueil.html", success: function (result) {
                    $('section').html(result);
                    
                }
            });

        });
       
        $('a#street').on('click', function () {

            $.ajax({
                url: "pages/street.html", success: function (result) {
                    $('section').html(result);
                    /* $('section .titre, section #caroussel').css('transform', 'translate(0)'); */
                }
            });

        });

        $('a#architecture').on('click', function () {

             $.ajax({
                url: "pages/architecture.html", success: function (result) {
                    $('section').html(result);
                }
            }); 

        });

        $('a#portrait').on('click', function () {

            $.ajax({
                url: "pages/portrait.html", success: function (result) {
                    $('section').html(result);
                    /* $('section .titre, section #caroussel').css('transform', 'translate(0)'); */
                }
            });

        });

        $('a#mariage').on('click', function () {

            $.ajax({
                url: "pages/mariage.html", success: function (result) {
                    $('section').html(result);
                }
            });

        });

        $('a#contact').on('click', function () {

            $.ajax({
                url: "pages/contact.php", success: function (result) {
                    $('section').html(result);
                    $('section .titre, section #caroussel').css('transform', 'translate(0)');
                }
            });

        });


/* fin du script */

    });

})(jQuery);





