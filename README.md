# C2ROS

Mini OS modulaire basé sur HTML/CSS/JS.

Les icônes Font Awesome sont désormais chargées via CDN afin d'éviter les problèmes de police manquante. Le fichier `index.html` référence directement `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css`.

- Voir [`docs/icon-workflow.md`](docs/icon-workflow.md) pour le workflow complet des icônes et l'intégration React/Vite/Tailwind.
- La documentation de chaque module se trouve dans `docs/*-readme.md`.
- Le Store présente un bouton unique pour installer ou désinstaller une application : l'icône « plus » devient une poubelle rouge lorsqu'elle est installée.
- Les boutons d'installation et de désinstallation affichent désormais l'icône à droite du texte pour une meilleure lisibilité.
- Sur les tuiles du Store, l'icône d'installation ou de suppression est alignée à droite pour une interface plus claire.
- En mode sombre, la poubelle conserve sa couleur rouge et la taille des icônes d'installation a été réduite pour un meilleur rendu mobile.
- En affichage mobile, un bouton "Applications" est disponible dans la barre de navigation basse.
- La barre latérale dispose d'un bouton intégré pour passer en mode compact. L'icône en chevron s'inverse automatiquement selon la position de la barre.

## Aperçu local

Pour afficher le projet en local, placez-vous dans le dossier puis exécutez :

- `python3 -m http.server 8000` (Linux/Mac)
- `python -m http.server 8000` ou `py -m http.server 8000` (Windows)

Veillez à disposer d'une installation de Python 3.


## Tests

Pour exécuter les tests, lancez la commande `npm test`.
