---
title: Utiliser sort en JavaScript (1)
description: Comprendre les bases de la méthode sort.
date: "2023-03-02"
category: javascript
coverImage:
  path: /images/blog/covers/fr/javascript-sort-1.jpg
authorName: Warner Bros
published: true
---

Parlons un peu **tableaux** aujourd'hui.

> — Van Gogh était un génie !  
> — Je parle de listes, ou **arrays**...  
> — ???  
> — Ce truc : `[a, b, c]`...  
> — Aaaaaaaaaah !

Maintenant que vous êtes tous réveillés, on va examiner un petit souci courant dans la vie d'un développeur : **ordonner une liste** avec JavaScript. Et c'est moins simple qu'il n'y paraît.

Pour bien faire le tour du problème, je vais utiliser trois tableaux/arrays/listes :

- un tableau _fruits_, contenant des **chaînes de caractères**
- un tableau _numbers_, contenant des **nombres**
- un tableau _users_, contenant des **objets clé-valeur**.

```js
const fruits = ["pêche", "pomme", "poire", "abricot"];
const numbers = [9, 3, 1000, 56, 1, 5];
const users = [
  { name: "Raoul", age: 28 },
  { name: "Bob", age: 22 },
  { name: "Alice", age: 26 },
];
```

Allez, place à l'article !


## À la découverte de la méthode sort()

En JavaScript, on peut utiliser la méthode `Array.sort()` sur n'importe quel tableau de la façon suivante :

```js
const fruits = ["pêche", "pomme", "poire", "abricot"];

fruits.sort();

console.log(fruits); // => ["abricot", "poire", "pomme", "pêche"]
```

Ta-daaam ! La liste est **classée par ordre alphabétique**.

> Attention, la méthode `sort()` **agit directement sur le tableau**. Elle ne crée pas une copie de celui-ci.

Et là, vous me demanderez :

> "Mais... pourquoi sortir un article si le langage fait ça de base ?"  
> — Un lecteur qui croit que je n'ai que ça à faire

Essayons de reproduire notre exemple **avec des nombres** cette fois :

```js
const numbers = [9, 3, 1000, 56, 1, 5];

numbers.sort();

console.log(numbers); // => [1, 1000, 3, 5, 56, 9]
```

> "Euh... keskispass ?!"

En fait, c'est assez particulier de JavaScript : la méthode `sort()` procède à **un rangement par ordre alphabétique même avec les nombres** !

> "Un langage de clampins."  
> — Les développeurs Ruby et Python lisant des articles JavaScript en cachette

Heureusement, il existe une solution : introduire **une fonction de comparaison**.


## Utiliser une fonction de comparaison

La méthode `sort()` accepte en argument une fonction de comparaison. Cette fonction utilise deux arguments, qu'on appellera `a` et `b` selon l'usage.

```js
const numbers = [9, 3, 1000, 56, 1, 5];

// Fonction de comparaison
const compare = function (a, b) {
  return a - b;
};

numbers.sort(compare); // On utilise la fonction compare ici

console.log(numbers); // => [1, 3, 5, 9, 56, 1000]
```

Bien entendu, il est possible de placer la fonction directement dans `sort()` sans avoir à la nommer :

```js
numbers.sort((a, b) => a - b);
console.log(numbers); // => [1, 3, 5, 9, 56, 1000]
```

Et si on veut les nombres en ordre décroissant, il suffit d'inverser a et b :

```js
numbers.sort((a, b) => b - a);
console.log(numbers); // => [1000, 56, 9, 5, 3, 1]
```

![Magique](/images/blog/posts/magic.gif)

> "Trop cool ! Merci Daniel ! À la prochaine !"  
— Un lecteur pressé

**PAS SI VITE !**

Vous ne voulez pas en savoir plus ? Et notre **tableau d'objets** ?

_Et les lecteurs attendirent longtemps, très longtemps avant de savoir pour le tableau d'objet. Les saisons passèrent et l'attente du peuple grandissait à travers la contrée..._

Non, je plaisante : [la partie 2 ici](/blog/javascript-sort-2) (l'article était trop long, j'ai coupé au milieu).