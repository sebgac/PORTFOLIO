/*             var regexName = /^[a-zA-Z0-9_-]{3,20}$/;
            var resultat = regexName.test("AAaajjjjjjdedededede");
            alert(resultat);

            var regexEmail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
            var resultat = regexEmail.test("AAaajjjjj@jdededede.com");
            alert(resultat); */

/*  var test = "Sebas   tien Gac"
 var regexTest = /^[a-zA-Z0-9_-\s]{3,30}$/;
 var resultat = regexTest.test(test);
 if (resultat) {
     alert ('Ok');
 } */



/* $.ajax({
    type: 'HEAD',
    url: 'https://openclassrooms.com/forum/sujet/tester-si-url-existe',
success: function() {
    alert ('Ok')
},
error: function() {
    alert ('KO')
}
}); */



/* $.ajax({
    url: "https://openclassrooms.com/forum/sujet/tester-si-url-existe'",
    method: "HEAD",
    statusCode: {
        404: function () {
            alert('not found');
        },
        200: function() {
        alert("foundfile exists");
    }
    }
}); */

/* var xhr = new XMLHttpRequest();
 
xhr.open('HEAD', 'mon-url.com');
 
xhr.onreadystatechange = function() {
 
    if (xhr.readyState == 4) {switch(xhr.status) {
            case 200 :
                // Good ! File exists ! Redirection...
            break;
            case 404 :
                // File not found !
            break;
            case 402 :
                // Maybe you will do another thing.
            break;
        }
     }
};
 
xhr.send(null); */

alert('test8');

var url = "openclassrkjhh"

function Url_Valide(UrlTest) {

    var regexp = new RegExp("^((http|https):\/\/)?(www[.])?([a-zA-Z0-9]|-)+([.][a-zA-Z0-9(-|\/|=|?)?]+)+$");

    if (regexp.test(UrlTest)) {
            alert('Mon URL est valide');
    }
                else {
            alert('Mon URL n\'est PAS valide');
        };
        /* return regexp.test(UrlTest); */
    };

Url_Valide(url);

if (http_fac){ //le segment "http://" est facultatif
     var regexp = new RegExp("^((http|https):\/\/)?(www[.])?([a-zA-Z0-9]|-)+([.][a-zA-Z0-9(-|\/|=|?)?]+)+$");
   }else{
    var regexp = new RegExp("^((http|https):\/\/){1}(www[.])?([a-zA-Z0-9]|-)+([.][a-zA-Z0-9(-|\/|=|?)?]+)+$");
   }

   echo "<br><table>
   <tr>
       <td>Nom :</td>
       <td>" . $value["name"] . "</td>
   </tr>"; if (isset($value["website"])) { 
       echo "<tr>
       <td>Website :</td>
       <td><a href=". $value["website"] . " target='_blank'>Lien vers site web</a></td>
   </tr>
   }.";} echo"
   
   <tr>
       <td>Message :</td>
       <td>" . $value["msg"] . "</td>
   </tr>
   </table><br><hr>";