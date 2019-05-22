    <?php


    /*  $files = scandir ('../images/accueil/');

    $i = 0;
    foreach ($files as $file) {
      if (is_dir("../images/accueil/$file")) {
        $dirs[] = $file;
      }
    }

    print_r($dirs); //Tableau des sous dossiers
    echo count($dirs); //Nombre de sous dossiers */

   
    $files = glob ("../images/accueil/*.*"); /* $files pour "lister" les fichiers - Mise en place de *.* pour dire que ce dossier contient une extension (par exemple .jpg, .php, etc... */
    $compteur = count($files); /* Variable $compteur pour compter (count) les fichiers lister ($files) dans le dossier */
    echo "Il y a <font color=#FF0000>$compteur</font>";
    if ($compteur > 1) {
        echo " fichiers dans ce répertoire";
    } else {
        echo " fichier dans ce répertoire";
    }

    for ($i = 1; $i <= $compteur; $i++) {
        echo "<img src='images/accueil/accueil".$i.".jpg' />";
    }
    ?>
