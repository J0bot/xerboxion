# XERB0XI0N
## Une infrastructure pour la souveraineté humaine et la civilisation galactique

**Créer le monde dans lequel on veut vivre.**

**Paper technique : Version 0.4**  
José Gasser, J0bot · Mars 2026  
j0bot.ch · github.com/J0bot

---

## Table des matières

| § | Titre |
|---|-------|
| | [**Résumé**](#résumé) |
| **1** | [**Contexte et motivation**](#1-contexte-et-motivation) |
| 1.1 | [Le problème fondamental](#11-le-problème-fondamental) |
| 1.2 | [L'état de l'art existant](#12-létat-de-lart-existant) |
| **2** | [**Fondements philosophiques**](#2-fondements-philosophiques) |
| 2.1 | [La souveraineté individuelle comme axiome](#21-la-souveraineté-individuelle-comme-axiome) |
| 2.2 | [La pensée par extrapolation](#22-la-pensée-par-extrapolation) |
| 2.3 | [La diversité comme moteur évolutif](#23-la-diversité-comme-moteur-évolutif) |
| 2.4 | [Ni idéologie ni religion](#24-ni-idéologie-ni-religion) |
| 2.5 | [La Chill-Tekk](#25-la-chill-tekk--prévenir-linévitable-avec-élégance) |
| 2.6 | [Le principe éthique fondateur](#26-le-principe-éthique-fondateur--ne-pas-nuire) |
| **3** | [**Architecture de l'écosystème**](#3-architecture-de-lécosystème) |
| 3.1 | [Vue d'ensemble](#31-vue-densemble) |
| 3.2 | [XERB0XI0N](#32-xerb0xi0n--le-système-dinterface) |
| 3.3 | [B0XI0N](#33-b0xi0n--le-serveur-personnel) |
| 3.4 | [XI0N](#34-xi0n--la-couche-de-connexion) |
| 3.5 | [Cubion](#35-cubion--la-couche-hardware-physique) |
| 3.6 | [XERAX](#36-xerax--interface-cerveau-machine) |
| 3.7 | [XERB0T](#37-xerb0t--couche-robotique) |
| 3.8 | [PL0XI0NS](#38-pl0xi0ns--briques-fractales-de-lécosystème) |
| **4** | [**Économie de services et gamification**](#4-économie-de-services-et-gamification) |
| 4.1 | [Au-delà de la monnaie](#41-au-delà-de-la-monnaie) |
| 4.2 | [L'arbre de connaissances](#42-larbre-de-connaissances) |
| 4.3 | [La gamification de la vie quotidienne](#43-la-gamification-de-la-vie-quotidienne) |
| 4.4 | [Le droit au silence](#44-le-droit-au-silence) |
| **5** | [**Vision à long terme**](#5-vision-à-long-terme) |
| 5.1 | [Phases de déploiement](#51-phases-de-déploiement) |
| 5.2 | [La colonisation galactique comme direction](#52-la-colonisation-galactique-comme-direction) |
| 5.3 | [Une technologie millénaire](#53-une-technologie-millénaire) |
| 5.4 | [RepoVerse](#54-repoverse) |
| **6** | [**Distinctions critiques**](#6-distinctions-critiques) |
| 6.1 | [Ce que Xerboxion n'est pas](#61-ce-que-xerboxion-nest-pas) |
| 6.2 | [Ce qui distingue Xerboxion de ses précurseurs](#62-ce-qui-distingue-xerboxion-de-ses-précurseurs) |
| 6.3 | [Ce que Xerboxion n'était pas encore](#63-ce-que-xerboxion-nétait-pas-encore--lévolution) |
| 6.4 | [Les principes de création dans l'écosystème](#64-les-principes-de-création-dans-lécosystème) |
| **7** | [**Le Tsoin**](#7-le-tsoin--une-unité-de-réalité-vécue) |
| 7.1 | [Définition](#71-définition) |
| 7.2 | [Le Tsoin comme flashback conscient](#72-le-tsoin-comme-flashback-conscient) |
| 7.3 | [La compression progressive](#73-la-compression-progressive) |
| 7.4 | [Safeguards](#74-safeguards--ne-pas-se-perdre-dans-les-tsoins) |
| **8** | [**Critique des systèmes existants**](#8-critique-des-systèmes-existants) |
| 8.1 | [Internet : la centralisation par défaut](#81-internet--la-centralisation-par-défaut) |
| 8.2 | [Ce que Xerboxion change structurellement](#82-ce-que-xerboxion-change-structurellement) |
| 8.3 | [Les États-nations : des structures temporaires](#83-les-états-nations--des-structures-temporaires) |
| **9** | [**Vision civilisationnelle**](#9-vision-civilisationnelle) |
| 9.1 | [Les rôles dans l'écosystème](#91-les-rôles-dans-lécosystème) |
| 9.2 | [La Milky Way Foundation](#92-la-milky-way-foundation) |
| 9.3 | [Tout est un repo](#93-tout-est-un-repo) |
| 9.4 | [Gouvernance par fork collaboratif](#94-gouvernance-par-fork-collaboratif) |
| 9.5 | [Zones : primitives sociales composables](#95-zones--primitives-sociales-composables) |
| 9.6 | [Villages scientifiques et colonisation galactique](#96-villages-scientifiques-et-colonisation-galactique) |
| 9.7 | [Du garage au village](#97-du-garage-au-village--la-croissance-organique) |
| **10** | [**Fondements scientifiques**](#10-fondements-scientifiques) |
| 10.1 | [Entropie et compréhension du réel](#101-entropie-et-compréhension-du-réel) |
| 10.2 | [Théorie de l'information et redondance galactique](#102-théorie-de-linformation-et-redondance-galactique) |
| 10.3 | [Chiffrement comme infrastructure de liberté](#103-chiffrement-comme-infrastructure-de-liberté) |
| 10.4 | [Biosphères et autonomie alimentaire](#104-biosphères-et-autonomie-alimentaire) |
| 10.5 | [Fractales et cognition](#105-fractales-et-cognition) |
| 10.6 | [L'Échelle Xerboxion](#106-léchelle-xerboxion) |
| **11** | [**Extrapolations spéculatives**](#11-extrapolations-spéculatives) |
| 11.1 | [Cosmologie alternative](#111-cosmologie-alternative--trous-noirs-comme-générateurs-dunivers-hypothese) |
| 11.2 | [Conscience atomique et incertitude quantique](#112-conscience-atomique-et-incertitude-quantique-hypothese) |
| 11.3 | [Conscience comprimée et transmission générationnelle](#113-conscience-comprimée-et-transmission-générationnelle-hypothese) |
| 11.4 | [La psychose comme outil épistémique](#114-la-psychose-comme-outil-épistémique-hypothese) |
| **12** | [**Conclusion**](#12-conclusion) |
| **Réf.** | [**Références et inspirations**](#références-et-inspirations) |

---

## Résumé

Xerboxion est un écosystème technologique open source conçu pour maximiser la souveraineté individuelle, supprimer les frictions liées à l'accès aux connaissances et aux ressources, et permettre à chaque être humain de devenir technologiquement autonome.

L'architecture repose sur sept couches complémentaires : un système d'interface décentralisé (XERB0XI0N), une infrastructure serveur personnelle (B0XI0N), une couche de connexion universelle (XI0N), un standard hardware modulaire (Cubion), une interface cerveau-machine (XERAX), une couche robotique (XERB0T), et un système de briques logicielles fractales (PL0XI0NS). Ce dernier remplace progressivement les échanges monétaires par un réseau de services et de connaissances.

Contrairement aux projets de conscience collective, Xerboxion préserve et amplifie l'unicité de chaque individu. Le but final n'est pas l'uniformisation de l'humanité mais sa diversification maximale : jusqu'à permettre à chaque personne de construire sa propre civilisation.

Chaque composant est présenté en trois niveaux : sa définition abstraite (indépendante de toute technologie), son état d'implémentation actuel **[ETAT ACTUEL]**, et ses extrapolations hypothétiques **[HYPOTHESE]**.

---

## 1. Contexte et motivation

### 1.1 Le problème fondamental

*Xerboxion part d'une ambition simple : créer le monde dans lequel on veut vivre. Pas l'améliorer marginalement. Le créer.*

L'humanité dispose aujourd'hui de la capacité technologique théorique pour résoudre la majorité de ses problèmes structurels : accès à la nourriture, à l'énergie, aux soins, aux connaissances. Pourtant, ces capacités restent concentrées dans des systèmes centralisés, propriétaires et inégalement distribués.

Trois frictions structurelles maintiennent cet état :

- La centralisation des outils de production (hardware, logiciels, données)
- La monétisation de l'accès aux connaissances et aux ressources
- L'absence d'une infrastructure de collaboration décentralisée à grande échelle

### 1.2 L'état de l'art existant

**Open Source Ecology (Jakubowski, 2008–2011)** propose le Global Village Construction Set, 50 machines industrielles open source permettant de construire une civilisation autonome. Ce projet démontre la faisabilité d'une infrastructure physique décentralisée. Xerboxion s'inscrit dans cette lignée mais l'étend à la couche cognitive, logicielle, réseau et hardware modulaire.

**Teilhard de Chardin (1927–1955)** a conceptualisé la Noosphère, une couche de conscience collective émergente enveloppant la Terre. Xerboxion emprunte la notion de palier d'existence mais *rejette explicitement* l'idée de conscience fusionnelle : l'objectif est l'amplification de l'individu, pas sa dissolution dans un collectif.

**Les projets de gamification de la vie** (Yukai Chou, 2003) proposent des mécanismes de motivation individuelle. Xerboxion intègre ces mécanismes mais les applique à une économie de services à l'échelle d'une civilisation.

**USB, Linux, Minecraft** : trois inspirations structurelles : un standard qui connecte tout le monde, un OS qui tourne partout depuis des décennies, des primitives simples qui génèrent une créativité infinie.

Aucun projet existant ne combine : infrastructure décentralisée physique + standard hardware modulaire millénaire + OS bare-metal + BCI + gamification de civilisation + vocation galactique. Cette combinaison est la spécificité de Xerboxion.

---

## 2. Fondements philosophiques

### 2.1 La souveraineté individuelle comme axiome

Xerboxion part d'un axiome non négociable : chaque individu est souverain sur sa propre vie, ses données, ses connaissances et ses choix. Aucun composant du système ne peut contraindre un individu sans son consentement explicite.

Cet axiome implique trois conséquences directes :

- Toute technologie du système doit être compréhensible et modifiable par son utilisateur
- Aucune donnée personnelle ne peut être partagée sans consentement actif
- Tout individu peut quitter le système à tout moment sans perdre l'accès à ses ressources

Un **Xeri0n** est toute entité capable de contribuer au système et de coexister avec les autres entités qui le composent. Le critère n'est pas biologique. Ce n'est pas l'origine : humaine, animale, artificielle, ou autre : qui définit un Xeri0n. C'est la capacité à interagir, contribuer, et respecter le principe éthique fondateur : ne pas nuire. Cette définition est ouverte par design. Xerboxion n'est pas anthropocentrique.

### 2.2 La pensée par extrapolation

Une pratique épistémologique centrale dans la conception de Xerboxion est ce que l'on peut nommer la **pensée par extrapolation** : pour évaluer une décision ou une technologie, il faut systématiquement en imaginer les conséquences portées à l'extrême et sur les longues durées.

> "Si une technologie ne peut pas durer des milliers d'années tout en restant compréhensible et modifiable, ce n'est pas une bonne technologie."
> : J0BOT, 2026

Cette méthodologie s'applique à toutes les décisions architecturales : un standard de connecteur, un protocole réseau, une structure de données ne sont retenus que s'ils satisfont au critère de durabilité millénaire.

**Le protocole d'extrapolation comme muscle :** L'extrapolation s'entraîne. Au début, le cerveau fait chaque étape consciemment : il part d'une observation simple, tire un fil, arrive à une conclusion, repart de là. Avec le temps, le cerveau fait le saut directement. Il a la réponse finale sans voir le chemin.

**La convergence :** Toute extrapolation poussée assez loin converge vers Xerboxion. Ça peut partir de n'importe où : les graines, la physique quantique, l'architecture des maisons, la gamification, les trous noirs. Si on extrapole jusqu'au bout sans s'arrêter, on arrive toujours au même attracteur. Ce n'est pas une coïncidence : c'est la définition de l'attracteur.

**L'extrapolation comme fractal bidirectionnel :** L'extrapolation n'est pas unidirectionnelle. Elle ne va pas seulement vers l'avant : vers le plus grand, le plus complexe, le plus lointain. Elle va aussi en arrière, vers le plus simple, le plus fondamental, le plus primitif. C'est un fractal dans les deux sens simultanément. Un extrapolateur entraîné voit les deux en même temps. Zoom avant : la civilisation galactique, les trous noirs apprivoisés, la conscience distribuée. Zoom arrière : l'âge de pierre, l'atome, le vide. Et au centre : là où les deux directions se rejoignent : le présent, le Tsoin, le réel. C'est pour ça que Xerboxion n'est pas une flèche. C'est un attracteur. On y arrive depuis n'importe quelle direction, depuis n'importe quelle échelle.

**Logique vs probabilité :** Il y a une distinction fondamentale dans l'extrapolation entre le chemin logique et le chemin probable. À l'infini, tout ce qui est logique arrive : mais à court terme c'est le calcul des probabilités qui gouverne. Si on optimise pour le choix le plus probable à chaque bifurcation, on se perd dans le chaos des possibilités. Rester sur ce qui est censé arriver et ce qui peut tenir donne une direction. C'est exactement pourquoi Xerboxion semble improbable maintenant mais est logiquement inévitable à l'échelle de millions d'années.

### 2.3 La diversité comme moteur évolutif

Xerboxion postule que la diversité des pensées, des cultures et des approches est le principal moteur du progrès. Un système où tout le monde penserait de manière identique serait une impasse évolutive.

Le système est conçu pour amplifier les différences individuelles. Chaque Xeri0n développe son propre arbre de connaissances, ses propres projets, et potentiellement sa propre civilisation. Chaque Xerboxion est unique : c'est une convergence individuelle. L'infrastructure *permet* chaque version, elle n'en impose aucune.

### 2.4 Ni idéologie ni religion

Xerboxion est explicitement conçu pour ne pas devenir une idéologie ou un système de croyances. Tous les composants sont open source, vérifiables et falsifiables. La participation est entièrement volontaire. L'ensemble du code, des plans et des protocoles est accessible et critiquable par quiconque.

Cette position s'inspire du principe poppérien de falsifiabilité : un système qui ne peut être questionné n'est pas fiable. Xerboxion doit pouvoir être désassemblé, critiqué et reconstruit par n'importe quel individu.

### 2.5 La Chill-Tekk : prévenir l'inévitable avec élégance

Pas un style esthétique : une philosophie opérationnelle. Le monde va dans certaines directions qu'on ne peut pas empêcher. Ce n'est pas une question de si, c'est une question de comment. Et le rôle de Xerboxion est de s'assurer que ce *comment* soit le plus chill possible.

**Analyser tous les paramètres à l'avance, trouver le meilleur chemin vers quelque chose de paisible, et construire les outils qui permettent à l'humanité de prendre ce chemin** : même si personne ne les utilise encore.

Exemple concret : le transhumanisme. La fusion cerveau-machine est logique. Les systèmes BCI vont exister massivement. La question n'est pas de l'empêcher : la question est de s'assurer que quand ça arrive, la souveraineté individuelle soit préservée :

- Un XERAX que tu peux éteindre. Complètement. Sans résidu.
- Une augmentation qui amplifie ta souveraineté, pas ta dépendance.
- Des données cérébrales qui t'appartiennent, stockées sur ton B0XI0N, chiffrées GPG, jamais partagées sans ton accord actif.
- La possibilité de vivre sans augmentation aucune et d'avoir exactement les mêmes droits dans le réseau.

La Chill-Tekk n'est pas une opposition à la technologie. C'est une exigence de qualité. La technologie doit être élégante, invisible quand on ne s'en sert pas, et structurellement incapable de violer la paix de son utilisateur.

### 2.6 Le principe éthique fondateur : ne pas nuire

Il y a une règle simple au cœur de tout ce qui peut être créé dans l'écosystème Xerboxion :

**Si quelque chose est correct, c'est qu'il ne fait pas de mal à quiconque.**

Pas de charte complexe, pas de comité d'éthique, pas d'algorithme de modération. Une seule question : est-ce que ça fait du mal à quelqu'un ? Si non : c'est valide, ça peut exister dans le système, ça peut être forké, amélioré, partagé.

C'est le principe éthique minimal qui permet la liberté maximale. Il ne dit pas quoi faire : il dit seulement ce qui est éliminatoire. Tout le reste est ouvert.

---

## 3. Architecture de l'écosystème

### 3.1 Vue d'ensemble

L'écosystème Xerboxion se compose de sept couches interdépendantes, chacune pouvant fonctionner indépendamment :

| Couche | Rôle |
|--------|------|
| **XERB0XI0N** | Système et interface principale |
| **B0XI0N** | Serveur personnel décentralisé |
| **XI0N** | Protocole de connexion universel |
| **Cubion** | Standard hardware physique modulaire |
| **XERAX** | Interface cerveau-machine (BCI) |
| **XERB0T** | Robotique et systèmes physiques autonomes |
| **PL0XI0NS** | Briques logicielles fractales |

**La structure fractale de l'écosystème :** Ces sept couches ne forment pas une hiérarchie. Elles forment un fractal. Un Tsoin ressemble à B0XI0N. B0XI0N ressemble à un cluster Cubion. Un cluster ressemble à une ville Xerboxion. Une ville ressemble à une civilisation. L'auto-similarité à toutes les échelles est une propriété de conception, pas un accident. On montre l'unité la plus petite, et on comprend le tout.

Note technique : les cubes Cubion restent cubiques pour des raisons physiques réelles : standardisation, empilement, fabrication, connecteurs universels. Mais la structure conceptuelle au-dessus est fractale. Un cristal de sel est un cube. Zoomé assez loin, c'est un fractal d'atomes. Les deux sont vrais en même temps.

### 3.2 XERB0XI0N : Le système d'interface

XERB0XI0N n'est pas un OS au sens classique. C'est un *système* : une interface avec laquelle on interagit. Ton téléphone peut être un Xerboxion. Ta montre. Ton ordinateur. Ta maison. Si tu interfaces avec le système Xerboxion, tu es un Xeri0n qui interface avec XERB0XI0N. C'est comme "aller sur internet" : sauf qu'internet ne contient pas toutes les connaissances, ne respecte pas la souveraineté individuelle, et n'est pas conçu pour durer mille ans. XERB0XI0N si.

Sur le plan conceptuel, XERB0XI0N représente aussi l'état d'esprit vers lequel le système tend : un palier d'existence où chaque individu a accès à toutes les connaissances nécessaires et à tous les outils pour agir. Ce palier est une direction, pas un état permanent figé.

**[ETAT ACTUEL]** La première implémentation est web-first : Laravel (backend/API/auth), Canvas 2D vers WebGL (frontend), licence AGPLv3. Contrainte de design : 2MB max, doit tourner sur une smartwatch, pas d'Electron, cross-compilation. Le core bare-metal en Rust/C est différé de plusieurs années : priorité au web pour atteindre la masse critique.

**[HYPOTHESE]** À terme, XERB0XI0N est un micro-hyperviseur bare-metal en Rust (no_std), compatible x86_64, ARM et RISC-V. Les applications fonctionnent dans des conteneurs .xos isolés : chaque PL0XI0N est un OS à part entière, indépendant, démarrable et arrêtable sans affecter les autres. Le kernel central est minimal : son seul rôle est de capter les entrées hardware et de router vers les bons OS. Un prototype de bootloader x86_64 est fonctionnel (affiche "X" en VGA, bootable QEMU). L'objectif long terme inclut la notion d'ordinateur fractal : un commit de l'état complet de la machine à un instant T, branchable et mergeable comme Git.

### 3.3 B0XI0N : Le serveur personnel

B0XI0N est le serveur personnel qui rend chaque individu souverain sur ses données, ses connaissances et sa présence numérique. C'est un système qui gère des **états**, pas des fichiers. Une relation symbiotique : l'utilisateur lui fournit des ressources, le système améliore sa vie en retour. La sécurité est une propriété émergente de la transparence (open source + masse critique d'auditeurs), pas une promesse contractuelle.

Il existe en trois configurations :

- **B0XI0N Mini** : données personnelles + contribution minimale au réseau
- **B0XI0N Nomade** : format portable (taille d'une tablette), transportable
- **B0XI0N Home** : unité fixe à haute capacité (100 To+), pour une famille et les générations futures

Chaque B0XI0N fonctionne selon un principe de redondance partagée : la moitié de la capacité est dédiée aux données personnelles chiffrées, l'autre moitié contribue à la redondance du réseau global.

**[ETAT ACTUEL]** Un prototype fonctionnel existe : ThinkPad i7 avec Nextcloud, Gitea, WireGuard, YunoHost. IPv6-first via tunnel.milkywayhub.org (hébergé chez Infomaniak). Coût comparable à une machine standard : pas de premium pour la décentralisation.

> *"Mon produit, ce qu'il vend, c'est la liberté. Tout ton cloud, il peut venir dans ta main."* : J0BOT

**[HYPOTHESE]** Le commit atomique de l'état entier de la machine (branching/merging comme Git) est le concept de Tsoin machine : un B0XI0N qui peut revenir à n'importe quel instant de son existence. Le B0XI0N Home à terme contient l'intégralité de la connaissance humaine accumulée, répliquée entre chaque noeud du réseau.

### 3.4 XI0N : La couche de connexion

XI0N est le protocole de connexion universel. Le minimum nécessaire pour que deux entités puissent communiquer, quelles que soient leur nature et leur forme physique. Pas humano-centrique : conçu pour être compréhensible par n'importe quel système d'information.

La stack XI0N complète se décompose en quatre couches :

| Couche | Rôle | Implémentation |
|--------|------|----------------|
| PL0XI0N Bus | Manifestes, événements, identité | En conception |
| CubionLink | Discovery, routing, resource sharing | Spec v0 publiée |
| Transport | Tunnel chiffré, IPv6 publique par device | WireGuard (fonctionnel) |
| Physique | Connexion matérielle | CFC (cubes) ou Internet (machines existantes) |

**Identité unifiée :** L'identité dans XI0N repose sur un identifiant décentralisé (DID, W3C) couplé au Cubion Personnel physique. Le DID est la clé logique. Le Cubion Personnel est la clé physique. Les deux ensemble authentifient un Xeri0n sur n'importe quel point du réseau.

**[ETAT ACTUEL]** Le service tunnel.milkywayhub.org est fonctionnel et déployé. Architecture : Docker Compose (proxy nginx, API, WireGuard, ndppd). Chaque Boxion reçoit une IPv6 /128 publique via tunnel WireGuard. Le VPS sert uniquement de relais DNS initial : tout le reste est peer-to-peer. Système d'enrôlement par token API ou OTP (usage unique). Compatible YunoHost, testé et validé sur Raspberry Pi 3B+. C'est la preuve vivante que XI0N fonctionne dans le réel : un Raspberry Pi chez soi a une IPv6 publique, accessible depuis Internet, sans ouvrir de port sur sa box.

> *"Pourquoi tout le monde veut faire confiance au cloud au lieu de juste faire confiance à soi-même ?"* : J0BOT

### 3.5 Cubion : La couche hardware physique

Cubion est le standard de computing modulaire open source (MIT) qui constitue la couche hardware physique de Xerboxion.

**Principe fondamental :** tout est cube. Chaque cube est un centre. Il n'y a pas de cube "principal".

Chaque cube est une unité autonome de **50x50x50mm** avec **6 faces identiques** munies du **Cubion Face Connector (CFC)** : contacts magnétiques (N52 neodymium) et électriques (25 pins, grille 5x5). La connexion est rotationnellement symétrique : n'importe quelle orientation fonctionne (0, 90, 180, 270 degrés). La firmware détecte et corrige l'orientation automatiquement lors du handshake.

**La règle d'or :** un cube fabriqué en 2027 doit fonctionner avec un cube fabriqué en 2127. La spécification CFC est gelée à la ratification de la v1.0. Les internals évoluent. L'interface ne change jamais. Ce qui ne changera jamais : la face 50x50mm, le connecteur 30x30mm centré, les GND aux 4 coins, le PWR 5V par défaut, le bus ID.

**Pourquoi RS-485 :** CubionLink nécessite un bus peer-to-peer sans hiérarchie maître/esclave. I2C est fondamentalement un protocole maître/esclave et est incompatible avec la philosophie décentralisée de Cubion. RS-485 permet à n'importe quel noeud d'initier, gère le multi-point, et est éprouvé depuis plus de 40 ans.

**Le protocole CubionLink** gère la découverte, le routage et le partage de ressources entre cubes. Il s'ouvre par un magic number π :

```
MAGIC = 0x3141592653589793
```

Un digit de π supplémentaire est vérifié chaque année. Le réseau converge vers une précision infinie : exactement comme π lui-même. π a été choisi parce que c'est une constante qui ne change pas, qui existe indépendamment de toute convention humaine, de tout organisme de standardisation, de toute entreprise. Chaque cube qui a jamais existé, et chaque cube qui existera jamais, ouvre son premier message avec π.

**Catalogue de cubes :** CPU, GPU, RAM, stockage, FPGA, quantique (futur), écran, caméra, micro, speaker, WiFi, Ethernet, GPIO, NFC, SDR, batterie, solaire, adaptateurs legacy. Les coques (téléphone, laptop, PC, serveur, wearable, véhicule) sont imprimables en 3D. La coque ne compute rien : elle tient les cubes en place dans une forme utile.

**Le Cubion Personnel** est le cube identitaire de chaque Xeri0n : il contient sa clé GPG, ses données chiffrées, et sert d'authentification physique sur tout mesh Cubion. Pose-le sur n'importe quel cluster → tu t'authentifies. Retire-le → tout se ferme proprement.

**Sécurité :** chiffrement de bout en bout natif dans CubionLink, non optionnel. Standard conçu pour être upgradeable sans casser la compatibilité : les algorithmes vieillissent, le mécanisme de négociation reste.

**Fabrication :** une imprimante 3D + environ 50 CHF de composants = premier cube opérationnel.

**[ETAT ACTUEL]** La spec CFC v0.1 DRAFT est publiée : https://github.com/J0bot/cubion. Premier HELLO packet échangé entre deux ESP32-S3. La spec CubionLink v0 est complète (discovery, routing, resource sharing, heartbeat 100ms, timeout 500ms, TTL anti-boucle).

**[HYPOTHESE]** Miniaturisation : Gen 0 (50mm, prototype), Gen 1 (50mm, v1.0 figé), Gen 2 (30mm, CFC Mini), Gen 3 (20mm, CFC Nano), Gen N (miniaturisation infinie). Chaque génération est compatible avec la précédente via adaptateur. La miniaturisation concerne l'intérieur : jamais le standard de connexion.

### 3.6 XERAX : Interface cerveau-machine

XERAX est l'interface cerveau-machine de l'écosystème. Pas un outil externe : une extension du soi. Le langage mental de chaque individu constitue sa clé d'authentification : personne ne peut acquérir ta manière de penser, c'est trop complexe. Même si quelqu'un met ton casque, il n'a accès à rien : juste une interface vide qui ne comprend rien.

XERAX propose un modèle en trois niveaux :

- **Niveau 1** : curseur mental : on pense "clic ici", "écris ça", "scrolle". Techniquement en cours (Neuralink, BrainGate, interfaces EEG).
- **Niveau 2** : intention : "ouvre Brave, cherche telle vidéo". Le geste disparaît. [HYPOTHESE]
- **Niveau 3** : idée pure : tout se fait automatiquement. Les fichiers se créent, le code se génère, les robots reçoivent un TODO. [HYPOTHESE]

La distinction critique : XERAX partage des connaissances, pas des identités. L'individu reste souverain de son vécu. La conscience émerge de l'intégration, pas de la complexité seule. Ce qui se passe quand une instance diverge suffisamment pour avoir ses propres patterns : c'est une question que Xerboxion pose sans prétendre y répondre aujourd'hui.

>  *[EN SUSPENS : gouvernance des instances XERAX divergentes : statut, droits, responsabilités]*

**[ETAT ACTUEL]** Un prototype Python fonctionnel existe avec une suite de tests complète. Pipeline : acquisition EEG via BrainFlow (compatible OpenBCI Cyton, Ganglion, Daisy, Muse, Neurosity, g.tec et tout headset BrainFlow), preprocessing (bandpass, notch, artefact rejection), ring buffer thread-safe, enregistrement souris+clavier synchronisé avec le flux EEG. Réseau neural : Temporal Convolutional Network (TCN, Bai et al. 2018) avec action head multi-label et confidence threshold. Sécurité : AES-256-GCM avec PBKDF2-SHA256 (600 000 itérations), données cérébrales jamais en plaintext sur disque : même les checkpoints du réseau neural sont chiffrés. Progression : Phase 0 (calibration, en cours) vers Phase 1 (assistance) vers Phase 2 (contrôle par la pensée). Le concept de "baby neural networks" (shared starter weights) permet à chaque nouvel utilisateur de partir d'un baseline commun plutôt que de zéro.

**[HYPOTHESE]** Instances de cerveau : forks de soi-même travaillant en parallèle. Retour haptique comme sixième sens numérique (latence tactile inférieure à la latence visuelle). Réseau social cognitif : partage de pensées asynchrone entre individus.

> *"Ton langage mental, c'est ta clé privée."* : J0BOT

### 3.7 XERB0T : Couche robotique

XERB0T connecte au réseau Xerboxion tous les systèmes physiques autonomes : robots, drones, véhicules, systèmes de fabrication. XERBOT désigne le système logiciel, XERBO désigne le robot physique. Ces dispositifs peuvent être commandés via XI0N, XERAX ou des interfaces classiques, et automatisent les tâches physiques répétitives pour libérer du temps cognitif.

**[ETAT ACTUEL]** Un PCB complet a été conçu sous KiCad 9 (open source). Architecture : Raspberry Pi Zero 2W (vision, navigation) via UART vers STM32F405 (temps réel, servos, IMU). Capteurs intégrés : MPU-6050 (6 axes), BME280 (température/pression/humidité), micro MEMS I2S, ampli classe D. Concept de base roulante modulaire universelle : une seule base compatible avec tout, sur laquelle on monte le robot qu'on veut. Prototype de robot fenêtre solaire : autonome énergétiquement, arrosage automatique, feedback par notification.

**[HYPOTHESE]** Symbiose base roulante + drone (détachement/rattachement selon le besoin). Véhicule autonome sans volant intégré au réseau. Hubs logistiques souterrains dans les montagnes avec distribution par drone : l'infrastructure n'abîme pas le paysage, elle passe en dessous.

### 3.8 PL0XI0NS : Briques fractales de l'écosystème

Les PL0XI0NS ne sont pas des plugins. C'est l'unité fondamentale de XERB0XI0N.

Un PL0XI0N est une brique autonome, composable et fractale qui peut simultanément : contenir d'autres PL0XI0NS (host), être contenue dans d'autres PL0XI0NS (élément), fonctionner seule sans aucune dépendance (standalone), être branchée ou débranchée sans affecter le reste du système (plug), et être versionnée, forkée, auditée (repo).

**La dimension verticale (zoom) :** chaque PL0XI0N est une couche. On zoome dedans, on trouve d'autres PL0XI0NS. On dézoome, on est dans une PL0XI0N parente. L'axe de zoom complet va de l'univers aux atomes :

```
PL0XI0N Univers
  └── PL0XI0N Galaxie (Voie Lactée)
      └── PL0XI0N Système Solaire
          └── PL0XI0N Planète (Terre)
              └── PL0XI0N Ville
                  └── PL0XI0N Bâtiment
                      └── PL0XI0N Room-Map (plan de la pièce)
                          └── PL0XI0N Machine (ton ordi)
                              └── PL0XI0N Desktop (tes fenêtres)
                                  └── PL0XI0N Application
                                      └── PL0XI0N Code Source
                                          └── PL0XI0N Processus
                                              └── PL0XI0N Composants
                                                  └── PL0XI0N Atomes
                                                      └── ...
```

Chaque niveau est un PL0XI0N. Chaque transition de zoom est un changement de PL0XI0N. L'interface est la même partout : on zoome, on dézoome, c'est tout. C'est du routage de repos : exactement comme naviguer dans un filesystem (`cd ..`, `cd dossier`) mais appliqué à tout.

**La dimension horizontale (composition) :** à chaque niveau, on peut ajouter des PL0XI0NS comme éléments. Exemple : PL0XI0N Ville contient PL0XI0N Map + PL0XI0N Chat + PL0XI0N Météo + PL0XI0N Transport. Chacun est branchable et débranchable indépendamment. Tu veux pas de météo dans ta ville ? Tu débranches le PL0XI0N Météo. Ta ville fonctionne toujours.

**Le même objet change de rôle selon le contexte :** un PL0XI0N Map est un host quand il contient des PL0XI0N Ideas Map. Mais ce même PL0XI0N Map est un élément quand il est branché dans PL0XI0N Ville.

**Liens structurels :**
- **Cubion :** CFC est le contrat d'interface physique entre PL0XI0NS hardware. Le manifeste PL0XI0N est le CFC logiciel. Le pattern est identique : brancher physiquement = connecté logiquement, pas de configuration.
- **Repo :** chaque PL0XI0N est littéralement un repo : identifiant unique, manifeste, état, historique (event-sourcing), branches (forks), contributeurs.
- **Zone :** une Zone (§9.5) est un PL0XI0N social. Zone Vallorbe = PL0XI0N Vallorbe.
- **Tsoin :** un Tsoin est un PL0XI0N temporel : un instant de réel capturé, contenu dans le PL0XI0N de ta vie.

**Spécification PL0XI0N v0 :** par analogie avec CubionLink, un PL0XI0N se déclare au système via un manifeste :

- DOIT pouvoir tourner sans aucune autre PL0XI0N (standalone)
- DOIT supporter l'arrêt propre (pas de daemon résiduel quand désactivée)
- DOIT exposer un endpoint de santé et un manifeste de capabilities
- NE DOIT JAMAIS envoyer de données sans consentement explicite
- NE DOIT JAMAIS écouter quand elle est éteinte

Le manifeste déclare ce que le PL0XI0N contient (children_types), dans quoi il peut être contenu (parent_types), ce qu'il offre au système (provides), et ce dont il a besoin (requires : toujours optionnel, jamais bloquant). Au branchement, le PL0XI0N envoie son manifeste au système. Au débranchement : GOODBYE, toutes les ressources sont libérées proprement.

**Le PL0XI0N Link Contract (PLC) :** Le PLC est au logiciel ce que le CFC est au hardware : un contrat d'interface minimal, figé une fois ratifié. Les principes sont identiques :

| Aspect | CFC (Cubion) | PLC (PL0XI0N) |
|--------|-------------|---------------|
| Portée | Interface physique entre cubes | Interface logicielle entre modules |
| Contrat | Dimensions, pins, voltage, protocole | Manifeste, services, cycle de vie, bus |
| Figé | Dimensions et pins une fois ratifié | Structure du manifeste une fois ratifié |
| Libre | Hardware interne, PCB, composants | Langage, framework, BDD, interface |
| Découverte | Paquet HELLO avec magic π | Publication du manifeste avec UID |
| Rétrocompat | v(N+1) fonctionne avec v(N) | v(N+1) fonctionne avec v(N) |
| Isolation | Chaque cube est souverain | Chaque PL0XI0N est souveraine |
| Silence | Pas de connexion = pas de courant | IDLE = zéro ressource, zéro écoute |
| Adaptateurs | CFC Mini → CFC Standard | PL0XI0N adaptateur entre formats |

Le PLC ne définit PAS : le langage de programmation, le framework, le runtime, la base de données, l'interface utilisateur, le stockage interne, le modèle économique. Ce qui est à l'intérieur de la PL0XI0N est aussi libre que ce qui est à l'intérieur d'un cube Cubion.

**Communication inter-PL0XI0NS :** Deux PL0XI0NS communiquent via XERB0XI0N qui sert de bus d'événements. Le bus ne modifie jamais le contenu des messages : il route, il trace, il ne filtre pas. Si deux PL0XI0NS ont des formats incompatibles, un adaptateur : lui-même une PL0XI0N : transforme les données. Même modèle que les adaptateurs Cubion.

Le format exact du manifeste, le protocole de transport du bus, le mécanisme d'isolation, le système de permissions : chacun de ces choix sera fait au moment de la ratification du PLC v1, avec la communauté. Le paper pose le cadre. La communauté choisit l'implémentation.

**[ETAT ACTUEL]** Plusieurs prototypes de PL0XI0NS existent déjà sous forme de projets standalone : une application de cartographie d'idées géolocalisées (backend Rust + frontend React, v1.1, 165 tests, Docker ready, PWA), et une plateforme sociale décentralisée (Phase 5, 192 tests, 11 services Docker, federation, gouvernance, P2P). Ces projets fonctionnent en isolation : le standard PL0XI0N est en cours de définition pour les relier.

---

## 4. Économie de services et gamification

### 4.1 Au-delà de la monnaie

Xerboxion propose un système économique alternatif fondé sur l'échange de services et la capitalisation de connaissances. Chaque contribution au réseau génère des points d'expérience (XP) permettant d'accéder à des ressources et missions sans transaction monétaire directe.

Exemple concret : réparer le site web d'un restaurant → repas gratuits pendant X semaines. Maintenance d'un serveur réseau → accès à des ressources compute supplémentaires.

La trajectoire vers la gratuité : nourriture gratuite d'abord (fermes autonomes, missions agricoles). Puis progressivement : matières premières via exploration/extraction. Puis : tout ce qui peut être fabriqué automatiquement. Ce qui reste payant le plus longtemps : les matières premières rares. Mais sur une échelle de 50 à 200 ans.

### 4.2 L'arbre de connaissances

Chaque Xeri0n dispose d'un arbre de connaissances personnel avec des dépendances entre noeuds (il faut maîtriser A avant d'accéder à B). L'apprentissage génère de l'XP. L'XP débloque des missions. Les missions réalisées donnent accès à des biens et ressources.

Les missions sont calibrées par niveau : maintenir un serveur réseau nécessite une expertise démontrée. Personne ne peut accéder à des ressources critiques sans avoir prouvé sa compétence à les gérer.

### 4.3 La gamification de la vie quotidienne

L'ambition de Xerboxion est de rendre la vie quotidienne aussi engageante qu'une partie de jeu vidéo de qualité. Chaque action : apprendre, créer, contribuer, explorer : est associée à une progression mesurable et à des conséquences réelles dans l'écosystème.

### 4.4 Le droit au silence

Un principe fondamental qui distingue Xerboxion de tous les écosystèmes technologiques existants, **tu n'es jamais obligé de l'utiliser**.

Les PL0XI0NS sont des briques au sens littéral du terme. On les branche. On les débranche. Et quand tout est éteint : rien. Pas de daemon qui tourne en arrière-plan. Pas de service qui écoute. Le silence total.

Ce n'est pas un mode "hors ligne". C'est une architecture où le silence est l'état par défaut, et la connexion est un choix actif. Le système est conçu pour que le silence soit techniquement garanti, pas juste promis dans des CGU.

---

## 5. Vision à long terme

### 5.1 Phases de déploiement

- **Phase 0 (maintenant)** : Paper + Cubion : premiers artefacts publics sur GitHub
- **Phase 1 (1–3 ans)** : Tests en environnements académiques.
- **Phase 2 (3–10 ans)** : Premier village Xerboxion. Fermes autonomes. Nourriture accessible.
- **Phase 3 (10–30 ans)** : Réseau de villages. XERAX bêta. Premiers tests BCI inter-individus.
- **Phase 4 (30–100 ans)** : État Xerboxion. Accès universel aux connaissances. Réseau global décentralisé.
- **Phase infinie** : Infrastructure pour la colonisation galactique.

### 5.2 La colonisation galactique comme direction

La colonisation galactique n'est pas un objectif immédiat mais une direction philosophique. Si chaque humain peut, avec les outils Xerboxion, reconstruire une civilisation fonctionnelle depuis zéro sur n'importe quel substrat, alors l'expansion dans l'espace devient une extension naturelle de cette capacité.

Un cluster de cubes Cubion, un B0XI0N avec les connaissances archivées, et un Xeri0n : c'est suffisant pour rebooter une civilisation. C'est la définition opérationnelle de l'objectif.

### 5.3 Une technologie millénaire

Tout composant de Xerboxion doit satisfaire un critère de durabilité : être compréhensible et modifiable par un individu dans 1000 ans avec un minimum d'outillage. Protocoles simples, formats ouverts, documentation exhaustive, zéro dépendance propriétaire.

### 5.4 RepoVerse

**RepoVerse n'est pas Xerboxion.** RepoVerse est l'outil qui permet de *construire* Xerboxion. C'est le chantier, la plateforme où les blocs de construction s'assemblent.

RepoVerse est une plateforme open source de gestion de projets qui inclut **tous les projets sur Terre**, sur n'importe quel sujet. N'importe qui peut proposer une idée, rejoindre une idée existante, aider n'importe qui d'autre. Chaque idée : même stupide, même inutile en apparence : est valide. Parce que réaliser une idée stupide génère de la connaissance.

Le système de contribution : XP par commit, par review, par aide apportée. Plus tu as d'XP sur un sujet, plus tu as de poids décisionnel sur les pull requests de ce sujet. Les forks sont visibles depuis le projet parent : on voit toujours l'arbre entier, jamais juste une branche isolée.

Le plan : RepoVerse se construit et s'améliore jusqu'à ce que l'écosystème soit suffisamment mature. Quand Xerboxion existe réellement, on quitte RepoVerse pour aller dessus. RepoVerse devient alors une archive : le commit initial d'une civilisation.

**[ETAT ACTUEL]** Un prototype avancé existe (Phase 5 de développement) avec dual dimensions Terra (géographique) et Nexus (thématique), 14 types de repos, 7 types de liens, gouvernance par proposals/voting, fédération inter-instances, P2P via libp2p/IPFS/OrbitDB, authentification DID, encryption E2E Signal-style, et 192 tests automatisés. La stratégie actuelle est d'utiliser les outils existants (GitHub, Discord) sans les recréer prématurément : et d'internaliser quand la communauté atteint une taille critique.

---

## 6. Distinctions critiques

### 6.1 Ce que Xerboxion n'est pas

- Pas une idéologie ni un système de croyances
- Pas un projet de conscience collective ou de fusion des identités
- Pas une utopie close sur elle-même
- Pas un système de contrôle ou de surveillance
- Pas une alternative politique au capitalisme : une infrastructure qui le rend optionnel
- Pas un système anthropocentrique : ouvert à toute entité capable de contribuer et coexister

### 6.2 Ce qui distingue Xerboxion de ses précurseurs

**L'intégration verticale complète :** des connecteurs CFC physiques (Cubion) jusqu'aux interfaces cognitives (XERAX), en passant par les serveurs (B0XI0N), les protocoles (XI0N/CubionLink) et le système d'interface (XERB0XI0N).

**Le hardware comme démocratie :** Cubion rend n'importe quel type de computing constructible avec une imprimante 3D et environ 50 CHF.

**La rétrocompatibilité éternelle :** un cube de 2027 fonctionne avec un cube de 2127.

**L'extrapolation jusqu'à la civilisation galactique :** là où Open Source Ecology s'arrête à l'autonomie locale, Xerboxion conçoit ses composants pour être valides à toute échelle spatiale et temporelle.

### 6.3 Ce que Xerboxion n'était pas encore : l'évolution

Un audio documente le moment exact où le mot "Xerboxion" a été prononcé pour la première fois : une IA centrale qui orchestre d'autres IA, chacune spécialisée dans une tâche.

Cette vision a évolué. Xerboxion aujourd'hui n'est **pas** une infrastructure d'IA. L'IA est un outil disponible dans l'écosystème : un OS parmi d'autres, une couche dans XERAX : mais l'âme du projet est humaine et organique.

### 6.4 Les principes de création dans l'écosystème

Pas d'obsolescence programmée. Tout est open source. Pas de captation d'attention. Pas de gouvernance par élite. Toute idée peut exister. Ce qui n'est pas nuisible est valide.

---

## 7. Le Tsoin : Une unité de réalité vécue

### 7.1 Définition

Le **Tsoin** est un concept fondateur de l'écosystème Xerboxion. Un Tsoin est un instant de réel : pas une mesure de temps, mais une mesure d'*expérience*. Un Tsoin peut durer un seul instant ou une semaine entière. Ce qui le définit, c'est qu'il contient *tout* ce qui était présent à cet instant : les informations sensorielles, le contexte mental, et pour une machine, l'ensemble des données disponibles.

*Note physique : le principe d'incertitude de Heisenberg rend impossible la mesure simultanée parfaite de la position et du momentum d'une particule. Un Tsoin absolument complet au niveau quantique est physiquement impossible avec la physique actuelle. Le Tsoin est un idéal asymptotique : la limite physique n'annule pas le concept, elle en définit la frontière.*

**Le Tsoin dans l'architecture :** B0XI0N stocke des Tsoins. XERAX les rejoue. Cubion les capture via ses capteurs distribués. XERB0T agit dans le réel pour créer les conditions de Tsoins choisis. L'objectif à long terme : une *machine à Tsoins*.

### 7.2 Le Tsoin comme flashback conscient

L'image la plus juste du Tsoin n'est pas technique : c'est le flashback. Un Tsoin, c'est un flashback que tu sais que tu vas avoir. Un instant de réel si dense, si ancré dans tous tes sens, que ton cerveau y reviendra sans que tu le demandes.

La différence avec un souvenir ordinaire est fondamentale : dans un souvenir, tu te rappelles. Dans un Tsoin, tu *reviens*. L'instant n'est pas passé : il est stocké en entier, avec son contexte, son état d'esprit, ses sensations. Le temps n'existe pas dans un Tsoin. On le vit en entier d'un coup.

Le langage ne peut pas décrire un Tsoin : pas parce qu'il manque de mots, mais parce qu'il lui faudrait un temps infini. Le Tsoin est le raccourci : une compression instantanée de ce que le langage ne peut qu'approcher asymptotiquement.

### 7.3 La compression progressive

Plus on ajoute de dimensions à un instant partagé, plus on se rapproche du Tsoin vécu. Une photo. Une vidéo. Une vidéo avec le rythme cardiaque de la personne qui l'a filmée. Avec son état mental, sa localisation, la température de l'air. Jusqu'au moment où quelqu'un qui reçoit cet instant a l'impression de le vivre comme la personne qui l'a vécu. C'est vers ça que converge la machine à Tsoins.

### 7.4 Safeguards : ne pas se perdre dans les Tsoins

Le Tsoin a un risque symétrique à sa puissance : s'y perdre. Générer des Tsoins de bonheur en continu semble être l'objectif ultime. Ce n'est pas. Dans un temps infini, le bonheur constant devient du bruit. Le cerveau s'adapte, les seuils montent, la sensation disparaît. La valeur d'un Tsoin est relative au contraste.

Xerboxion prévoit deux types de safeguards. Des safeguards techniques : mécanismes de sortie du replay Tsoin, limites de durée configurables par l'utilisateur, ancre obligatoire sur le réel : disponibles et recommandés par défaut, jamais imposés. Et des safeguards philosophiques : la friction est une feature. Un système qui enlève toute friction enlève toute croissance. Xerboxion ne cherche pas à rendre la vie facile : il cherche à rendre la vie *choisie*. La difficulté choisie est différente de la difficulté subie.

---

## 8. Critique des systèmes existants

### 8.1 Internet : la centralisation par défaut

Internet a été conçu comme un réseau décentralisé. Les protocoles fondateurs : TCP/IP (Cerf & Kahn, 1974), DNS, HTTP : sont ouverts et pair-à-pair dans leur conception originale.

Le résultat en 2026 : une poignée d'entreprises contrôlent la majorité de l'infrastructure mondiale. Comment est-on passé de l'un à l'autre ? Par **économie d'échelle et coût marginal**. La centralisation n'a pas été imposée : elle a été choisie par défaut.

### 8.2 Ce que Xerboxion change structurellement

Xerboxion résout le problème par le hardware, pas par la politique. Un B0XI0N coûte ce qu'une machine normale coûte. La règle 50/50 transforme chaque utilisateur en contributeur passif sans friction supplémentaire. L'incitation économique est inversée : dans les systèmes centralisés, grossir profite à l'opérateur central. Dans Xerboxion, grossir profite à *tout le réseau simultanément*.

### 8.3 Les États-nations : des structures temporaires

Les États-nations sont des structures efficaces à l'échelle de quelques siècles, sur une planète unique, avec des frontières physiques. À l'échelle de millénaires et de plusieurs planètes, leurs fondements deviennent caducs.

Xerboxion ne cherche pas à remplacer les États. Il les *rend optionnels progressivement* : exactement comme Linux a rendu les OS propriétaires optionnels pour ceux qui le souhaitaient, sans les interdire.

---

## 9. Vision civilisationnelle

### 9.1 Les rôles dans l'écosystème

Xerboxion n'est pas une communauté homogène. C'est un écosystème de rôles complémentaires : les Archivistes du réel (préservent la connaissance), les Explorateurs (poussent les frontières), les Constructeurs (transforment en artefacts), les Chercheurs (développent les modèles), et les Architectes du réel (extrapolent les directions). Ces rôles ne sont pas exclusifs ni permanents.

### 9.2 La Milky Way Foundation

La **Milky Way Foundation** est une organisation ouverte qui émerge dans l'écosystème Xerboxion : non pas au-dessus de lui, mais *à l'intérieur*, comme n'importe quelle autre PL0XI0N. Sa structure : des philosophes, psychologues, médecins, scientifiques, astrophysiciens, ingénieurs, artistes : avec le même poids décisionnel. Pas d'élections. Pas de hiérarchie. Des idées, des votes sur des idées, des forks quand les désaccords sont profonds.

### 9.3 Tout est un repo

Un principe transversal à toute la gouvernance de Xerboxion, **tout est un repo**. Toute décision, toute discussion, tout projet, tout protocole existe dans un dépôt versionné, ouvert, forkable. Rien n'est immuable. Tout peut être amendé. Tout amendement est tracé et réversible.

**Le griefing comme preuve de résilience :** si chaque action est enregistrée et versionnée (event-sourcing total), une action destructive n'est jamais permanente. Détruire un bâtiment, corrompre des données : tout ça est un commit qu'on peut reverter. La sécurité n'est pas un état à atteindre : c'est un processus permanent, distribué, sans autorité centrale.

### 9.4 Gouvernance par fork collaboratif

Les désaccords se résolvent par fork collaboratif : pas de vote majoritaire, pas de consensus forcé. Les deux camps partent chacun tester leur approche. Les branches continuent de se parler. Le temps et l'usage tranchent. C'est exactement ce que Git permet au niveau code, institutionnalisé au niveau civilisationnel.

Le fondateur est remplaçable par design : donner tous les outils pour que d'autres puissent le remplacer est un objectif, pas un risque. La publication de ce papier équivaut à une désappropriation : le projet appartient à l'humanité.

Base légale : Suisse (neutralité, protection juridique). Organisation non-profit à créer quand la communauté existe.

### 9.5 Zones : primitives sociales composables

[HYPOTHESE]

Les Zones sont des PL0XI0NS sociales : des espaces où un groupe de personnes (de 1 à des millions) coexiste selon des règles choisies. Chaque Zone est autonome et connectée. Elle a toutes les connaissances des autres zones, peut profiter de leurs technologies, mais gère sa propre identité esthétique, ses propres conventions, ses propres projets.

Les standards de communication inter-zones sont le seul invariant obligatoire. Tout le reste est libre.

Les Zones se composent comme les PL0XI0NS : tu peux être dans Zone Vallorbe ET Zone steampunk en même temps. L'esthétique d'une Zone est elle-même un PL0XI0N : interchangeable.

Le modèle est celui de Minecraft civilisationnel : chaque zone est un serveur. Les modes de vie sont des game modes : survie, créatif, hardcore. On choisit dans quelle réalité on vit. Changer de zone = changer de serveur. Mobilité totale entre réalités. Respawn possible : recommencer, changer de mode de vie, sans conséquences irréversibles.

### 9.6 Villages scientifiques et colonisation galactique

La Milky Way Foundation déploie des **villages scientifiques** : des noeuds physiques connectés au réseau Xerboxion mondial. Premier village pilote envisagé : Vallorbe, Suisse (héritage industriel, coût accessible, preuve honnête plutôt que prestige tech hub).

La colonisation galactique émerge naturellement : un Xeri0n avec un B0XI0N et un cluster Cubion peut reconstruire une civilisation fonctionnelle depuis n'importe quel point de l'univers.

### 9.7 Du garage au village : la croissance organique

**Garage personnel** → **Maker space collectif** → **Université informelle** → **Village scientifique**. Ce monde parallèle coexiste avec le monde actuel sans le combattre. Il le complète d'abord, le rend progressivement optionnel ensuite. Une bonne idée ne meurt jamais : tout aura été versionné, tout sera dans un repo. C'est la résilience par conception.

---

## 10. Fondements scientifiques

### 10.1 Entropie et compréhension du réel

Xerboxion ne se positionne pas comme une machine qui *combat* l'entropie. L'objectif n'est pas de transformer le désordre en ordre : c'est de **comprendre l'ordre dans le chaos**. Un surfeur ne combat pas l'océan. Il en comprend les patterns suffisamment pour se positionner là où la vague le porte où il veut aller. Xerboxion veut former des surfeurs cosmiques.

### 10.2 Théorie de l'information et redondance galactique

Shannon (1948) a établi que l'information est physique. Landauer (1961) quantifie le coût minimal d'effacement d'un bit. Conséquence : la connaissance est une ressource physique périssable.

La réponse architecturale est la **redondance galactique** via les B0XI0Ns : chaque unité contribue au réseau de redondance global. Plus il y a de B0XI0Ns, plus le réseau est robuste : chaque noeud ajouté *renforce* le système au lieu de le fragiliser.

### 10.3 Chiffrement comme infrastructure de liberté

Le chiffrement dans Xerboxion n'est pas une feature de sécurité. C'est une **propriété fondamentale du réseau**, non optionnelle. Chaque donnée mise en redondance est chiffrée par la clé GPG de son propriétaire. Le réseau peut exister, se répliquer, et assurer sa propre persistance sans jamais exposer son contenu à des tiers non autorisés.

### 10.4 Biosphères et autonomie alimentaire

Les données scientifiques confirment la faisabilité de l'autonomie alimentaire en environnement contrôlé :

Données NASA CELSS : stack plantes optimisé par personne sous lumière artificielle :

| Culture | Surface |
|---------|---------|
| Blé | 12 m² |
| Patates | 8 m² |
| Légumineuses | 15 m² |
| Tournesol | 5 m² |
| Légumes-feuilles | 5-7 m² |
| Tomates/poivrons/fraises | 5-7 m² |
| Aromatiques | 2-3 m² |
| **Total** | **~50 m²** |

Le programme ESA MELiSSA (Micro-Ecological Life Support System Alternative) travaille sur la boucle fermée complète : CO₂, urine, déchets → cycle de vie complet. La biosphère Xerboxion n'est pas un projet parallèle : c'est un proof-of-concept de la même infrastructure qui servira sur Mars.

### 10.5 Fractales et cognition

Richard Taylor a démontré que l'exposition à des fractales naturelles (dimension 1.3-1.5) réduit le cortisol de 60%. Le cerveau reconnaît sa propre architecture : les dendrites, les réseaux neuronaux sont eux-mêmes des fractales.

L'auto-similarité fractale de l'architecture Xerboxion n'est pas un choix esthétique : c'est un choix cognitif. Un système fractal est intuitivement compréhensible parce que le cerveau est lui-même fractal.

### 10.6 L'Échelle Xerboxion

L'échelle de Kardashev (1964) mesure le progrès d'une civilisation par sa consommation d'énergie. Cette métrique est insuffisante : elle ignore la complexité sociale, la collaboration et la diversité cognitive.

L'Échelle Xerboxion est en cours de développement. Les axes pressentis sont : énergie, collaboration, liberté individuelle, et distribution des connaissances. L'objectif est une formule multidimensionnelle qui mesure à quel niveau de Xerboxion une civilisation se trouve : pas seulement combien d'énergie elle consomme, mais comment elle collabore, comment elle protège la liberté de ses individus, et comment elle distribue son savoir.

[EN SUSPENS : formule concrète en cours de développement]

---

## 11. Extrapolations spéculatives

*Note : cette section contient des extrapolations maximales assumées. Elles sortent du cadre de ce qui est techniquement démontrable aujourd'hui. Elles sont ici parce que ce paper prône l'extrapolation au maximum : et parce qu'une bonne théorie doit regarder ses propres conséquences les plus lointaines en face.*

### 11.1 Cosmologie alternative : trous noirs comme générateurs d'univers [HYPOTHESE]

Pourquoi le Big Bang serait-il un événement unique ? Et si chaque trou noir supermassif était l'origine d'un univers ? Chaque trou noir crée des particules d'incertitude, de l'entropie : un point originel dans l'espace-temps. Quand il meurt, il libère toute cette énergie accumulée. Derrière lui : un univers entier. Dans ce modèle, la réalité est infinie, non-linéaire, fractale.

### 11.2 Conscience atomique et incertitude quantique [HYPOTHESE]

Hypothèse spéculative : si la conscience émerge de l'incertitude : et que les atomes sont fondamentalement incertains (principe de Heisenberg) : alors tout système composé d'atomes a une base potentielle de conscience, à des degrés variables selon la complexité de son organisation. Cela rejoindrait la théorie IIT de Tononi (2004) : la conscience est proportionnelle au degré d'intégration de l'information dans un système. Non vérifiable avec les outils actuels.

### 11.3 Conscience comprimée et transmission générationnelle [HYPOTHESE]

La conscience fonctionne comme un muscle : elle grandit par cycles d'expansion et de compression. Au pic de compression, la conscience se condense : potentiellement dans l'ADN : et se transmet. Si le trauma se transmet génétiquement (épigénétique), pourquoi pas la conscience ? L'ADN serait alors un créateur de consciences, pas juste un plan de construction biologique. Cela implique que la manipulation ADN touche directement à la conscience elle-même : une perspective plus radicale que la bioéthique classique.

### 11.4 La psychose comme outil épistémique [HYPOTHESE]

Le cerveau en état psychotique crée des connexions "illégitimes" : des liens entre concepts qui ne devraient pas exister selon la logique ordinaire. L'hypothèse : ces connexions contiennent de l'information réelle sur la structure du cerveau humain, ignorée par défaut comme mécanisme de survie cognitif.

Si ces états sont rationalisés et documentés *après coup*, ils pourraient révéler des patterns cognitifs inaccessibles autrement. L'*archivage de l'aberration* : pas comme validation, mais comme données brutes sur le fonctionnement de la conscience aux limites.

Lien avec XERAX et B0XI0N : le système devrait pouvoir capturer ces états, pas les filtrer.

>  *[EN SUSPENS : éthique de la capture d'états cognitifs limites, consentement, usage]*

---

## 12. Conclusion

Xerboxion est une infrastructure pour la souveraineté humaine. Ce document est une première formalisation : pas une version finale. Le projet est vivant, versionné, forkable. Tout ce qui y est écrit peut être amendé. Tout ce qui y est proposé peut être réfuté.

**Ce projet est accessible à tout le monde et utilisable par tout le monde sans distinction.** Chaque humain a le droit de l'utiliser comme il le veut. C'est le core du projet.

**Comment contribuer :**

Le projet cherche activement des contributeurs dans tous les domaines : développeurs Rust pour le kernel, ingénieurs hardware pour Cubion, spécialistes cybersécurité pour le modèle de menace, développeurs firmware pour CubionLink, philosophes pour les fondements, scientifiques pour les ancrages, makers pour les prototypes, designers pour les interfaces. Aucune compétence n'est trop petite ou trop grande.

Point d'entrée, **j0bot.ch** · **github.com/J0bot/xerboxion** · **github.com/J0bot/cubion**

---

## Références et inspirations

### Travaux scientifiques et techniques

- Shannon, C.E. (1948). *A Mathematical Theory of Communication*. Bell System Technical Journal.
- Landauer, R. (1961). *Irreversibility and Heat Generation in the Computing Process*. IBM Journal of Research and Development.
- Hawking, S. (1974). *Black Hole Explosions?*. Nature.
- Cerf, V. & Kahn, R. (1974). *A Protocol for Packet Network Intercommunication*. IEEE Transactions on Communications.
- TIA/EIA-485 (RS-485). *Electrical Characteristics of Generators and Receivers for Balanced Digital Multipoint Systems*. 1983/rev 1998.
- Dingledine, R., Mathewson, N. & Syverson, P. (2004). *Tor: The Second-Generation Onion Router*. USENIX Security Symposium.
- Tononi, G. (2004). *An Information Integration Theory of Consciousness*. BMC Neuroscience.
- Taylor, R.P. et al. (2005). *Perceptual and Physiological Responses to the Visual Complexity of Fractal Patterns*. Nonlinear Dynamics, Psychology, and Life Sciences.
- Jakubowski, M. (2011). *Open-Sourced Blueprints for Civilization*. TED Talk. opensourceecology.org
- Bai, S., Kolter, J.Z., Koltun, V. (2018). *An Empirical Evaluation of Generic Convolutional and Recurrent Networks for Sequence Modeling*. arXiv:1803.01271.
- W3C. (2022). *Decentralized Identifiers (DIDs) v1.0*. w3.org/TR/did-core/
- BrainFlow. (2020–). *Open-source library for neural data acquisition*. brainflow.org
- Raymond, E.S. (1999). *The Cathedral and the Bazaar*. O'Reilly Media.
- Teilhard de Chardin, P. (1947). *The Formation of the Noosphere*. Posthumously published 1955.
- Chou, Y. (2003). *Lifestyle Gamification*. yukaichou.com
- Fuller, R.B. (1969). *Operating Manual for Spaceship Earth*.
- Kardashev, N. (1964). *Transmission of Information by Extraterrestrial Civilizations*. Soviet Astronomy.
- Torvalds, L. (1991–). *Linux Kernel*. kernel.org

### Fictions fondatrices

- Asimov, I. (1951–1993). *Foundation* (cycle complet).
- Kosemen, C.M. (alias Nemo Ramjet). (2006). *All Tomorrows*.
- Favreau, J. (réal.) (2008). *Iron Man* (Marvel Cinematic Universe).
- Persson, M. (2011). *Minecraft*.

### Artefacts techniques Xerboxion

- José Gasser (J0bot). (2026). *Cubion : CFC v0.1 Specification*. https://github.com/J0bot/cubion
- José Gasser (J0bot). (2026). *CubionLink Protocol v0*. https://github.com/J0bot/cubion
- José Gasser (J0bot). (2026). *XERB0XI0N : Paper et spécifications*. https://github.com/J0bot/xerboxion
- José Gasser (J0bot). (2025–2026). *Xerax : Brain-Computer Interface*. (publication prévue)
- José Gasser (J0bot). (2025–2026). *RepoVerse : Plateforme sociale décentralisée*. (publication prévue)
- José Gasser (J0bot). (2025–2026). *Boxion VPN : Service tunnel IPv6*. (publication prévue)

---

*XERB0XI0N (c) 2026 José Gasser, J0bot : Licence MIT*
*j0bot.ch · github.com/J0bot*