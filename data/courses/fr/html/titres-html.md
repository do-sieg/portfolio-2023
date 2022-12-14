---
title: Titres et sous-titres
number: 112
level: basic
updated: "2022-12-13"
published: true
---

Il est important que le contenu de vos pages soit **structuré**.

C'est important d'un point de vue visuel mais aussi pour les moteurs de recherche qui vont scanner la page.

> Le référencement de votre page dépend entre autres de la clarté de sa structure.

C'est là qu'entrent en jeu les **titres**.


## 1. Le titre principal (h1)

La balise `h1` permet de définir un **titre principal** pour la page.

```html
<body>
    <h1>Ma page</h1>
    ...
</body>
```

Elle a une importance en **référencement** : les moteurs de recherche vont utiliser les termes présents pour déterminer la **pertinence** d'une page en fonction des termes présents dans le titre `h1`.

> Il a été longtemps recommandé de n'avoir qu'un seul titre de niveau 1 (`h1`) par page.  
Cela n'est plus nécessaire depuis HTML5 : il est possible d'avoir **plusieurs balises `h1`** dans une même page (ex : une par section), sans que cela ne pose problème pour le référencement ou la validité du code.

Les navigateurs attribuent un **style par défaut** à la balise `h1` : le texte est de taille plus grande, en gras, et il est précédé et suivi d'une marge (comme les paragraphes). On peut changer ces propriétés grâce au **CSS**.


## 2. Les sous-titres (h2, h3, etc.)

Les **sous-titres** suivent la même logique, gràce aux balises `h2`, `h3`, `h4`, `h5` et `h6`.

```html
<body>
    <h1>Ma page</h1>
    
    <h2>Les origines</h2>
    ...

    <h2>La consécration</h2>
    <h3>Une page héroïque</h3>
    ...
    <h3>La reconnaissance de la communauté</h3>
    ...

    <h2>Perspectives futures</h2>
    ...
</body>
```

Résultat :
![Résultat](/images/learn/fr/html/html-112-output.png)

Tout comme `h1`, les balises `h2` à `h6` ont des tailles de police et des marges déterminées par le navigateur. Le texte est en gras. Ces propriétés sont modifiables grâce au CSS.

> S'il est possible d'aller jusqu'au niveau 6 (`h6`), on recommande généralement de s'en tenir aux trois premiers niveaux afin d'éviter des pages au contenu indigeste (ce qui ferait fuir le visiteur).


## Conclusion

La **hiérarchie** des niveaux doit être respectée :
- On ne place pas un `h2` avant un `h1`.
- On ne met pas trois `h2` sans aucun `h1`.
- On ne passe pas de `h1` à `h3`.

Le non-respect de cette hiérarchie peut conduire à des problèmes de référencement auprès des moteurs de recherche.

Dans tous les cas, il faut que cela reste logique au vu du contenu de la page.
