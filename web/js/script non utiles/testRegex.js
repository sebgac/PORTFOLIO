/*             var regexName = /^[a-zA-Z0-9_-]{3,20}$/;
            var resultat = regexName.test("AAaajjjjjjdedededede");
            alert(resultat);

            var regexEmail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
            var resultat = regexEmail.test("AAaajjjjj@jdededede.com");
            alert(resultat); */

            var test = "Sebas   tien Gac"
            var regexTest = /^[a-zA-Z0-9_-\s]{3,30}$/;
            var resultat = regexTest.test(test);
            if (resultat) {
                alert ('Ok');
            }