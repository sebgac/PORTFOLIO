<script src="https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.js"></script>


<div class="titre">
  <h2>Galerie Photo Street</h2>
</div>
<div id="caroussel">

  <?php

  include 'fotoramaDefault.html';

  $files = glob("../images/street/*.jpg");
  $compteur = count($files);

  for ($i = 1; $i <= $compteur; $i++) {
    echo "<img src='images/street/street" . $i . ".jpg' />";
  }
  ?>


</div>
</div>