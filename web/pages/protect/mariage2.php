<script src="http://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.js"></script>
<div class="titre">
  <h2>Galerie Photo Mariage</h2>
</div>
<div id="caroussel">

  <!-- <div class="fotorama" data-maxwidth="100%" data-maxheight="90%" data-ratio="800/600" data-nav="thumbs"
    data-fit="contain" data-thumbwidth="30" data-thumbheight="30" data-arrows="true" data-click="true" data-swipe="true"
    data-trackpad="true" data-keyboard="true" data-allowfullscreen="true"> -->
    
    <?php

    include '../fotoramaDefault.html';

    $files = glob("../../images/mariage/*.jpg"); 
    $compteur = count($files); 

    for ($i = 1; $i <= $compteur; $i++) {
      echo "<img src='images/mariage/mariage" . $i . ".jpg' />";
    }
    ?>

  </div>
</div>