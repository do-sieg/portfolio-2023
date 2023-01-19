---
title: Code court VS code lisible
description: J'ai refactorisé une fonction présente sur une appli du gouvernement néerlandais.
date: "2023-01-19"
category: code
coverImage:
    path: /images/blog/covers/fr/code-court-vs-lisible-refactorisation.jpg
    authorName: Warner Bros
published: true
---

Dans un [récent post](https://www.linkedin.com/posts/anthony-cyrille_cleancode-programming-activity-7021725435289862144-oDbo), **Anthony Cyrille**, que je vous conseille de suivre vivement (sur les réseaux, pas dans la rue) montrait un exemple de code issu d'une appli lancée par le gouvernement néerlandais.

Je lui pique sa capture d'écran :

![Fonction getPercentageRounds](/images/blog/posts/short-vs-readable-refactoring.jpg)

C'est une fonction dont le rôle est assez simple : on prend une **note de 0 à 10**, et on renvoie une **représentation graphique** à base de cercles remplis ou vides.

L'avantage de cette façon de faire, c'est que c'est assez lisible et compréhensible pour l'humain.

Mais est-ce la **meilleure version possible** ?

> J'imagine que non, sinon on n'aurait pas l'article ?  
— Un lecteur perspicace

![Violence](/images/blog/posts/doc-brown-blackboard.webp)
<div style="text-align: center;"><i>Exactement !</i></div>


## C'est quoi le souci en fait ?

Comme expliqué en introduction, le code est assez simple à comprendre. Cependant, il présente deux problèmes, ou deux **pistes d'amélioration** :
- Il est **trop long** : beaucoup de répétitions pour quelque chose de plutôt simple.
- Il est **peu lisible** : il est un peu fouillis avec ces conditions qui s'enchaînent.

> **Attention !**  
Je ne critique pas ici l'**optimisation**. En fait, ce code ne présente aucun problème de performance : bien qu'il soit un peu long, il s'exécute de façon instantanée.

J'ajouterai aussi que je ne critique pas le développeur responsable du code. Il avait sans doute **plus urgent à faire** dans l'appli et sa solution **fonctionne**. Aucun reproche envers ce confrère, qui avait sûrement ses priorités.

![Violence](/images/blog/posts/baseball-bat.gif)
<div style="text-align: center; font-size: 0.85em;"><i>Le confrère néerlandais, soulagé</i></div>

Mais améliorons un peu ce code. Pour cela, je vais utiliser du **JavaScript** de base (pas de typage). Vous pouvez facilement transposer ces solutions dans d'autres langages.


## Version 1 : simple amélioration du code existant

Cette version consiste simplement à retravailler le code de façon à **conserver son fonctionnement de base** tout en supprimant ce qui est **inutile** ou **redondant**.

```js
function getRateDotsIf(rate) {
    if (rate <= 0) return "----------";
    if (rate <= 0.1) return "*---------";
    if (rate <= 0.2) return "**--------";
    if (rate <= 0.3) return "***-------";
    if (rate <= 0.4) return "****------";
    if (rate <= 0.5) return "*****-----";
    if (rate <= 0.6) return "******----";
    if (rate <= 0.7) return "*******---";
    if (rate <= 0.8) return "********--";
    if (rate <= 0.9) return "*********-";
    return "**********";
}
```

J'ai supprimé la moitié de chaque condition : la partie `rate > ...` ne sert à rien grâce aux _early returns_ qui se chargent de sortir de la fonction :

```js
    if (rate <= 0) return "----------";
    // si rate était inférieur ou égal à 0,
    // on serait déjà sorti à la ligne précédente !
    if (rate > 0 && rate <= 0.1) return "*---------";
```

Quelques **bonnes pratiques** à retenir, toutes deux déjà présentes dans le code d'origine :


![Violence](/images/blog/posts/baseball-bat.gif)
<div style="text-align: center; font-size: 0.85em;"><i>Le confrère néerlandais, fier de ses bonnes pratiques</i></div>

- Les **`if` monolignes/sans accolades** (oui, ça existe en JavaScript et non, ce n'est pas interdit) : si vous avez une simple ligne d'instruction, vous pouvez écrire votre code ainsi : `if (condition) instruction;`.  
C'est d'autant plus pratique quand le code **se répète**, comme ici.

- Le **early return** : le mot-clé return fait "sortir" de la fonction. Cela permet d'éviter des `else` et rend le code plus lisible.

Cette version a le mérite d'être **très simple à comprendre**. Pas de grosse gymnastique intellectuelle ou visuelle.

Les bonnes pratiques citées plus haut permettent de **modifier le code très facilement** et de conserver une cohérence visuelle facilitant la lecture.

Cependant, il faut connaître le concept de l'_early return_.


## Version 2 : boucle

C'est ici qu'on va essayer de se débarrasser de l'aspect **redondant** du code de départ.

```js
function getRateDotsLoop(rate) {
    let str = "----------".split("");
    for (let  i = 0; i <= 10; i++) {
        if (rate * 10 <= i) break;
        str[i] = "*";
    }
    return str.join("");
}
```

Expliquons les étapes :
1. On crée une chaîne `"----------"` dont on divise immédiatement les caractères en **tableau** grâce à `String.split()` : `["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"]`.
2. On fait une **boucle** qui itère de 0 à 10.
    - Si _rate_ multiplié par 10 est inférieur ou égal à l'itérateur i, on arrête la boucle.
    - Sinon, on transforme le caractère à l'index `i` (0 à 9) dans notre tableau : `["-", "-", ...]` devient `["*", "-", ...]` au premier passage.
3. On renvoie enfin la chaîne qui résulte de la méthode `Array.join()`.

> À noter que l'étape _split/join_ n'est pas nécessaire dans certains langages.

Cette solution est plus courte, mais je trouve qu'elle **perd en lisibilité**.

De plus, si on doit **retravailler** la fonction, il y a un certain effort intellectuel à prévoir.

> D'ailleurs, ce code contient un petit vice caché au niveau de la boucle. Saurez-vous le retrouver ?


## Version 3 : répétition

_Ou la version une fois qu'on a effectué une recherche en ligne et qu'on découvre qu'il existe une méthode [`String.repeat()`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)..._

Celle-ci permet de **générer une chaîne de caractère en la répétant un certain nombre de fois**. Exactement ce que fait notre fonction !

```js
function getRateDots3(rate) {
    const filled = Math.ceil(rate * 10);
    return "*".repeat(filled) + "-".repeat(10 - filled);
}
```

- On calcule le nombre de points **"remplis"** : la variable `rate` plafonnée à l'entier supérieur (grâce à `Math.ceil()`).
- Ensuite, on renvoie ce nombre de fois le caractère rempli (`*`) et le **reste** de fois le caractère vide (`-`) pour atteindre un total de 10 caractères.

> Cette fonction peut être codée en une ligne, mais j'ai préféré créer une micro-étape pour plus de **clarté**.


## Conclusion : quelle est la meilleure version ?

Honnêtement, je partirais sur les versions 1 ou 3.
- La **troisième** a le mérite d'être plus **courte**, tout en ayant le même niveau de lisibilité que la première.
- La **première** permet cependant de **modifier rapidement les choses** si on change la formule derrière le calcul du score.

La seconde version, si elle est plus courte que la première, est une catastrophe tant en terme de **lisibilité** que d'**évolution**. Le développeur devra inutilement **passer du temps à réfléchir à là où il met les pieds**.

Et vous, quel serait votre choix ?

![Violence](/images/blog/posts/baseball-bat.gif)
<div style="text-align: center; font-size: 0.85em; margin-bottom: 2rem"><i>Le confrère néerlandais, qui vous remercie d'avoir lu l'article</i></div>