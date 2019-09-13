    
// Non réalisé :
    
    // TODO: s'inspirer de https://www.grafikart.fr/tutoriels/jquery-on-events-518 pour ajouter un écouteur unique sur tous les liens. Puis s'inspirer de $('.titre h2').text().slice($('.titre h2').text().lastIndexOf(' ') + 1) pour récupérer le nom de la page à charger sans répétition de code

    // TODO: lazy loading pour les images, voir srcset si possible

    // TODO: enlever les fleches dans le mode fullscreen en small devices 

    // FIXME: fixer le bug orientationchange pour les pages de la section about

    // FIXME: pourquoi il y a un petit décalé en bas de l'écran sur les thumbnails

    // FIXME: pourquoi en small devices l'écran n'est pas fixe (il y a un tout petit scroll)

    // FIXME: portfolio ne reste pas vraiment en place lors du scroll bas

    // FIXME: bug de design small devices, lors changement orientation le caroussel ne sadapte pas compltement au height (de portrait vers paysage)

    // FIXME: menu qui ne déroule plus après changement d'orientation

    // FIXME: fleche sur #voyage qui ne s'affiche plus au hover lorsqu'on a cliqué sur un lien et revient dans le menu

    // FIXME: pas de ligne de délimitation sur menu bottom en safari (ok chrome)

    // FIXME: fleche double parfois au déroulement, je ne sais pas pourquoi
    

// En cours de réalisation :
    
    // TODO: épurer le code en faisant des fonctions - eviter répétitions 

    // TODO: créer une rubrique mariage protégé par mot de passe

    // TODO: laisser la fleche à coté de voyage meme lorsqu'on clique sur un continent // fait pour voyage, à faire pour les autres

    // TODO: recharger le design au changement d'orientation ou de resize (possiblement à faire en ajax)
    // idée : recharger dans l'écouteur orientation change le script menuCoulissant (peut etre mettre en ajax, ou à l'extérieur de ce fichier)

 
// Déjà fait :

    // 19-XX-XX TODO: charger dynamiquement les photos (peu importe leur nombre dans le dossier physique)

    // 19-XX-XX FIXME: réaligner portfolio seb dans mozilla - à essayer avec moz- dans CSS

    // 19-09-05 FIXME: inclure les caractères spéciaux dans la regex nom du contact (le é n'est pas pris en compte)

    // 19-09-05 FIXME: le point n'est pas valide dans le champ nom dans l'email

    // 19-09-13 TODO: rédiger un script pour charger automatiquement les valeurs par défauts du plugin fotorama

    // 19-09-13 FIXME: le htacces et htpasswd disparaissent du finder ...

    // 19-09-13 FIXME: régler ce problème de couleur rouge avec l'email et website (à voir event keyup et blur) : voir comment faire pour que le keyup ne soit pas pris en compte lors d'un premier jet
