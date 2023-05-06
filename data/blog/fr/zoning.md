---
title: Utiliser le Zoning pour votre design
description: Ou l'art de penser en rectangles.
date: "2023-04-22"
category: frontend
coverImage:
    path: /images/blog/covers/fr/zoning-balloon.webp
    authorName: Lesly Juarez, Jonas Jacobsen
    authorUrl: https://unsplash.com/@jblesly, https://pexels.com/@jonas-jacobsen-208711/
published: true
---

Il y a quelques jours, j'avais une session avec un étudiant chez **OpenClassrooms** pour un projet d'intégration de maquette, et je lui ai expliqué un concept essentiel en frontend : le "**zoning**".

> "Cessons ces anglicismes !
![Zonard](/images/blog/posts/fr/zoning-zonard.webp)
On dit **zoner** !"  
— Un galliciste remonté

...

## Le concept

Le **zoning** consiste à délimiter des **zones**...

> "D'où le nom."  
— Un lecteur perspicace

... des zones donc, basées sur les différents composants visuels de votre design.

Je vous donne un exemple de ce que ça donne avec le design de **LinkedIn**.

![Base Linkedin](/images/blog/posts/fr/zoning-linkedin-desktop-base.webp)

## Délimiter les blocs principaux

Procédons à un premier découpage des **blocs principaux** :

![Découpage des blocs principaux](/images/blog/posts/fr/zoning-linkedin-desktop-main-blocks.webp)

Le découpage est plutôt simple :

- un **header** en haut avec une barre de recherche et des icones de navigation
- un **corps de page** découpé verticalement avec
  - le **fil d'actualité** au centre
  - deux **volets latéraux**

Le zoning permet d'identifier les blocs **similaires**. Par exemple, header et corps de page semblent faire la même largeur. On serait tenté de les mettre dans un même conteneur.

Mais il y a un **piège** : _la barre blanche derrière le header_. À cause de cette barre, le header prend **toute la largeur de l'écran**.

> "Ciel ! Mais que faire ?!"  
— Un lecteur désemparé

Il suffit d'appliquer **une même classe CSS** qui se chargera de donner une largeur maximale et des marges automatiques au corps de la page ET à **un conteneur invisible dans le header** (pointillés rouges).

![Conteneur invisible](/images/blog/posts/fr/zoning-linkedin-desktop-inner-container.webp)

Le code :

```html
<header>
    <div class="inner-container"></div>
</header>

<main class="inner-container"></main>
```

```css
.inner-container {
    max-width: 1128px;
    margin: 0 auto;
}
```

Le zoning permet d'identifier ce genre de difficultés avant que vous ne perdiez du temps dessus en codant.

## Délimiter les blocs secondaires

Une fois que vous avez procédé au découpage des blocs principaux, vous pouvez aller à l'intérieur de chacun d'entre eux et procéder à un découpage plus détaillé.

Voici un exemple pour le header :

![Découpage header](/images/blog/posts/fr/zoning-linkedin-desktop-header.webp)

On peut y voir plusieurs zones et sous-zones :

- Logo
- Barre de recherche
- Menu de navigation (1)
  - Icone + Texte
- Menu de navigation (2)
  - Icone + Texte

On remarquera que bien qu'il y ait un séparateur, les éléments en violet et jaune contiennent des blocs similaires composés d'une icône et d'un texte.

On pourra peut-être décider d'en faire un seul bloc; avec un séparateur avant les deux _items_ à droite ?

## Une approche atomique

En plus de vous guider dans votre intégration du design, le zoning présente comme avantage de vous pousser à **vous concentrer sur une zone** et la terminer avant de passer aux suivantes.

Il m'arrive par exemple de faire le header et le footer avant d'insérer le corps de la page. Ou le corps avant le header et le footer.

Le zoning me permet dans ces cas de voir quels blocs peuvent être avancés indépendamment du reste (c'est souvent le cas pour le header ou le footer).

## Aller plus loin

Le zoning s'applique aussi si vous faites du **no-code**. La plupart des outils no-code vous obligent à passer par des lignes et des colonnes. Il faut donc penser "blocs".

Un exercice très intéressant consiste à découper un site au hasard avec un schéma similaire à celui que j'ai fait, pour voir comment le design est pensé.

Vous pouvez ensuite inspecter chaque élément et voir les techniques CSS qui ont été appliquées pour tel ou tel effet.

Le zoning est un des **fondamentaux du frontend**. Que vous soyez junior ou backend secrètement intéressé par ces questions, le plus tôt vous l'adopterez, le plus vite vous progresserez.

> "Mince ! On est repérés ! Replions-nous !"  
— Des devs backend infiltrés

Je ferai prochainement un article sur le zoning et le design responsive.

---

_Cet article est une version remaniée d'[un de mes posts sur LinkedIn](
<https://www.linkedin.com/posts/daniel-orchanian_frontend-css-design-activity-7056514694794108928-drx->). Suivez-moi si ce type de contenu vous intéresse._
