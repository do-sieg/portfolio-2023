---
title: Survivre aux frameworks JavaScript
description: Peut-on encore parler d'expertise quand les frameworks se multiplient comme des petits pains ?
date: "2022-02-15"
category: javascript
# coverImage:
#     path: /images/blog/covers/fr/cinq-problemes-recrutement-v2.jpg
#     authorName: Eric Prouzet
#     authorUrl: https://unsplash.com/@eprouzet
# translations:
#     en: five-issues-recruiting
published: false
---


git-changer-casse-fichiers



A1 Comparer est impossible, trop spécialisés

A2 Trop de frameworks tue l'expertise
- Trop de frameworks ?
- Trop de redondance dans les frameworks
- Expertise requise par le marché
- Investissement énorme



## Avantage 2 : Isoler la logique propre aux composants

Le composant n'est pas seulement **graphique**. On peut aussi y inclure sa **logique fonctionnelle propre**. 

Le **JavaScript natif** nécessite de **"se greffer" sur le DOM**, en ajoutant des **écouteurs d'événements** (clic sur un bouton, remplissage d'un champ de texte...).

```html5
<div>
    <button onclick="">Bouton</button>
</div>
```

> Je hais ce truc, ça prend des plombes à coder...

Un **framework** va générer le code HTML avec **ses événements embarqués**.

```jsx
<>
    <MonBouton onClick={() => console.log("Coucou !")} />
    <MonInput value={name} onChange={e => setName(e.target.value)} />
</>
```

Plus besoin de scanner le contenu d'un élément HTML ou de repérer une interaction utilisateur : le code HTML généré par le framework est déjà couplé avec des **variables** et des **fonctions**.


## Avantage 3 : Ne plus avoir à gérer manuellement le DOM

JavaScript permet déjà de **modifier du contenu dynamiquement**, de façon native.

On peut tout à fait, par exemple, **récupèrer des données** envoyées par un serveur, comme une liste d'utilisateurs, et **modifier le contenu de la page** pour afficher chaque utilisateur.

> "Cool, pas besoin de framework alors !"  
-- Un développeur junior trop naïf

Cependant, ce procédé est **long** et **fastidieux** à mettre en place en natif :
- **Génération du code** pour afficher un utilisateur.
- **Repérage de l'élément** où on va afficher les utilisateurs.
- **Insertion du code** dans cet élément.

> "Ah ouais..."  
-- Un développeur junior moins naïf

Ajoutons à cela :
- un **vidage** de l'élément contenant la liste quand on va la mettre à jour
- le fait de devoir sans arrêt **jongler entre le code HTML et le script JavaScript** pour coupler correctement les choses
- les **créations d'éléments** et insertions comme des poupées russes
- le **coût** de créer une flopée de **variables temporaires**.

> Sans compter **les joies de la génération de code** sous forme de **chaînes de caractères**...

Et dans une application qui **grandit**, réinventer la roue pour des opérations aussi **courantes** (afficher des listes, gérer des formulaires) est une pure **perte de temps**.

Un framework va **gérer lui-même toutes ces étapes**. Il suffit juste de **coupler un élément et vos données**. Le framework se chargera de mettre à jour le contenu de la page **automatiquement**.

On peut ainsi simplement **se concentrer sur la gestion des données** au lieu de **jouer avec le DOM**.

Le framework permet donc de **travailler plus vite** quand les tâches sont **répétitives**.


## Avantage 4 : Une gestion optimisée du DOM

Un autre point **en faveur des frameworks** : ils gèrent les changements de façon à n'effectuer les mises à jour du DOM que **si c'est nécessaire**.

En JavaScript **natif**, notre liste d'utilisateurs serait vidée **à chaque requête** vers le serveur, avant d'être **remplie intégralement de nouveau**...

... et ce même si les informations affichées **n'ont pas changé**.

> Et c'est un problème ?  
-- Un développeur junior curieux

Plutôt, oui. Les opérations sur le DOM sont **coûteuses**. Les déclencher uniquement quand nécessaire est un gain en **performance**.


## Avantage 5 : Un code plus facile à maintenir

