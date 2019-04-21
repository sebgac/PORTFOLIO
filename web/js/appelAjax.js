(function ($) {

    $(function () {

/* debut du script */

        $('a#street').on('click', function () {

            $.ajax({
                url: "pages/street.html", success: function (result) {
                    $('section').html(result);
                    $('section .titre, section #caroussel').css('transform', 'translate(0)');
                }
            });

        });

        $('a#architecture').on('click', function () {

            alert ('OKArchi');

/*             $.ajax({
                url: "pages/architecture.html", success: function (result) {
                    $('section').html(result);
                    $('section .titre, section #caroussel').css('transform', 'translate(0)');
                }
            }); */

        });

        $('a#portrait').on('click', function () {

            $.ajax({
                url: "pages/portrait.html", success: function (result) {
                    $('section').html(result);
                    $('section .titre, section #caroussel').css('transform', 'translate(0)');
                }
            });

        });

        $('a#mariage').on('click', function () {

            alert ('OKMariage');

/*             $.ajax({
                url: "pages/mariage.html", success: function (result) {
                    $('section').html(result);
                    $('section .titre, section #caroussel').css('transform', 'translate(0)');
                }
            }); */

        });

        $('a#contact').on('click', function () {

           /*  alert ('OKCOntact'); */

            $.ajax({
                url: "pages/contact.html", success: function (result) {
                    $('section').html(result);
                    $('section .titre, section #caroussel').css('transform', 'translate(0)');
                }
            });

        });


/* fin du script */

    });

})(jQuery);





