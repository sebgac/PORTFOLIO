<script src="http://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.js"></script>
<div class="titre">
  <h2>Galerie Photo Chine</h2>
</div>
<div id="caroussel">

  <?php

  include '../fotoramaDefault.html';

  $files = glob("../../images/pays/chine/*.*");
  $compteur = count($files);

  for ($i = 1; $i <= $compteur; $i++) {
    echo "<img src='images/pays/chine/chine" . $i . ".jpg' />";
  }
  ?>

</div>
</div>