Il est tout à fait possible de créer la partie client d'un site avec de simples fichiers _.html_, _.css_ et _.js_.

Mais plus le projet va grandir, et plus on aura des difficultés à **maintenir un code cohérent**.

Les fichiers se multiplient, et on se retrouve à **jongler entre plusieurs fichiers** pour gérer un simple élément d'interface un tant soit peu interactif...

> Alors je change le texte du bouton dans le fichier **machin.html**, puis je modifie son apparence dans **style.css**, puis je gère le déclenchement d'un événement sur appui dans **un fichier javascript**...

Un **framework** permet de centraliser le tout dans **un seul fichier par composant**. On peut ensuite travailler sur chaque composant séparément, et faire des **mises à jour progressives**.

Son approche **modulaire** permet donc d'avoir **un code bien mieux organisé**.


## Avantage 6 : Plus de facilités pour travailler en équipe

Utiliser JavaScript en natif donne une grande **liberté** aux développeurs, mais ces derniers vont produire **des codes très différents**.

Et si jamais on doit faire intervenir d'autres développeurs, on se retrouve à perdre 20 minutes (dans le meilleur des cas) à expliquer **comment le code est organisé** au lieu de se concentrer sur les fonctionnalités.

Les frameworks imposent une certaine **structure**. Ils ont chacun un ensemble de **règles** à suivre.

Ces règles permettent aux développeurs travaillant sur un même framework de "parler la même langue", d'être **en terrain connu**.

> Par exemple, **_VueJS_** impose le découpage des composants en trois parties : template (HTML), script (JavaScript), et style (CSS).  
> Un développeur sait donc d'instinct où chercher ce qui l'intéresse dans le fichier d'un composant.

> Autre exemple :** _ReactJS_** met à disposition des fonctions communes à tous les composants pour intervenir aux différentes étapes du cycle de vie d'un composant.  
> Le développeur saura donc quand telle ou telle fonction se déclenche.

De plus, l'approche modulaire permet de **travailler à plusieurs** sur différentes parties d'une application, sans empiéter sur le travail des autres.


## Le mot de la fin (pour le moment)

Quelques développeurs un peu taquins diront que les frameworks, c'est de l'esbrouffe.

> "Les frameworks, c'est de l'esbrouffe."  
> -- Un développeur taquin

Oui, on peut tout à fait parvenir au même résultat que les frameworks avec simplement des fichiers _HTML_, _CSS_ et du **JavaScript natif**.

> "Ah ben voilà !"  
> -- Un développeur taquin

On peut aussi **couper l'herbe avec des ciseaux**.

Mais quand la pelouse fait **plusieurs hectares**, est-ce vraiment une solution ?

C'est pareil en frontend. On peut parvenir au même résultat, mais une des solutions va prendre **beaucoup plus de temps**, et sera **beaucoup plus difficile à gérer**.

Le temps perdu à mettre en place ce qu'un framework propose d'emblée est un facteur à prendre en compte.

Nous verrons dans un prochain article que parfois, il vaut mieux **ne pas utiliser de framework**.








Le monde de JavaScript **pullule de frameworks** (ça mérite un article dédié).

Le souci, c'est que souvent, on se retrouve à vouloir utiliser notre framework de prédilection **pour tous nos projets**.

Et ce n'est **pas toujours nécessaire**.



1/2 semaines voir 0 (été), total 13 semaines
React
Node
+ React-Native, NextJS, etc...

Programme, plaquettes : fourni, orienté pratique, "quêtes", avec checkpoints de contrôle

Jours, déroulement-type ?

Télétravail

Rému : annoncé 500€/jour

Entretien avec Jerry, notre Tech Recruiter

Jeudi 16h-17h, Lead Instructor, Thomas

Mini-cours en visio => 20 min sur un sujet



À chaque fois que je vois un sondage du type _React vs Vue vs Angular_, **je rigole doucement**.

Pourquoi ? Parce que déterminer le meilleur framework front-end JavaScript par un sondage n'a aucun sens.

> Et **Svelte**, tu en penses quoi ?

J'en peux plus...


## Des avis biaisés

