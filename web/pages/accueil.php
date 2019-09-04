<script>
  fotoramaDefaults = {
    nav: false
  }
</script>

<script src="http://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.js"></script>

<div class="titre">
  <h2 value="accueil">Galerie Photo Accueil</h2>
</div>

<div id="caroussel">

  <!-- <div class="fotorama" data-maxwidth="100%" data-maxheight="90%" data-ratio="800/600" data-nav="thumbs" data-fit="contain" data-thumbwidth="30" data-thumbheight="30" data-arrows="true" data-click="true" data-swipe="true" data-trackpad="true" data-keyboard="true" data-allowfullscreen="true"> -->

    <?php

    // Paramètres par défaut du caroussel

    include 'fotoramaDefault.html';

    /* --- script qui me permet d'adapter le code en fonction du nombre de photos dans mon dossier --- */

    //$files pour "lister" les fichiers 
    $files = glob("../images/accueil/*.jpg");
    // Variable $compteur pour compter  les fichiers lister ($files) dans le dossier 
    $compteur = count($files); 

    for ($i = 1; $i <= $compteur; $i++) {
      echo "<img src='images/accueil/accueil" . $i . ".jpg' />";
    }
    ?>

  </div>
</div>