# C2ROS

Mini OS modulaire basé sur HTML/CSS/JS.

Les icônes Font Awesome sont chargées via CDN. Le fichier `index.html` référence directement `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css`.

- Voir [`docs/icon-workflow.md`](docs/icon-workflow.md) pour le workflow complet des icônes.
- La documentation de chaque module se trouve dans `docs/*-readme.md`.
- La liste des pop-ups indispensables figure dans [`docs/popup-readme.md`](docs/popup-readme.md).
- Le Store propose un bouton unique pour installer ou désinstaller une application : l'icône « plus » devient une poubelle rouge.
- Les icônes d'installation sont alignées à droite des tuiles et conservent le même design en mode sombre.
- En affichage mobile, un bouton **Applications** apparaît dans la barre de navigation basse.
- Depuis la version 1.1.0, les applications installées peuvent être réordonnées par glisser-déposer dans la page Profil.
- La barre latérale intègre un bouton de réduction et adopte un dégradé de gris avec ombre portée pour mieux s'intégrer au thème sombre ou clair.
- La couleur des icônes de désinstallation sur mobile est corrigée : elles apparaissent en rouge.

## Aperçu local

Pour afficher le projet en local :

- `python3 -m http.server 8000` (Linux/Mac)
- `python -m http.server 8000` ou `py -m http.server 8000` (Windows)

Veillez à disposer de Python 3.

## Tests

Pour exécuter les tests, lancez `npm test`.
