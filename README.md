# C2ROS

Mini OS modulaire basé sur HTML/CSS/JS.

Les icônes Font Awesome sont chargées via CDN. Le fichier `index.html` référence directement `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css`.

- Voir [`docs/icon-workflow.md`](docs/icon-workflow.md) pour le workflow complet des icônes.
- La documentation de chaque module se trouve dans `docs/*-readme.md`.
- Les pop-ups de confirmation peuvent être désactivés via `confirmDialogs` dans `js/modules/core/config.js`. Voir [`docs/popup-readme.md`](docs/popup-readme.md) pour la procédure détaillée et les risques.

Le Store propose un bouton unique pour installer ou désinstaller une application. Les icônes restent alignées à droite et conservent leur couleur en mode sombre. Un bouton **Applications** apparaît sur mobile et les applications installées peuvent être réordonnées par glisser-déposer. Le filtre par type (applications, informations, services, formations) permet désormais de trier le catalogue.

- Le Store propose un bouton unique pour installer ou désinstaller une application : l'icône « plus » devient une poubelle rouge.
- Les icônes d'installation sont alignées à droite des tuiles pour plus de clarté.
- En mode sombre, la poubelle reste rouge et la taille des icônes est réduite pour le mobile.
- En affichage mobile, un bouton **Applications** apparaît dans la barre de navigation basse.
- Depuis la version 1.1.0, les applications installées peuvent être réordonnées par glisser-déposer dans la page Profil.
- Un bouton de déconnexion est disponible dans la page Profil.
- La barre latérale intègre un bouton de réduction : l'icône passe d'une croix à un petit carré suivant l'état de la barre.
- La barre latérale utilise un dégradé de gris et une ombre portée pour s'intégrer au thème.

## Aperçu local

Pour afficher le projet en local :

- `python3 -m http.server 8000` (Linux/Mac)
- `python -m http.server 8000` ou `py -m http.server 8000` (Windows)

Veillez à disposer de Python 3.

## Tests

Pour exécuter les tests, lancez `npm test`.
