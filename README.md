# C2ROS

Mini OS modulaire basé sur HTML/CSS/JS.

Les icônes Font Awesome sont chargées via CDN. Le fichier `index.html` référence directement `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css`.

- Voir [`docs/icon-workflow.md`](docs/icon-workflow.md) pour le workflow complet des icônes.
- La documentation de chaque module se trouve dans `docs/*-readme.md`.
- Les pop-ups de confirmation peuvent être désactivés via `confirmDialogs` dans `js/modules/core/config.js` ou depuis le profil utilisateur grâce à une tuile dédiée. Voir [`docs/popup-readme.md`](docs/popup-readme.md) pour la procédure détaillée et les risques.
- La liste des pop-ups indispensables figure dans [`docs/popup-readme.md`](docs/popup-readme.md).
- Les informations de support sont détaillées dans [`docs/contact-readme.md`](docs/contact-readme.md).

Le Store propose un bouton unique pour installer ou désinstaller une application. Les icônes restent alignées à droite et conservent leur couleur en mode sombre. Un bouton **Applications** apparaît sur mobile et les applications installées peuvent être réordonnées par glisser-déposer. Le filtre par type (applications, informations, services, formations) permet désormais de trier le catalogue.

- Le Store propose un bouton unique pour installer ou désinstaller une application : l'icône « plus » devient une poubelle rouge.
- Les icônes d'installation sont alignées à droite des tuiles pour plus de clarté.
- En mode sombre, la poubelle reste rouge et la taille des icônes est réduite pour le mobile.
- Correction: en mode mobile, la poubelle conserve bien sa couleur rouge.
- En affichage mobile, un bouton **Applications** apparaît dans la barre de navigation basse.
- La croix du menu mobile adopte la même couleur neutre que les autres boutons.
- Les icônes de la liste d'applications mobile sont encore plus petites et adoptent la couleur secondaire pour un rendu plus compact.
- Depuis la version 1.1.0, les applications installées peuvent être réordonnées par glisser-déposer dans la page Profil.
- Un bouton de déconnexion est disponible dans la page Profil.
- La barre latérale intègre un bouton de réduction : l'icône passe d'une croix à un petit carré suivant l'état de la barre.
- La barre latérale utilise un dégradé de gris et une ombre portée pour s'intégrer au thème.
- Nouvelle application **Formation ChatGPT** : apprenez à exploiter ChatGPT grâce à des exemples interactifs et un quiz.
 - Une page **Contact** permet désormais d'envoyer un message via un formulaire, en plus des coordonnées mail et téléphone.
- Grâce à un manifeste web utilisant des icônes encodées en base64 et aux meta tags dédiés, le site peut être installé sur mobile en plein écran.
- Une tuile dédiée propose l'installation en mode PWA lorsqu'on consulte la page d'accueil sur mobile.
- La barre de navigation basse adopte désormais un style proche d'une application mobile : fond noir, icônes blanches et rouge actif. Le bouton central Profil est mis en avant par un cercle blanc.
- L'application **Formation ChatGPT** propose désormais un cours en dix pages avec navigation pour une prise en main intuitive.
- La page d'accueil présente des tuiles explicatives pour découvrir le fonctionnement du site.
- Les applications internes utilisent désormais uniquement les icônes Font Awesome pour un style unifié.

## Aperçu local

Pour afficher le projet en local :

- `python3 -m http.server 8000` (Linux/Mac)
- `python -m http.server 8000` ou `py -m http.server 8000` (Windows)

Veillez à disposer de Python 3.

## Tests

Avant de lancer les tests, installez les dépendances :

```bash
npm install
```

Vous pouvez ensuite exécuter les tests avec :

```bash
npm test
```
