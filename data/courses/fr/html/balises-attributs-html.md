---
title: Les balises et les attributs HTML
number: 102
level: basic
updated: "2020-06-17"
published: true
---

Avant de continuer plus loin, il faut bien comprendre comment fonctionne HTML.

HTML est un langage qui utilise des **balises** (_tags_ en anglais).

Ces balises sont **invisibles** au visiteur, mais servent à informer l'ordinateur de ce qu'il doit afficher (titre, paragraphe, image, bouton...).

On peut ensuite donner à ces balises des **attributs** pour préciser certaines données.


## 1. Les balises

Une **balise HTML** se reconnaît aux **chevrons** qui l'entourent : **<** et **>**.

Entre les chevrons, on retrouve le nom de la balise : `<p>`, `<a>`, `<div>`...

Il existe deux types de balises : les balises **en paire** et les balises **orphelines**. 


### a. Les balises en paires

Elles représentent la grande majorité des balises HTML.

Ces balises fonctionnent avec un système d'**ouverture** et **fermeture** autour d'un **contenu**.

```html
<title>Un week-end en Bretagne</title>
```

Dans l'exemple ci-dessus, on a une balise **ouvrante** (`<title>`) et une balise **fermante** (`</title>`) autour d'un texte (_Un week-end en Bretagne_).

La balise **fermante** est identique à la balise ouvrante, mais avec un slash (**/**) devant le nom : `<title>`, `</title>`.

L'ordinateur va lire le code et comprendre qu'il doit afficher le texte entre les deux balises comme **titre d'onglet**.

> Plus sur la balise `<title>` dans un prochain cours.


### b. Les balises orphelines

Il existe certaines balises qui n'ont pas de contenu textuel, mais servent à insérer un autre type de contenu (une image par exemple).

On les appelle aussi **balises auto-fermantes** (_self-closing tags_ en anglais), car elles ne fonctionnent pas avec le système de balises ouvrante + fermante.

Ici, on met le **slash** à la **fin de la balise** :

```html
<img />
```

> Le slash à la fin n'est **pas obligatoire**, mais rend les choses plus claires visuellement.  
De plus, certains outils provoqueront **une erreur** si le slash n'est pas présent.  
Il est donc **fortement recommandé** de le mettre.


### c. Des balises dans des balises

Il est possible d'**imbriquer** des balises dans d'autres balises :

```html
<head>
    <title>Un week-end en Bretagne</title>
</head>
```

On utilise alors la **tabulation** pour effectuer un **retrait** vers la droite.

Ce retrait s'appelle l'**indentation** et permet de représenter la **hiérarchie** du code de façon **visuelle**.

> L'indentation est une norme à respecter dans tous les langages. Il existe même des langages où tout peut planter si elle n'est pas respectée.


## 2. Les attributs

Les **attributs** agissent comme des **paramètres** des balises.

Un attribut :
- se place **dans la balise** ouvrante (ou la balise orpheline), après le nom
- est composé du nom de l'attribut, suivi du signe égal (**=**)
- contient une **valeur** entre **guillemets**

```html
<a href="https://danielorchanian.fr/">...</a>
```

Si certains attributs sont optionnels, d'autres sont **obligatoires** pour faire fonctionner quelques balises.

Dans l'exemple suivant, l'image ne fonctionnera pas sans un attribut **src** :

```html
<img src="/images/3.jpg" />
```

L'ordinateur ira chercher l'image en suivant le chemin donné dans l'attribut **src**, et l'affichera à l'endroit où se trouve la balise.

Il est possible d'avoir **plusieurs attributs** sur une même balise. On les sépare alors par un **espace**.

```html
<img src="/images/3.jpg" alt="texte alternatif" />
```

> Il faut **toujours mettre les guillemets** autour des **valeurs**.


## Conclusion

Nous avons donc expliqué le système de balises, et les attributs de celles-ci.

Ces deux notions constituent **la base** de tout le langage HTML.

Il ne reste plus qu'à apprendre **les balises existantes en HTML**, ce qui fera l'objet des prochains cours.
