<script src="http://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.js"></script>
<div class="titre">
  <h2>Galerie Photo Vietnam</h2>
</div>
<div id="caroussel">

    <?php

    include '../fotoramaDefault.html';

    $files = glob("../../images/pays/vietnam/*.*");
    $compteur = count($files);

    for ($i = 1; $i <= $compteur; $i++) {
      echo "<img src='images/pays/vietnam/vietnam" . $i . ".jpg' />";
    }
    ?>

  </div>
</div>