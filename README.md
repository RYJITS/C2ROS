# C2ROS

Mini OS modulaire basé sur HTML/CSS/JS.

Les icônes Font Awesome sont désormais chargées via CDN afin d'éviter les problèmes de police manquante. Le fichier `index.html` référence directement `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css`.

- Voir [`docs/icon-workflow.md`](docs/icon-workflow.md) pour le workflow complet des icônes et l'intégration React/Vite/Tailwind.
- La documentation de chaque module se trouve dans `docs/*-readme.md`.

## Aperçu local

Pour afficher le projet en local, placez-vous dans le dossier puis exécutez :

- `python3 -m http.server 8000` (Linux/Mac)
- `python -m http.server 8000` ou `py -m http.server 8000` (Windows)

Veillez à disposer d'une installation de Python 3.


## Tests

Pour exécuter les tests, lancez la commande `npm test`.
