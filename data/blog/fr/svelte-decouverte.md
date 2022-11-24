---
title: Svelte - Premières impressions
description: "Suite à un petit ras-le-bol avec React, j'ai essayé Svelte et j'en suis bien heureux."
date: "2022-09-07"
category: javascript
coverImage:
    path: /images/blog/covers/fr/svelte-decouverte.jpg
published: true
---

_S'il y a une chose dont l'écosystème JavaScript ne manque pas, ce sont bien les **frameworks**._

> Et on commence par la belle grosse phrase cliché... Mais encore ?

(Sérieux je ne trouvais rien d'autre...)

Je travaille avec **React** depuis 2018, et j'ai ajouté **NextJS** à mes outils en 2020. C'était la suite logique. J'ai pu expérimenter d'autres frameworks, notamment **VueJS**, mais je ne voyais pas l'intérêt de cumuler deux outils équivalents tant dans leur utilité que dans le temps nécessaire à investir pour les maîtriser.

Ma politique est donc la suivante : si l'outil fonctionne, et qu'il y a suffisamment d'entreprises qui y font appel (et donc suffisamment d'offres d'emploi), inutile de s'éparpiller. Surtout quand on a au moins deux nouveaux frameworks par an...

[![How standards proliferate](https://imgs.xkcd.com/comics/standards.png)](https://xkcd.com/927/)

Quand **Svelte** a débarqué dans l'écosystème JavaScript, j'ai été interpellé par la simplicité apparente du code. J'ai donc gardé ce framework quelque part en tête, me disant que je m'y essaierai bien un jour.

**Un enfant et cinq déménagements plus tard**, c'est enfin arrivé.


## Comment tout a basculé

Il y a quelques jours, je voulais créer un petit outil pour un projet personnel mono-page (Single Page App). Je crée un projet sur React, et je commence à mettre en place les composants.

Et c'est en créant la première variable d'état que je bloque :

```js
import { useState } from "react";

// ...

const [truc, setTruc] = useState(0);
```

Je me souviens d'un élève qui me demandait la veille ce que je pensais du framework **Svelte**. J'avais expliqué à quel point le code était connu pour être **concis**, et j'avais montré quelques exemples glanés sur un moteur de recherche.

Et dans Svelte, l'équivalent de la ligne de code ci-dessus, c'est ça :

```js
let truc = 0;
```

Pas de fonction `useState`, pas de tableau, pas de fonction de changement `setTruc`. **Juste une variable**.

J'en ai eu ras-le-bol. Je me souviens avoir supprimé le projet React sur-le-champ, et commencé à **installer Svelte**.

La suite de l'article est un post LinkedIn retravaillé qui communique mon ressenti après deux jours d'utilisation.

> Deux jours ?! Seulement ?

Oui, et c'est déjà assez pour remarquer certaines choses.


## 1/ Une mise en place rapide

Pour créer un **composant**, on tape du html dans un fichier `.svelte`, et c'est bon.

```html
<p>Coucou</p>

<p>Ça va ?</p>

<p>Tranquille. Je teste <b>Svelte</b>.</p>
```

- Pas besoin d'**englober le contenu du composant** dans une balise unique ou un fragment React (`<>...</>`).

- Pas besoin de créer et d'**exporter** une **fonction** JavaScript : les composants Svelte **se reconnaissent entre eux** ! Il suffit juste de les importer où on veut.

En gros, en quelques secondes, vous avez un composant.

Même la phase d'**initialisation de projet** avec npm est l'affaire de **quelques secondes**... Bref, très rapide !


## 2/ Un code clair
- Le composant (fichier .svelte) est du simple html (voir section précédente).

- Une balise `<script>` suffit pour les variables et les fonctions :

```html
<script>
    let truc = 0;

    function increment() {
        truc += 1;
    }
</script>

<p>Truc est égal à {truc}</p>

<button on:click={increment}>Augmenter</button>
```

- Une balise `<style>` contient le CSS du composant.

```html
<h1>Je vois rouge</h1>

<style>
    h1 {
        color: red;
    }
</style>
```

> C'est comme VueJS en fait...

![C'est comme chez nous !](/images/blog/posts/fr/rabbi-jacob-c-est-comme-chez-nous.png)

(Oui.)

Et ça a ses avantages : pas besoin de fichier supplémentaire (vous pouvez, bien entendu), et... c'est **du vrai CSS**. Pas **du JS qui essaie de passer pour du CSS**, ou un [**_template literal_**](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Template_literals).

- Il existe des balises très simples pour **l'affichage conditionnel**. 

```
{#if loading === true}
    <Loader />
{:else if error !== null}
    <Error error={error} />
{:else}
    <h1>Bienvenue, mécréants !</h1>
{/if}
```

- Et **boucler une liste** n'est pas aussi lourd que sur React qui oblige à utiliser `Array.map()` (et l'attribut _key_...).

```
<div class="list">
    {#each userList as user}
        <div class="user-row">{user.name}</div>
    {/each}
</div>
```

> C'est moche...

(Oui, mais on s'habitue. Ça aurait pu être pire...)


## 3/ Un travail plus rapide

- Pas de **boilerplate verbeux**. Besoin d'une variable réactive ? Pas besoin de taper tout un useState à la React : `let truc = ...` dans la balise `<script>` suffit.

```html
<script>
    let truc = 0; // Ceci est une variable d'état
</script>

<p>Truc est égal à {truc}</p>
```

- Besoin d'une **_prop_** (variable modifiable par un composant parent) ? Ajoutez `export` devant et ça fera l'affaire.

```html
<script>
    export let truc = 0; // Ceci est une variable de prop
</script>

<p>Truc est égal à {truc}</p>
```


## 4/ Des fonctionnalités sympa

- On a accès à des **variables globales** appelées **_stores_**. Il suffit de les **importer** et on peut les afficher tout simplement avec le signe $, ou effectuer des changements avec des méthodes très claires comme `truc.set()` ou `truc.update()`.

- On peut gérer les **effets de bord** (`useEffect` dans React) avec `$:` qui se place avant une ligne de code.

```html
<script>
    let truc = 0;
    
    // affiche la variable dans la console chaque fois qu'elle change
    $: console.log(truc)
</script>
```

Pour les utilisateurs de React, vous remarquerez qu'on n'a pas besoin de préciser les **dépendances** : Svelte comprend ce que vous essayez de faire (_`truc` est impliqué ? pigé_) !


## Le mot de la fin

En temps normal, deux jours serait considéré très peu pour avoir un avis éclairé, mais **la vitesse d'adaptation était fulgurante**. Svelte est tellement simple d'utilisation !

Il me reste encore à voir comment fonctionne le fetching, le SSR, etc... mais je peux déjà affirmer que côté client sur un projet statique, ce framework m'a **conquis**.

J'ai eu quelques soucis mais c'était parce que je débute et il m'est arrivé de partir en **antipatterns**...

> Antipattern ?!

(Les trucs à ne pas faire.)

En antipatterns donc, à cause d'habitudes prises sur d'autres frameworks. En fait, je perds plus de temps sur Svelte **à cause des réflexes pris sur d'autres frameworks**... 

Une fois les notions bien comprises, coder avec ce framework est du pur plaisir : on passe vraiment **moins de temps à définir les choses** qu'à tout simplement **coder le fonctionnement de l'appli**.


## Pour aller plus loin

Je vous invite à visiter ce lien pour en voir plus sur la comparaison Svelte/React, avec plein d'exemples (outil fourni par **Mathieu Schimmerling**) :
- [Component party](https://component-party.dev)

Et vous pouvez aussi consulter mon post à chaud, notamment **ce que d'autres développeurs pensent de Svelte** en commentaires :
- [Post LinkedIn](https://www.linkedin.com/posts/daniel-orchanian_javascript-react-svelte-activity-6972888781989236736-K6Ll?utm_source=share&utm_medium=member_desktop)

À la prochaine !

> Dans six mois ?

(...)

_Crédits photo : [XKCD](https://xkcd.com/927/)_