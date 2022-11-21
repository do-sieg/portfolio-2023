---
title: La structure d'une page HTML
number: 103
level: basic
updated: "2020-06-17"
published: true
---

Une page HTML obéit à certaines règles de **structure**.

Le code **minimal traditionnel** d'une page (une version optimisée est fournie plus bas) est le suivant :

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

Nous allons revenir sur chaque élément de ce code, mais notons un détail : l'indentation.

L'**indentation** consiste à indiquer visuellement la hiérarchie des balises : les balises contenues dans d'autres balises font l'objet d'un **retrait vers la droite** (tabulation).

Si on devait mettre ce code sous forme de **liste hiérarchisée**, on aurait :

```
- DOCTYPE
- html
    - head
        - meta charset
        - title
    - body
```

> La balise **html** qui englobe toutes les autres ne semble pas obéir à cette règle. **head** et **body** sont au même niveau. Explications plus bas.


## 1. Le doctype

```html
<!DOCTYPE html>
```

La première ligne d'une page HTML contient le **doctype**. C'est une balise un peu différente (point d'exclamation), dont le seul rôle est d'indiquer au navigateur qu'on est bien sur une page HTML.

> Vous croiserez parfois des doctypes très longs. Il s'agit d'anciennes versions de HTML. La version actuelle (HTML5) a considérablement raccourci la syntaxe.


## 2. La balise html

```html
<html>

</html>
```

La balise **html** arrive après le doctype et **englobe le reste du code**.

C'est la seule balise dont on n'**indente pas** le code à l'intérieur.

> La raison de cette exception est **esthétique** : on sait que la balise html englobe toute la page, et effectuer un retrait sur tout son contenu **décalerait presque tout le code** de la page vers la droite pour rien.

La balise **html** prend un attribut très important : **lang**.

```html
<html lang="fr">

</html>
```

Cet attribut indique la **langue** pour la majorité du contenu de la page.

Il est nécessaire aujourd'hui pour l'**accessibilité**. Les lecteurs d'écran utilisés par certaines personnes ont besoin de connaître la langue des pages étrangères pour les lire correctement.


## 3. L'en-tête et le corps : head et body

Une page web est constituée de deux parties :

- L'**en-tête** (balise **head**) : cette section contient des **informations générales** sur la page (titre, affichage, etc...). Ces informations **ne sont pas affichées sur la page**, mais sont très importantes.

- Le **corps** (balise **body**) : on y met le contenu de la page. Tout ce qui s'y trouve sera **affiché à l'écran**.

Voyons maintenant les deux balises présentes dans l'en-tête :

```html
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
```

### a. L'encodage (balise meta charset)

```html
    <meta charset="UTF-8" />
```

Il existe plusieurs balises **meta** qui feront l'objet d'un cours à part. La balise qui nous occupe a pour attribut **charset**, et pour valeur _"UTF-8"_ (ou _"utf-8"_).

Cette balise indique l'**encodage** du fichier, c'est-à-dire la façon dont il est enregistré. L'encodage gère entre autres l'affichage des **caractères spéciaux** comme les **accents** et la **cédille**. Indispensable pour les pages en langue française.

**UTF-8** est l'encodage qui affiche le plus de caractères possibles (caractères étrangers : arabe, chinois, arménien, etc...). Il est donc utilisé universellement aujourd'hui.


### b. Le titre principal (balise title)

```html
    <title>Document</title>
```

Élément très important, le titre de la page ne s'affiche pas sur la page elle-même mais apparaît **en haut de la fenêtre** (ou de **l'onglet**) sur les navigateurs.

Il apparaît aussi **dans les résultats de recherche** sur Google ou autre. C'est donc un élément à ne pas négliger.

On conseille de garder le titre assez court (50 caractères, 100 grand maximum).


## 4. Astuce : raccourci pour la structure html

Si vous utilisez **Visual Studio Code**, il suffit d'écrire `!` ou `html5` dans un fichier HTML pour voir une proposition de raccourci.

Validez le raccourci et le code suivant sera intégré au fichier :

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

Tout ce dont vous avez besoin est là : doctype, balises de structure, balises meta...

Il suffit alors de changer la **langue** (_"fr"_ pour les pages françaises) et le **titre** de la page.

Beaucoup plus rapide que de tout écrire à la main.
