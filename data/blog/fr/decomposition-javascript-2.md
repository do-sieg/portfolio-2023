---
title: La Décomposition en JavaScript (2)
description: Adopter cette technique et en exploiter les possibilités pour des fonctions plus maniables.
date: "2022-02-03"
category: javascript
coverImage:
    path: /images/blog/covers/fr/decomposition-javascript-2.jpg
    authorName: Glitch Lab App
    authorUrl: https://unsplash.com/@glitchlab
published: true
---

Dans un article précédent, on a vu ce qu'était la **décomposition** en JavaScript, avec quelques exemples.

> Si vous avez loupé la première partie, voici le lien :
[La Décomposition en JavaScript (1)](./decomposition-javascript-1)

Aujourd'hui, on va voir comment **pousser** la technique pour l'utiliser avec des **fonctions**.

> "Pas de blague sur le compost cette fois ?"  
-- Un lecteur traumatisé

Non, cette blague était déjà moisie dès le premier article.

> "..."


## Le problème des arguments optionnels

Imaginons par exemple que vous devez **récupérer des données**, avec les **options** suivantes :
1. On veut pouvoir **limiter le nombre d'entrées** à récupérer.
2. On souhaite pouvoir utiliser un système de **pagination** : par exemple, récupérer les données de 1 à 10 (page 1), 11 à 20 (page 2), etc...
3. On souhaite pouvoir **filtrer par pays** (ou pas).
4. On peut effectuer des **recherches de mot** sur les données.

On a donc potentiellement **quatre arguments** : _limit_, _page_, _countryId_, et _search_.

Notre fonction ressemblerait alors à ceci :

```js
function getData(limit, page, countryId, search) {
    // ...
}
```

Mais on ne veut avoir à toujours indiquer ces paramètres, car ils sont **optionnels** : on veut parfois filtrer par pays, parfois non, etc...


## Une solution : les valeurs par défaut

> "On pourrait leur donner des **valeurs par défaut** ?"

Comme ceci ?

```js
function getData(limit = 0, page = 1, countryId = 0, search = "") {
    // Si limit = 0, aucune limite
    // Si countryId = 0, on récupère les données pour tous les pays
    // Si search est vide, on ne filtre pas les résultats
}
```

> "Oui."

Bien vu, mais en pratique, on a un souci :

```js
// Obtenir toutes les données
getData();

// Obtenir toutes les données pour la France (ID 42)
getData(0, 1, 42);

// Obtenir toutes les données contenant le mot "pantoufle"
getData(0, 1, 0, "pantoufle");
```

Vous voyez le souci ? Si on n'a besoin que du dernier argument, on doit quand même **indiquer tous ceux qui le précèdent**.

> "Pas cool... On ne peut rien faire ?"

Il existe bien des techniques, mais ça donne des choses comme :

```js
getData(...[,,,], "pantoufle");
```

(Je mets un lien à ce sujet en fin d'article si ça vous intéresse.)

(Mais c'est moche.)


## Décomposer un objet en argument de fonction

Une solution pour régler ce souci est la **décomposition**. Remanions un peu notre fonction...

> "Je sais, je sais !"

```js
function getData(options) {
    const { limit, page, countryId, search } = options;
    // ...
}
```

C'est très bien, jeune _padawan_. Mais on peut faire mieux :

```js
function getData({ limit, page, countryId, search }) {
    // ...
}
```

> "Ooooooh...  
> J'ai pas tout compris..."

Eh bien c'est très simple : JavaScript permet de décomposer un objet **directement dans les arguments de la fonction** !

> "Ooooooh... (Là j'ai compris.)"

L'idée à retenir est qu'on ne fonctionne plus **à l'aveugle** avec un argument unique _options_, mais on a bien accès à toutes les clés possibles de cet objet **dans la définition de la fonction**.

On traite **directement avec les clés** au lieu de passer par l'objet même (ex : _limit_ au lieu d'_options.limit_).


## Encore plus de flexibilité

Et plus encore : on peut **donner des valeurs par défaut lors de la décomposition**, comme dans des arguments de fonction !

```js
function getData({ limit = 0, page = 1, countryId = 0, search = "" }) {
    // ...
}
```

> "Ooooooh..."

Et on peut même **combiner ceci avec des arguments normaux** :

```js
function getData(page, limit, { countryId = 0, search = "" }) {
    // On a fait de page et limit des arguments requis
}
```

> "Re-ooooooh..."

Et on n'a **pas à se soucier de l'ordre des arguments**, car un objet ne tient pas compte de l'ordre de ses clés (et c'est pour ça qu'on n'utilise pas de tableau) !

```js
let countryId = 42;
let search = "Pas-de-Calais";

// Ces deux lignes font la même chose
getData({ countryId, search });
getData({ search, countryId });
```

La décomposition est donc une façon **flexible** de gérer les données à envoyer aux fonctions.


## Application : décomposer les props d'un composant fonctionnel ReactJS

Voici un **composant fonctionnel** utilisé dans **ReactJS** :

```js
function MyComponent(props) {
    return <div>{props.firstName} {props.lastName}, {props.age} ans</div>;
}

<MyComponent firstName="Bob" lastName="Martin" age="24" />
```

La même chose **en décomposant props**, ce qui rend les choses plus lisibles :

```js
function MyComponent({ firstName, lastName, age = 20 }) {
    return <div>{firstName} {lastName}, {age} ans</div>;
}

<MyComponent firstName="Bob" lastName="Martin" age="24" />
```

Avantages :
- On **connaît les propriétés** reçues par le composant.
- Ces propriétés sont **directement accessibles dans des variables**.
- On peut leur **donner des valeurs par défaut**.

> "Il commence à nous saoûler l'autre avec ses exemples React..."  
-- Un développeur VueJS

On peut utiliser ça partout, pas uniquement dans React !


## Une technique à rapidement adopter

**Attention** : ne passez pas **toutes vos fonctions** avec des arguments décomposés dans un objet...

> "Oups..."  
-- Un lecteur impatient

Mais si vous recevez un objet comme argument d'une fonction, vous gagnerez beaucoup à le décomposer pour en récupérer les clés.

Sachez que **plusieurs frameworks JavaScript** utilisent cette approche **par défaut dans leur code de base**.

C'est donc une pratique fortement encouragée.


## Le mot de la fin

C'est la fin de cette explication en deux parties sur la décomposition en JavaScript.

Je remets le lien de MDN qui traite du sujet dans ses moindres détails :
- [Affecter par décomposition (MDN)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

Et un lien vers StackOverflow (en anglais) avec les astuces pour "sauter des arguments" quand on appelle une fonction JavaScript avec des arguments "classiques" :
- [Skip arguments in a JavaScript function](https://stackoverflow.com/questions/32518615/skip-arguments-in-a-javascript-function)
