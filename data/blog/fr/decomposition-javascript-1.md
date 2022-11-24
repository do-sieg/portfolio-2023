---
title: La Décomposition en JavaScript (1)
description: Comprendre comment extraire des données d'un tableau ou d'un objet pour créer directement des variables. 
date: "2022-02-01"
category: javascript
coverImage:
    path: /images/blog/covers/fr/decomposition-javascript-1-v2.jpg
    authorName: Julietta Watson
    authorUrl: https://unsplash.com/@jwatson95
published: true
---

La technique que nous allons voir aujourd'hui s'appelle l'**affectation par décomposition** (_destructuring_ en anglais).

Elle permet d'**extraire** des données d'un **tableau** ou d'un **objet clé-valeurs** et de les **affecter à des variables**.

> "J'ai rien pigé, mais ça a l'air dégoûtant..."  
-- Un lecteur horrifié

Ok, on va commencer par un exemple...


## Extraire des données d'un tableau

Imaginons que vous ayez un **tableau** (_array_) avec trois valeurs :

```js
const list = ["Alex", 25, "Paris"];
```

Pour passer chacune des valeurs de ce tableau dans des **variables**, vous feriez :

```js
let name = list[0];
let age = list[1];
let city = list[2];
```

C'est assez **long à écrire**, et si on a plus de trois valeurs, **ça devient rapidement lourd**...

Sans compter le fait que si on **change le tableau**, il faut retoucher les indices dans les crochets :

```js
const list = ["Alex", "M", 25, "designer", "Paris"];
let name = list[0];
let gender = list[1];
let age = list[2];
let job = list[3];
let city = list[4];
```

> "C'est TRÈS moche..."  
-- Un esthète


## Une solution : la décomposition

Reprenons le tableau du début :

```js
const list = ["Alex", 25, "Paris"];
```

Et utilisons la **décomposition** :

```js
let [name, age, city] = list;

console.log(name, age, city); // => "Alex", 25, "Paris"
```

Non, vous ne rêvez pas : on a bien créé trois variables _name_, _age_ et _city_ à partir de notre tableau, et **en une seule ligne** !

> "Mais quelle est cette **sorcellerie** ?!"  
-- Un lecteur puritain


## La décomposition : comment ça marche

Oh, rien de sorcier là-dedans. En fait, cette ligne :

```js
let [name, age, city] = list;
```

... revient à faire ceci :

```js
let [name, age, city] = ["Alex", 25, "Paris"];
```

Chaque élément du tableau de gauche (_name, age, city_) prend une valeur du tableau de droite (_"Alex", 25, "Paris"_).

Le tableau de droite est **décomposé** : ses valeurs sont **distribuées à gauche**, dans nos trois variables.

La grande originalité est qu'**on peut utiliser le mot-clé _let_** avant les crochets pour signaler qu'on **crée des variables** !

> "Puissant..."

Du coup, si vous changez votre tableau, vous pourrez simplement écrire ceci :

```js
const list = ["Alex", "M", 25, "designer", "Paris"];
let [name, gender, age, job, city] = list;
```

Pratique, non ?

Et ça marche aussi avec des **constantes** :

```js
const [name, age, city] = list;
```


## Exemple : le hook useState de ReactJS

> "Attends, j'ai déjà vu ce truc quelque part..."  
-- Un lecteur attentif

En effet, si vous utilisez **React**, et notamment le **hook _useState_**, vous avez déjà utilisé la décomposition :

```js
const [value, setValue] = useState();
```

En gros, _useState_ renvoie **deux éléments** : une valeur et sa fonction de changement, qu'on récupère dans deux variables _value_ et _setValue_. C'est aussi bête que ça.


## La décomposition puissance 10 : les objets

Maintenant que vous avez compris le principe de la décomposition, il est temps de passer aux **objets**.

Modifions un peu notre code pour remplacer notre tableau par un **objet** avec des **clés** et des **valeurs** :

```js
const user = {
    name: "Alex",
    gender: "M",
    age: 12,
    job: "designer",
    city: "Paris",
};
```

Imaginons qu'on aie besoin du nom et de l'âge. On pourrait créer des variables comme suit :

```js
let name = user.name;
let age = user.age;
```

Mais il est possible grâce à la décomposition d'**extraire des variables** pour **chaque clé d'un objet** :

```js
let { name, age } = user;
```

> "Mais attends un peu... et les autres clés ?"


## Flexible... et lisible

C'est justement là que la décomposition montre sa puissance : avec les objets, **pas besoin de récupérer toutes les clés** ! Vous ne récupérez que ce qui vous intéresse !

On peut même carrément récupérer les valeurs dans l'**ordre voulu** :

```js
let { job, name } = user;

console.log(job); // => "designer"
console.log(name); // => "Alex"
```

> "Mais c'est trop bien !"

Oui. Par exemple, si vous utilisez des composants **React** avec des classes, vous devez souvent utiliser les variables de `this.state` et `this.props` :

```js
const total = this.state.salary * this.state.bonus - this.props.tax * this.props.multiplier;
```

On peut rendre le code **plus lisible** ainsi :

```js
const { salary, bonus } = this.state;
const { tax, multiplier } = this.props;

// On lit bien mieux ce calcul
const total = salary * bonus - tax * multiplier;
```

> "Mais on a rajouté **deux lignes**..."

Certes, mais quelle **amélioration en lisibilité** ! Il est bien plus rapide de parcourir ce code que le précédent.

_**Note** : Attention, le **nombre de lignes** ne doit pas devenir une **obsession** ! **La lisibilité doit l'emporter sur la concision du code**._


## La suite... bientôt

Voilà voilà. La partie 2 traitera d'**applications un peu plus poussées** de la décomposition.

En attendant, pour de plus amples (TRÈS amples) détails sur la décomposition, voici un lien vers la page MDN qui en traite :
- [Affecter par décomposition (MDN)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).
