---
title: Utiliser sort en JavaScript (2)
description: Maîtriser les arcanes de la méthode sort.
date: "2023-03-03"
category: javascript
coverImage:
  path: /images/blog/covers/fr/javascript-sort-2.jpg
authorName: Warner Bros
published: true
---

_Précédemment sur le blog, nous avons vu comment utiliser `Array.sort()` pour ordonner des listes de chaînes de caractères ou de nombres. [La partie 1 est ici](/blog/javascript-sort-2) si vous l'avez manquée._

Pour résumer, on avait vu que :

- `["d", "b", "c", "a"].sort()` rangeait les textes par ordre alphabétique : `["a", "b", "c", "d"]`

- `[100, 5, 38, 1, 3].sort()` rangeait les nombres par ordre alphabétique : `[1, 100, 3, 38, 5]` (et c'est n'importe quoi)

- `[100, 5, 38, 1, 3].sort((a, b) => a - b)` rangeait les nombres par ordre numérique : `[1, 3, 5, 38, 100]` (ouf).

> Si vous n'avez rien compris aux deux derniers éléments, allez lire la partie 1 et revenez.


## Le comportement trouble des objets

Beaucoup de tutoriels terminent leur explication de `sort` en présentant `(a, b) => a - b` comme solution et passent à la suite. Et quand le jeune développeur se retrouve avec **de vraies données à classer** (des objets avec des propriétés), il se retrouve bien embêté.

> "Me voilà bien embêté..."  
— Un jeune développeur

Logiquement, en appliquant la solution passée aux **propriétés** des objets, on devrait avoir une solution comme suit : `(a, b) => a.truc - b.truc`.

Essayons d'appliquer cela à notre tableau `users`. Un coup avec le nom, un coup avec l'âge.

```js
const users = [
    { name: "Raoul", age : 28 },
    { name: "Bob", age : 22 },
    { name: "Alice", age : 26 },
];

// Rangement par nom
users.sort((a, b) => a.name - b.name);
console.log(users); // => [{ age: 28, name: "Raoul" }, { age: 22, name: "Bob" }, { age: 26, name: "Alice" }]

// Rangement par âge
users.sort((a, b) => a.age - b.age);
console.log(users); // => [{ age: 22, name: "Bob" }, { age: 26, name: "Alice" }, { age: 28, name: "Raoul" }]
```

On constate quelque chose de suprenant : **le classement par âge fonctionne, mais pas celui des noms !**

La raison est toute simple : l'opération `a.truc - b.truc` a du sens avec des nombres, mais **pas avec des chaînes de caractères**.

En fait, je vais être honnête : utiliser la soustraction `a - b` ou `b - a` est juste un **raccourci**. En soi, cette solution n'a de sens que si on comprend comment fonctionne vraiment la fonction de comparaison.


## Le réel fonctionnement des fonctions de comparaison

En fait, les fonctions de comparaison utilisées dans la méthode `sort()` ont un fonctionnement un peu particulier, qu'on va résumer comme suit :
- si **a vient avant b**, on renvoie **-1**
- si **a vient après b**, on renvoie **1**
- s'ils sont **au même niveau**, on renvoie **0**.

JavaScript va ensuite se charger de ranger les éléments par rapport à ces résultats : **un rapport négatif entre a et b signifie "a vient avant b", un rapport positif signifie l'inverse, et un rapport d'égalité signifie que a et b seront classés au même rang**.

Traduit en code :

```js
function compare(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}
```

> Cet extrait de code utilise des **if monolignes** et des **early return**. J'explique ces astuces dans [cet autre article](/blog/code-court-vs-lisible-refactorisation).

Ainsi, concrètement, pour ranger nos users selon leur nom :

```js
// Rangement par nom
users.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
});
console.log(users); // => [{ age: 26, name: "Alice" }, { age: 22, name: "Bob" }, { age: 28, name: "Raoul" }]
```

Notons que si la soustraction entre chaînes de caractères est un non-sens, la comparaison fonctionne bel et bien. JavaScript est tout à fait capable de comprendre que `"a" < "b"`, et `"b" < "c"`.


## La sombre verité

> "Mais alors, pourquoi ça marche avec la soustraction quand on travaille avec des nombres ?"

Je vais me citer moi-même.

> JavaScript va ensuite se charger de ranger les éléments par rapport à ces résultats : **un rapport négatif entre a et b signifie "a vient avant b", un rapport positif signifie l'inverse, et un rapport d'égalité signifie que a et b seront classés au même rang**.  
— Daniel Orchanian, auteur, in **Quelques lignes plus haut**

En fait, les valeurs -1 et 1 sont purement **arbitraires**. Ces valeurs fonctionnent elles aussi :

```js
// Rangement par nom
users.sort((a, b) => {
    if (a.name < b.name) return -10000;
    if (a.name > b.name) return 0.0001;
    return 0;
});
console.log(users); // => [{ age: 26, name: "Alice" }, { age: 22, name: "Bob" }, { age: 28, name: "Raoul" }]
```

Tout ce que JavaScript attend, c'est **un nombre négatif, un nombre positif ou zéro**.

Or :
- si **a est inférieur à b**, a - b sera forcément **inférieur à 0**.  
- si **a est supérieur à b**, a - b sera **supérieur à 0**.  
- et s'ils sont égaux, **a - b = 0**.

CQFD.


## Tout s'explique !

Vous comprenez maintenant quand je vous disais que la solution de la soustraction n'était qu'un **raccourci** ? Et pourquoi ça ne fonctionne **qu'avec des nombres** ?

![La boucle est maintenant bouclée](/images/blog/posts/vador-boucle.png)

Le plus intéressant dans tout cela, c'est qu'on peut **coder son propre algorithme de rangement** (par couleur, taille, etc.).

On peut écrire ce qu'on veut dans la fonction de comparaison du moment qu'on renvoie -1, 1 ou 0 !

> Vous désirez en apprendre plus ? Je donne aussi des **cours particuliers** (de programmation, pas de maths). [Le premier cours est offert !](/learn)

À bientôt pour une autre explosion de cerveau.
