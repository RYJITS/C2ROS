# 📝 C2R OS - Journal des modifications

## [1.1.6] - 2025-06-11 "PWAfix"

### 🗑️ Nettoyage
- Suppression des icônes binaires du manifeste mobile pour alléger le dépôt.
- Le manifeste reste présent pour permettre un affichage plein écran sur mobile.

## [1.1.5] - 2025-06-11 "PWA"

### 📱 Support mobile
- Ajout d'un fichier `manifest.json` et des meta tags pour installer l'OS sur mobile.
- Une fois installé, la barre du navigateur se masque pour un affichage plein écran.

## [1.1.5] - 2025-06-11 "UI Icons"

### ✨ Harmonisation des icônes
- Les applications utilisent désormais les pictogrammes Font Awesome au lieu des emojis.
- Mise à jour du gestionnaire d'icônes avec de nouveaux glyphes (table, bars, code, chart).

## [1.1.4] - 2025-06-10 "TrainingUI"

### 📚 Formation
- La formation ChatGPT est désormais découpée en dix pages avec navigation intuitive.

## [1.1.3] - 2025-06-09 "Tests"

### ✅ Configuration Jest
- Ajout du fichier `jest.config.cjs` pour centraliser la configuration des tests.
- Mise à jour de `package.json` et de la documentation pour expliquer l'installation des dépendances avant l'exécution des tests.

## [1.1.2] - 2025-06-08 "WelcomeTiles"

### ✨ Page d'accueil
- Ajout de tuiles explicatives présentant le fonctionnement du site.

## [1.1.1] - 2025-06-07 "ChatGPT"

### 📚 Formation
- Ajout de l'application **Formation ChatGPT** avec exemples et quiz intégrés.

## [1.1.2] - 2025-06-07 "Contact"

### 📭 Support utilisateur
- Nouvelle page **Contact** accessible depuis la barre latérale et la navigation mobile, regroupant l'adresse e-mail `support@c2ros.local` et le numéro de téléphone.

## [1.1.0] - 2025-06-06 "DragDrop"

### 🚀 Nouvelles fonctionnalités
- Réorganisation des applications depuis la page Profil via glisser-déposer (SortableJS), compatible mobile et desktop.
- Ajout d'un bouton de déconnexion dans la page Profil.

## [1.0.2] - 2025-06-05 "UX"

### ✨ Améliorations de l'interface
- Alignement des icônes "installer" et "poubelle" à droite des tuiles du Store pour plus de cohérence.

## [1.0.1] - 2025-06-05 "Docs"

### 📄 Documentation
- Ajout des fichiers `docs/*-readme.md` décrivant les modules.

## [1.0.0] - 2025-05-27 "Genesis"

### 🆕 Nouvelles fonctionnalités réelles implémentées

#### 🔐 Système d'authentification fonctionnel
- ✅ Modal de connexion/inscription avec validation
- ✅ Système de comptes par défaut (`admin@c2ros.com` / `admin123`)
- ✅ Gestion des sessions utilisateur avec localStorage
- ✅ Bouton connexion/déconnexion qui change d'état automatiquement
- ✅ Validation des mots de passe (minimum 6 caractères)
- ✅ Pré-remplissage email après inscription
