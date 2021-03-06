<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>SebGacPhoto</title>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
    integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous" />
  <link href="../css/style.css" rel="stylesheet" />
  <link href="http://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.css" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css?family=Roboto+Mono" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=PT+Mono" rel="stylesheet">


</head>

<body>
  <header>
    <div class="menuGauche">
      <a href="#">
        <h2 id="titre1">SebGac</h2>
      </a>
      <nav>
        <a>GALERIES PHOTO</a>
        <ul id="categories">
          <li><a id="voyages" href="#">Voyages <i class="fas fa-arrow-down"></i><i class="fas fa-arrow-up"></i></a>
            <ul class="continents">
              <li><a id="asie" href="#">Asie <i class="fas fa-arrow-down"></i><i class="fas fa-arrow-up"></i></a>
                <ul class="asie">
                  <li><a id="inde" href="#">Inde</a></li>
                  <li><a id="japon" href="#">Japon</a></li>
                  <li><a id="coree" href="#">Corée du Sud</a></li>
                  <li><a id="mongolie" href="#">Mongolie</a></li>
                  <li><a id="chine" href="#">Chine</a></li>
                  <li><a id="vietnam" href="#">Vietnam</a></li>
                  <li><a id="laos" href="#">Laos</a></li>
                  <li><a id="thailande" href="#">Thailande</a>
                  </li>
                </ul>
              </li>
              <li><a id="europe" href="#">Europe <i class="fas fa-arrow-down"></i><i class="fas fa-arrow-up"></i></a>
                <ul class="europe">
                  <li><a id="france" href="#">France</a></li>
                  <li><a id="allemagne" href="#">Allemagne</a></li>
                  <li><a id="autriche" href="#">Autriche</a></li>
                  <li><a id="slovenie" href="#">Slovénie</a></li>
                  <li><a id="croatie" href="#">Croatie</a></li>
                  <li><a id="montenegro" href="#">Monténegro</a></li>
                  <li><a id="albanie" href="#">Albanie</a></li>
                  <li><a id="grece" href="#">Grèce</a></li>
                  <li><a id="Turquie" href="#">Turquie</a></li>
                </ul>
              </li>
              <li><a id="amsud" href="#">AmSud <i class="fas fa-arrow-down"></i><i class="fas fa-arrow-up"></i></a>
                <ul class="amsud">
                  <li><a id="chili" href="#">Chili</a></li>
                  <li><a id="bolivie" href="#">Bolivie</a></li>
                  <li><a id="perou" href="#">Pérou</a></li>
                  <li><a id="argentine" href="#">Argentine</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a id="street" href="#">Street</a></li>
          <li><a id="architecture" href="#">Architecture</a></li>
          <li><a id="portrait" href="#">Portrait</a></li>
          <li><a id="mariage" href="#">Mariage</a></li>
        </ul>
        <div id="about">
          <a href="#">SUR MOI</a>
          <a href="#">CONTACT</a>
          <a href="#">LIVRE D'OR</a>
        </div>
      </nav>
    </div>

    <div class="liseret">
      <div id="menuburger">
        <a id="bouton" href="#">
          <i id="icone" class="fas fa-bars"></i>
        </a>
      </div>
      <div id="portfolio">
        <p>PORTFOLIO SEBGAC</p>
      </div>
    </div>
  </header>

  <section>

    <div class="titre">
      <h2>Accueil</h2>
    </div>
    <div id="caroussel">
      <div class="fotorama" data-maxwidth="100%" data-maxheight="90%" data-ratio="800/600" data-nav="thumbs"
        data-fit="contain" data-thumbwidth="30" data-thumbheight="30" data-arrows="true" data-click="true"
        data-swipe="true" data-trackpad="true" data-keyboard="true" data-allowfullscreen="true">
        <img src="../images/accueil/accueil1.jpg" />
        <img src="../images/accueil/accueil2.jpg" />
        <img src="../images/accueil/accueil3.jpg" />
        <img src="../images/accueil/accueil4.jpg" />
        <img src="../images/accueil/accueil5.jpg" />
        <img src="../images/accueil/accueil6.jpg" />
      </div>
      
  </section>

</body>

<script src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>

<!-- <script src="//code.jquery.com/ui/1.12.1/jquery-ui.js"></script> -->

<script src="http://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.js"></script>

<script type="text/javascript" src="../js/appelAjax_copy.js"></script>

<script type="text/javascript" src="../js/menuCoulissant.js"></script>

</html>