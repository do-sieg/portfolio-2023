---
title: Paragraphes, retours à la ligne et séparations
number: 111
level: basic
updated: "2022-12-13"
published: true
---

Le code HTML ignore les **sauts de lignes**.

Par exemple, le code suivant :

```html
<body>
    Le week-end dernier, j'étais en Bretagne.

    Il a plu.
</body>
```

... aura pour résultat ceci :
![Résultat 1](/images/learn/fr/html/html-111-output-1.png)

Le code HTML n'est **pas du traitement de texte**. On ne revient à la ligne que si une **balise** l'indique.

Ainsi, les bouts de codes suivants produisent le même résultat :

```html
<!-- Syntaxe A -->
<balise>Le week-end dernier, j'étais en Bretagne.</balise>

<!-- Syntaxe B -->
<balise>Le week-end dernier,
j'étais en Bretagne.</balise>

<!-- Syntaxe C -->
<balise>
    Le week-end dernier, j'étais en Bretagne.
</balise>
```

Comment fait-on alors pour séparer le **texte** sur **plusieurs lignes** ?


## 1. La balise paragraphe (p)

La balise `p` permet de diviser un texte en **paragraphes** :

```html
<p>Le week-end dernier, j'étais en Bretagne.</p>
<p>Il a plu.</p>
```

Résultat :
![Résultat 2](/images/learn/fr/html/html-111-output-2.png)

La balise `p` est une simple balise qui **isole un bloc texte** et y **ajoute des marges** en haut et en bas.
![Résultat 2](/images/learn/fr/html/html-111-output-3.png)

La marge est une propriété de **style CSS** (un autre langage du web). Elle crée de l'espace autour d'un bloc.

> Vous remarquerez que les marges **ne se cumulent pas**. La marge inférieure du premier paragraphe et la marge supérieure du second **se confondent**.

> Les navigateurs ajoutent automatiquement la marge aux paragraphes, mais il est possible de modifier ce comportement.


## 2. La balise de retour à la ligne (br)

Il peut arriver qu'on souhaite effectuer un **retour à la ligne** au sein d'un même bloc ou paragraphe.

```html
<p>En Bretagne j'allai
pour y trouver soleil.</p>

<p>Mais du ciel la risée,
je devins sans pareil.</p>
```

Pour revenir à la ligne, on utilise la balise `br`. Elle peut se mettre n'importe où dans une ligne (comme toutes les balises).

```html
<!-- Ici la balise est en fin de ligne -->
<p>En Bretagne j'allai<br />
pour y trouver soleil.</p>

<!-- Ici la balise est en milieu de ligne, et a le même effet -->
<p>Mais du ciel la risée,<br />je devins sans pareil.</p>
```

Résultat :
![Résultat 4](/images/learn/fr/html/html-111-output-4.png)

Une différence notable par rapport à la balise `p` est **l'absence de marge**.

> La balise `br` est une balise **orpheline**, ou **auto-fermante** (voir cours précédents). D'où le slash (`/`) à la fin : `<br />`.


## 3. La ligne horizontale (hr)

Il existe enfin une balise similaire à `br` qui affiche une **règle horizontale** (une barre de séparation).

```html
J'étais en Bretagne et il faisait beau.
<hr />
Après être sorti de la simulation, je suis parti manger un morceau au restaurant.
```

Résultat :
![Résultat 5](/images/learn/fr/html/html-111-output-5.png)

Comme les paragraphes, la barre horizontale possède une **marge** en haut et en bas déterminée par le navigateur.

> Le style des barres horizontales, comme les marges des paragraphes, est géré dans le CSS. On peut changer leur apparence grâce aux propriétés de type `border`.<br /><br />
![Résultat 5](/images/learn/fr/html/html-111-hr-style.png)


## Conclusion

Nous avons vu trois balises qui permettent de diviser le texte dans une page HTML :
- `p` (paragraphe)
- `br` (retour à la ligne)
- `hr` (ligne de séparation horizontale).

Prochain arrêt : les titres et sous-titres.