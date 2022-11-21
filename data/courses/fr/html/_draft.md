---
title: Créer une page HTML
number: 999
level: basic
updated: "2020-02-14"
published: false
---




<!-- 

La page web affichée
La page web affichée
Cela ne marche pas bien, on dirait ! Tout le texte s'affiche sur la même ligne alors qu'on avait écrit deux lignes de texte différentes !?

En effet, bien vu !
Le texte s'affiche sur la même ligne alors qu'on avait demandé à l'écrire sur deux lignes différentes. Que se passe-t-il ?

En fait, pour créer une page web, il ne suffit pas de taper simplement du texte comme on vient de le faire. En plus de ce texte, il faut aussi écrire ce qu'on appelle des balises, qui vont donner des instructions à l'ordinateur comme « aller à la ligne », « afficher une image », etc.



Les commentaires
Nous avons appris à créer notre première vraie page HTML dans ce chapitre. Avant de terminer, j'aimerais vous présenter le principe des commentaires.

Un commentaire en HTML est un texte qui sert simplement de mémo. Il n'est pas affiché, il n'est pas lu par l'ordinateur, cela ne change rien à l'affichage de la page.

Bref, cela ne sert à rien ?

Eh bien si !
Cela sert à vous et aux personnes qui liront le code source de votre page. Vous pouvez utiliser les commentaires pour laisser des indications sur le fonctionnement de votre page.

Quel intérêt ? Cela vous permettra de vous rappeler comment fonctionne votre page si vous revenez sur votre code source après un long moment d'absence. Ne rigolez pas, cela arrive à tous les webmasters.

Insérer un commentaire
Un commentaire est une balise HTML avec une forme bien spéciale :

<!-- Ceci est un commentaire -->
<!-- 
Vous pouvez le mettre où vous voulez au sein de votre code source : il n'a aucun impact sur votre page, mais vous pouvez vous en servir pour vous aider à vous repérer dans votre code source (surtout s'il est long).

<!DOCTYPE html>
<html>
    <head>
        <!-- En-tête de la page -->
<!-- 
        <meta charset="utf-8" />
        <title>Titre</title>
    </head>

    <body>
        <!-- Corps de la page -->
<!-- 
    </body>
</html>
Tout le monde peut voir vos commentaires… et tout votre code HTML !
Terminons par une remarque importante : tout le monde peut voir le code HTML de votre page une fois celle-ci mise en ligne sur le Web. Il suffit de faire un clic droit sur la page et de sélectionner « Afficher le code source de la page » (l'intitulé peut changer selon votre navigateur), comme le montre la figure suivante.

Menu afficher le code source
Menu Afficher le code source
Le code source s'affiche alors (figure suivante).

Affichage du code source
Affichage du code source
Vous pouvez tester cette manipulation sur n'importe quel site web, cela marche ! Garanti à 100 %. Cela s'explique assez facilement : le navigateur doit obtenir le code HTML pour savoir ce qu'il faut afficher. Le code HTML de tous les sites est donc public.

La morale de l'histoire ? Tout le monde pourra voir votre code HTML et vous ne pouvez pas l'empêcher. Par conséquent, ne mettez pas d'informations sensibles comme des mots de passe dans les commentaires… et soignez votre code source, car je pourrai venir vérifier si vous avez bien suivi mon cours à la lettre ! 

Lorsque vous regarderez le code de certains sites web, ne prenez pas peur s'il vous paraît long ou semble ne pas respecter les mêmes règles que celles que je vous présente dans ce cours. Tous les sites ne sont pas écrits en HTML5 (loin de là) et, parfois, certains webmasters rédigent très mal leur code, ce ne sont pas toujours des exemples à suivre !

En résumé
On utilise l'éditeur de texte (Sublime Text, Notepad++, jEdit, vim…) pour créer un fichier ayant l'extension .html  (par exemple : test.html  ). Ce sera notre page web.

Ce fichier peut être ouvert dans le navigateur web simplement en faisant un double-clic dessus.

À l'intérieur du fichier, nous écrirons le contenu de notre page, accompagné de balises HTML.

Les balises peuvent avoir plusieurs formes :

<balise> </balise>  : elles s'ouvrent et se ferment pour délimiter le contenu (début et fin d'un titre, par exemple) ;

<balise />  : balises orphelines (on ne les insère qu'en un seul exemplaire), elles permettent d'insérer un élément à un endroit précis (par exemple une image).

Les balises sont parfois accompagnées d'attributs pour donner des indications supplémentaires (exemple : <image nom="photo.jpg" />  ).

Une page web est constituée de deux sections principales : un en-tête ( <head>  ) et un corps ( <body>  ).

On peut afficher le code source de n'importe quelle page web en faisant un clic droit puis en sélectionnant Afficher le code source de la page  .

 -->