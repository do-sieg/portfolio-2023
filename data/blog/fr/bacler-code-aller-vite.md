---
title: Bâcler le code pour aller plus vite ?
description: Ou comment perdre beaucoup de temps et d'argent en croyant en gagner.
date: "2022-12-13"
category: code
coverImage:
    path: /images/blog/covers/todo-refactor-epic-fail.jpg
published: true
---

J'ai récemment vu passer une discussion sur le _clean code_, le TDD... les **bonnes pratiques** en somme. Un développeur y racontait une expérience assez courante que je vais résumer ici.


## Pragmatique ? Réaliste ?

On lui avait confié une application où toute la logique était dans le fichier `App.js`, de **plusieurs milliers de lignes**. Une catastrophe à maintenir, ou même seulement lire et comprendre. Quelque chose qu'il ne faut **jamais faire**.

Cependant, cette version boiteuse avait permis de lever des millions d'euros pour **financer le projet**. Dans les mois qui ont suivi, une équipe de dix développeurs a retapé tout le code pour avoir quelque chose de gérable.

Suite à cela, le développeur conclut que **seul le résultat compte, pas le code**. J'avoue que c'est une réalité à ne jamais oublier : ne pas trop optimiser un projet dont on ne connaît pas encore l'avenir.

Dans son cas, ça s'est bien terminé et...

<div style="text-align: center; margin: 2rem 0">... c'est <b>mignon</b>.</div>

![Mignon...](/images/blog/posts/office-jim-smile.webp)


## Une autre réalité (plus courante)

J'ai eu une expérience similaire (sans les millions de financement) : notre équipe avait reçu une sorte de test pour une application, et si le travail était satisfaisant, on allait nous confier la suite.

Des composants avaient déjà été posés, mais il fallait appliquer le nouveau design. J'étais en charge de reproduire la maquette sur _ReactJS_. Le délai étant court, j'étais rejoint par un intégrateur CSS.

Très vite, nous avons été bloqués à cause de **bugs** incompréhensibles empêchant l'affichage de certains composants.

J'ai essayé de comprendre et j'ai réalisé avec horreur que **toute la logique pour trois pages se trouvait dans le fichier racine App.js**. On faisait parvenir les données aux pages et à leurs sous-composants par du _prop drilling_.

> Le **prop drilling** consiste à transmettre des données de composant en composant en leur faisant **traverser tous les composants intermédiaires**, même si ces derniers n'utilisent pas ces données.


## Le cauchemar

> Ici, j'explique en quoi c'est un problème. Si vous voulez éviter les détails techniques, passez à la section suivante.

C'est évidemment quelque chose qu'il ne faut pas faire, et qui aurait pu être évité en faisant appel à un **état global** (_Redux_ à l'époque, _Context_ ou d'autres alternatives aujourd'hui).

Mais ici, un état global n'était même pas nécessaire. Ce qui se passait, c'est que les pages faisaient appel à des fonctions **qui leur étaient propres** en terme de logique, mais qui se trouvaient à la racine de l'application.

En gros, chaque composant de l'application **remontait tous les composants parents** pour une opération, puis la réponse **redescendait ces mêmes composants**.

Il suffisait juste de mettre la logique des pages... **dans les pages** !


## Décision et conséquences

Étant développeur fullstack, et non simple intégrateur, je décide d'**enfreindre les instructions** et de régler les bugs moi-même sans toucher à la structure (j'ai tout laissé dans `App.js`). Sans ça, on aurait sans doute perdu le contrat. Bien entendu, j'avais l'aval de mon supérieur.

Je me souviens encore de la conversation téléphonique avec le développeur backend à l'origine du code, intrigué de savoir pourquoi on avait touché à la partie logique.

Quelques mois plus tard, le client est revenu vers nous. L'autre développeur a été remplacé. Je pense avec le recul qu'il était un bon développeur backend, mais qu'il ne maîtrisait pas _ReactJS_, et donc ses **bonnes pratiques**.

J'en veux pour preuve le commentaire que vous voyez en image de couverture (j'avais pris la photo à l'époque)...

```js
// TODO refactor this epic programing fail
```

Il savait qu'il avait produit un bug impossible à maintenir. Mais il a préféré aller vite (peut-être une contrainte du client ?).


## Mais à quel prix ?

Certes, le client est revenu vers nous pour la suite, mais il nous a demandé de tout recommencer : on a dû refaire toute l'appli, backend et frontend compris (le backend était géré par une autre équipe).

Résultat : des mois de perdus pour le client :

- 1 à 3 mois à monter une version foireuse

- 3 mois à **essayer de faire quelque chose avec** avant de se rendre compte que c'était voué à l'échec

- Plusieurs mois ensuite à tout refaire de zéro

- 4 employés (au moins) payés sur une version **à jeter** : le premier développeur, la maquettiste, l'intégrateur CSS et moi.


## Conclusion

Donc non, la réalité du code pourri, c'est surtout de **gros retards**, la **multiplication des frais**, des **employés lassés** de refaire le même projet (et qui finissent parfois par s'en aller), et des clients qui **doutent** de leurs prestataires.

Moralité : **allez vite, mais bien**. Pas besoin de tout optimiser dès le départ, mais une bonne structure permet de **ne pas avoir à tout recommencer de zéro**...

Ce message s'adresse également aux **clients** : à vouloir aller **trop vite**, vous risquez d'y **perdre très gros**.
