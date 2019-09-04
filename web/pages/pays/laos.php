<script src="http://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.js"></script>
<div class="titre">
  <h2>Galerie Photo Laos</h2>
</div>
<div id="caroussel">

  <?php

  include '../fotoramaDefault.html';

  $files = glob("../../images/pays/laos/*.*");
  $compteur = count($files);

  for ($i = 1; $i <= $compteur; $i++) {
    echo "<img src='images/pays/laos/laos" . $i . ".jpg' />";
  }
  ?>

</div>
</div>