Quand on lit les réponses à ce type de sondage, on voit plusieurs **tendances** chez les développeurs.

- **On défend ce qu'on utilise**. La plupart des développeurs n'ont **jamais touché** à autre chose que leur framework de prédilection.

- **On ne connaît bien que ce qu'on utilise**. Même si on a un avis sur les autres frameworks, il y a de fortes chances qu'on en connaisse un mieux que les autres.

Dans tous les cas, on voit un gros souci d'**objectivité**.


##  L'impossibiité

Comment avoir un avis éclairé sur _Angular_ quand on n'a touché qu'à _React_ ces trois dernières années ?

Ou que vaut l'avis d'un développeur _Vue_ qui a essayé _React_ **trois semaines en formation** ?

Peut-on juger d'un framework qu'on a **lâché depuis deux ans**, et dont on a raté deux mises à jour majeures ?

Et oui, le vrai problème, c'est que la plupart des développeurs sont **spécialisés** dans un framework.
















Oui, on a **trop de frameworks JavaScript**.  
Merci d'avoir lu l'article.

> Attends, c'est quoi cette arnaque ?

Oh, vous en voulez plus ? D'accord...


## La guerre des frameworks front-end

À chaque fois que je vois un sondage du type _React vs Vue vs Angular_, **je rigole doucement**.

Quand on y lit les réponses, on voit que chacun a tendance à **défendre ce qu'il utilise** (et la plupart n'ont touché qu'à ça...).

Quelques rares développeurs vont mobiliser les quelques **connaissances de surface** qu'ils ont des autres frameworks pour faire une petite comparaison.

Mais dans tous les cas, on comprend que personne n'a vraiment l'expertise nécessaire pour avoir un avis **réellement objectif**.

Tout simplement parce qu'on est **spécialisés**.


## La course à l'expertise

Quand on étudie le marché de l'emploi, les offres tournent autour de **frameworks**.

On a tous vu des stacks techniques dont le cœur était un framework en particulier.



<!-- heart
À chaque fois que je vois un sondage du type _React vs Vue vs Angular_, **je rigole doucement**.

Pourquoi ? Parce que déterminer le meilleur framework front-end JavaScript par un sondage n'a aucun sens.

> Et **Svelte**, tu en penses quoi ?

J'en peux plus...


## Des avis biaisés

Quand on lit les réponses à ce type de sondage, on voit plusieurs **tendances** chez les développeurs.

- **On défend ce qu'on utilise**. La plupart des développeurs n'ont **jamais touché** à autre chose que leur framework de prédilection.

- **On ne connaît bien que ce qu'on utilise**. Même si on a un avis sur les autres frameworks, il y a de fortes chances qu'on en connaisse un mieux que les autres.

Dans tous les cas, on voit un gros souci d'**objectivité**.


##  L'impossibilité de 



Et oui, le vrai problème, c'est que la plupart des développeurs sont **spécialisés** dans un framework.

Et les coupables, ce sont les **stacks techniques**.


## La rigidité des stacks





---



## Une spécialisation qui pousse à 


Peut-on survivre aux Frameworks JavaScript ?


## La course à l'expertise
---

La raison à cela est toute simple : **aucun développeur** (ou presque) ne passe **suffisamment de temps** sur les trois outils à la fois pour donner un avis **objectif**.



- Des avis forcément biaisés
- La course à l'expertise

 -->


## Récapitulatif des avantages d'un framework

Revoyons les problèmes que les frameworks aident à résoudre :

- Maintenabilité : il est plus facile d'apporter des modifications rapides à une application découpée en composants réutilisables et autonomes sans impacter le reste de l'application.

- Aller à l'essentiel : afficher des données et gérer les interactions.

- Vitesse : les bases sont déjà posées, et le code est raccourci. Les composants sont faciles à gérer et modifier.

- Collaboration : le framework et sa structure sont familiers pour d'autres développeurs qui se joindraient au projet.





---


Disadvantages and alternatives
Of course, like any tool, a front-end framework isn’t always the right solution for your application. Here are a few factors to consider before implementing one.

