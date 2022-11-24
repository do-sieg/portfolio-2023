---
title: Frameworks - L'approche modulaire
description: ???
date: "2022-06-17"
category: javascript
# coverImage:
    # path: /images/blog/covers/fr/javascript-framework-vs-vanilla-1.jpg
    # authorName: Rod Long, asier_relampagoestudio
    # authorUrl: https://unsplash.com/@rodlong, https://www.freepik.com/asier-relampagoestudio
published: false
---

_Précédemment sur ce blog..._

_Nous avons vu les [mauvaises raisons de choisir un **framework frontend**](/blog/javascript-framework-vs-vanilla)._

Maintenant on va voir les bonnes raisons.

> C'est quoi cette intro toute pourrie ?!

Que ce soit _React_, _Angular_ ou _Vue_...

> "Ou **Svelte**."  
> -- Un fan de Svelte (vraiment relou)

... les frameworks vont souvent utiliser une approche **modulaire**.

Par approche modulaire, on entend que chaque partie de l'application opère **indépendamment** des autres et contient **sa propre logique** (dans l'idéal).

> C'est l'anarchie !


## Des composants indépendants

Mais non... prenons un exemple : un menu _burger_ qui se trouve dans le _header_ du site.

Bien que ce menu fasse partie du header, son code sera dans un **fichier dédié** où seront réunis son contenu, son style et ses fonctions d'ouverture et fermeture... **SANS le code qui se rapporte à son conteneur (le _header_)**.

> Mais comment faire communiquer le menu et son conteneur ?

Dans notre exemple, c'est au niveau du **parent** (le _header_) qu'on utilisera le composant de menu _burger_.

```jsx
<header>
    Bienvenue chez moi !
    <BurgerMenu />
</header>
```

Cette approche modulaire, à base de **composants**, n'est pas anodine : elle présente des **avantages** qui vont changer toute la donne quand on travaille avec un framework.


## Avantage 1 : Réutiliser des éléments d'interface

Une interface **complexe** aura un certain degré d'**uniformité** (menus, boutons, etc...).

On aura donc besoin de **répéter** des éléments d'interface, de les **réutiliser** à travers l'application.

> Par exemple, sur un réseau social, on affichera les informations d'un utilisateur sous forme d'une **photo de profil** et de **son nom** avec **un lien** vers sa page de profil.  

```jsx
export default UserInfo({ user }) {
    return (
        <a className="user-info">
            <img src={user.image} alt={user.name} />
            <span>{user.name}</span>
        </a>
    );
}
```

Et cet élément d'interface va se retrouver **un peu partout sur le site**.

> On peut faire pareil avec les fonctions normales de JavaScript, non ?

Si on travailait **sans framework**, pour réutiliser un élément dans un système HTML/CSS/JavaScript **natif**, il faudra au choix :
- **Copier/coller** le même code HTML un peu partout (très mauvaise idée, difficile à maintenir par la suite)
- **Générer le code** par une fonction JavaScript, et passer par un processus en **plusieurs étapes** pour l'insérer dans la page (détails dans un prochain article).

Dans un **framework**, ce sont justement les **composants** qui vont permettre de **réutiliser du code** à travers toute une application.

On a juste à **insérer une ligne** dans le code de la page pour représenter le composant. Rien de plus.

```jsx
<div>
    <p>Bla bla bla</p>
    <UserInfo />
</div>
```
