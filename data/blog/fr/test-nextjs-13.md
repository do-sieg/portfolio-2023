---
title: J'ai essayé NextJS 13...
description: "... et ça ne s'est pas très bien passé."
date: "2022-12-08"
category: javascript
coverImage:
    path: /images/blog/covers/test-nextjs-13.jpg
published: true
---

>  – T'as pas l'air d'aller bien aujourd'hui...  
– Je dois écrire un article la dernière version de **NextJS**.  
– Les gens en ont déjà parlé, ça a l'air super.  
– Oui... mais moi, **je l'ai essayé**.  
– Tu as **testé un truc avant d'en parler** ?!  
– ...  
– Hérétique...


## J'aime NextJS

J'utilise **NextJS** au quotidien. C'est un superbe framework que je ne regrette pas d'avoir intégré à mes outils.

Il permet de démarrer rapidement un site de type NodeJS/ReactJS sans devoir se soucier de mettre en place un routeur frontend ou un serveur backend, et le tout **dans une seule application**.

Il gère aussi des choses sympa comme le multi-langue, le chargement intelligent des images...


## La hype

Comme moi, vous avez dû entendre parler de **la version 13** sortie récemment, avec conférence, grosses annonces, vidéos, tutoriaux, etc...

Comme moi, vous avez dû vous dire "Waouh ! C'est trop bien !"

> "Waouh ! C'est trop bien !"  
— Un développeur enthousiaste

Et logiquement, je me suis dit "_Tiens, je vais adapter un de mes projets sur cette version !_"


## Le test

Faisons un petit tour des fonctionnalités de NextJS 13 :

![Fonctionnalités de NextJS 13](/images/blog/posts/nextjs13-features.jpg)


### 1. Le répertoire `app` (et les composants serveur)

C'est **LA** grosse nouveauté de cette version. NextJS nécessitait jusqu'ici de mettre des fichiers `.js`/`.jsx` dans un répertoire `pages`, et assurait le **routage** en fonction de l'architecture dans ce répertoire.

La version 13 introduit un nouveau dossier `app` qui remplit le même rôle, mais plus besoin de séparer les fichiers des pages de ceux des composants de cette même page : on peut **tout mettre ensemble**. NextJS n'utilisera que les fichiers `page.js` pour déterminer le routage.

De plus, les composants peuvent **attendre le chargement de données** (fini les fonctions _getServerSideProps_ & cie), et gèrent l'affichage du chargement et des erreurs par des fichiers dédiés.

**Gros changement donc**, qui va demander de revoir toute l'architecture des applis NextJS, et...

<div style="text-align: center; margin: 3rem 0; font-size: 2em;"><b>ÇA MARCHE PAS.</b></div>

Ce n'est pas une blague. Le truc sur lequel ils ont passé des heures en présentation ne fonctionne pas. **On perd des fonctionnalités majeures** comme l'internationalisation du site. La répartition serveur/client **n'est pas stable**, et ce n'est que le début...

En même temps, pour utiliser `app`, il a fallu que je le précise dans la configuration. NextJS 13 utilise `pages` par défaut. Et c'est là que je commence à réaliser **un petit détail**...

![Fonctionnalités de NextJS 13](/images/blog/posts/nextjs13-features-beta.jpg)

Des souvenirs commencent à **remonter** de précédentes expériences sur d'autres logiciels...

![Syndrome de stress post-traumatique](/images/blog/posts/rambo-cry.jpg)
<div style="text-align: center; font-size: 0.85em;"><i>Je la voulais pas cette beta de version...</i></div>

"_Bon_", me dis-je, "_c'est une grosse modification, c'est normal... On va tester autre chose._"


### 2. Turbopack (pour aller plus vite)

Apparemment, le nouveau **Turbopack** est censé faire aller le site **700 fois plus vite**. C'est dingue quand on y pense et...

<div style="text-align: center; margin: 3rem 0; font-size: 2em;"><b>ÇA MARCHE PAS NON PLUS.</b></div>

Le truc crashe au moins une fois par heure.

> Un crash ? Du framework ?!

Oui oui, **le framework tout entier plante**. Il faut redémarrer toute l'appli. Je t'en ficherai de l'_expérience développeur_.

C'est ma faute aussi, il y avait marqué **alpha**...


### 3. Nouveau composant Image

Rien à redire. Le composant **Image** de NextJS est toujours aussi énervant à utiliser (il faut un conteneur), mais il irait apparemment plus vite. Super.

> – Il ne plante pas ?  
– Quand même, pas sur une fonctionnalité minuscule comme ça... ?


### 4. Gestion interne des polices d'écritures

Assez pratique suite au tollé que s'est pris **Google Fonts** cette année avec le traçage des visiteurs : NextJS propose d'installer et d'**héberger directement les fichiers nécessaires aux polices utilisées**.

C'est un peu embêtant à mettre en place parce qu'il faut passer par le JavaScript pour...

<div style="text-align: center; margin: 3rem 0; font-size: 2em;"><b>ÇA MARCHE PAS FRÈRE.</b></div>

MÊME ÇA ILS L'ONT PLANTÉ ! Une simple petite fonctionnalité accessoire, et... **"beta" ?!**

> Arrête, tu te fais du mal...


### 5. Amélioration de la balise de lien

Bon ben un truc qui marche : plus besoin d'écrire la balise `<a>` dans la balise `<Link>`.

![Youpi](/images/blog/posts/yippee.gif)
<div style="text-align: center; font-size: 0.85em;"><i>La joie m'inonde.</i></div>


## Conclusion : c'est une blague ?

Je râle, mais pour de bonnes raisons : NextJS est un produit **stable**. Il est utilisé en **production** par des sites accessibles au public.

On nous sort une version **majeure** : _13_, pas _13 beta_. Et **plus de la moitié des nouveautés sont foirées**.

Voyez plutôt :
![Fonctionnalités de NextJS 13 (corrigées)](/images/blog/posts/nextjs13-features-fixed.jpg)

> Mais doux rêveur, n'as-tu point vu qu'il y avait marqué beta ?

**Non.**

Parce que quand je vais sur [le site officiel](https://nextjs.org), voici ce qu'on y voit :

![Page d'accueil NextJS](/images/blog/posts/nextjs13-homepage-1.jpg)
![Page d'accueil NextJS](/images/blog/posts/nextjs13-homepage-2.jpg)

- Seule la version 13 est affichée
- Nulle part il n'est mentionné de **"beta"**.
- ce sont les fonctionnalités **buggées** qu'on met en avant sur la page produit : répertoire `app`, turbopack, next/font.

![Page d'accueil NextJS](/images/blog/posts/nextjs13-homepage-3.jpg)
<div style="text-align: center; font-size: 0.85em;"><i>"For production". LOL.</i></div>

Il y a clairement un problème de **communication**.

> – Du coup, quoi de neuf dans NextJS 13 ?  
– Ben tu écris `<Link>truc</Link>` au lieu de `<Link><a>truc</a></Link>`.  

![Youpi](/images/blog/posts/yippee.gif)
<div style="text-align: center; font-size: 0.85em;"><i>Trop bien cette version !</i></div>

À bientôt pour un article plus relax (j'espère).