Disadvantages
Abstracted, overhead code: Until you’re thoroughly familiar with it, framework code is a black box. It can be hard to discern how much of the code is helpful to your application and frustrating to fix bugs resulting from code you’re not familiar with.
Learning curve: Learning to use a framework effectively takes time. To be productive, you need to understand the syntax, tooling, and philosophy behind how a framework functions. For projects where speed is essential, learning a brand new technology might not be the best use of your time.
Overkill for smaller projects: If you’re looking to deploy a static site or a site where every component is unique, you might not need the power and overhead of a full-fledged framework. It might still be helpful to implement a minimal framework or even library—we’ll discuss these in the next section.
Setup: Setting up and customizing a framework to your specific use case takes time. If speed is essential, go with what you know, or what your development team is comfortable with.
Strong opinions: An opinionated framework may feel constricting, and its design principles may clash with yours. Make sure you research the specific framework you’re implementing. If you prefer to build from scratch, go with your own solution.
Ecosystem evolution: The JavaScript framework ecosystem is famously volatile. The hottest framework of today may not be popular next year, and with this shift, developers and support may be hard to find.
Alternatives
There are a few alternatives to large JavaScript frameworks like Vue, React, and Angular. As we mentioned earlier, different front-end frameworks attempt to solve different problems. Depending on your needs,  smaller frameworks and libraries may work for you. Additionally, you could abandon separation of concerns and go with a monolith full-stack app with server-side rendered views. Here are a few alternatives to consider:

Templating engines: If all you need are reusable components, consider a templating engine like Handlebars.js, EJS, Underscore.js, or mustache. These engines allow you to store HTML/CSS/JavaScript components and insert JavaScript variables into them. I mentioned struggling with how to scale my project, Hackterms, at the start of this article. In retrospect, I  absolutely should have used a full-fledged framework. However, at the time, I was short on time and patience, so I successfully used Handlebars to create reusable templates.

CSS frameworks and libraries: If you’re looking to create a consistent UI, a tool like Bootstrap, SemanticUI, Bulma, or Tailwind might be a good option. Someone once described using a CSS framework as “having a designer looking over your shoulder, nudging you towards good practices.” You don’t have to inherit the visual design of these frameworks, but for a developer without a strong design background, it can be really helpful to know how many fonts to use, what different button states are, and what intuitive forms look like.

Full-stack monolith apps: Many full-stack frameworks, like Ruby on Rails, Meteor.js, and Django, come with their own templating engines, which render HTML on the server. Server-side rendering and monolith architecture are both concepts that deserve their own blog posts, but you can think of this option as picking one full-stack framework for your entire application and writing the presentation layer and server logic within a single codebase. Most full-stack frameworks do allow you to plug in front-end frameworks of your choice, but default you to using their own templating engines. This is a good solution if you want to double down on using a single framework for your entire app; it can also be a quick way to prototype a full-stack application.

In conclusion
Front-end frameworks are a powerful tool for developing complex user interfaces. They encourage you to build out a maintainable, modular, standalone architecture that makes it easy to build your application and collaborate with other developers. Popular frameworks are backed by supportive communities, a wealth of documentation and tutorials, and offer battle-tested code that tackles common challenges that front ends pose as they scale. Frameworks allow you to tap into the most modern JavaScript features and offer tooling that makes it easy to prototype apps. Finally, they empower you with a shared language to discuss your architecture and challenges.


Front-end frameworks and libraries come in many shapes and sizes—you can use a full-fledged UI framework to build out your entire front end, implement a CSS library to tighten your visual design, or use a templating engine to create reusable components.

However, a front-end framework can be overkill for smaller projects and prototypes, and the steep learning curve, coupled with the quickly evolving JavaScript ecosystem, can make it difficult to implement in a young project. At the end of the day, you should implement a popular framework if you’re excited to learn about well-tested design principles, expect your front end to scale, or need to prototype quickly when performance isn’t a major concern. If you like thoroughly understanding every part of your application, or don’t want to learn a new technology, then it’s probably not the best option.

Hopefully, this overview has given you an idea of the problems a front-end framework solves, and whether it’s the right fit for your next project. What has your experience with front-end frameworks been like? Which is your framework of choice? Looking forward to your comments below!






