(function ($) {

    $(function () {

        /* alert ('OK1'); */

        $('a#street').on('click', function () {

            /* alert ('OK6'); */

            $.ajax({
                url: "streetTestAjax.html", success: function (result) {
                    $('section').html(result);
                    $('section .titre, section #caroussel').css('transform', 'translate(0)');
                }
            });

        });

        $('a#portrait').on('click', function () {

            /* alert ('OK5'); */

            $.ajax({
                url: "portraitTestAjax.html", success: function (result) {
                    $('section').html(result);
                    $('section .titre, section #caroussel').css('transform', 'translate(0)');
                }
            });

        });


    });

})(jQuery);





