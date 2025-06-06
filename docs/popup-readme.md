# Pop-ups essentiels

Cette documentation listait les fenêtres de confirmation utilisées pour protéger les actions sensibles.

- **Réinitialisation complète du système** : double confirmation nécessaire pour éviter toute perte de données.
- **Suppression d'un utilisateur** : empêche l'effacement irréversible d'un compte par erreur.
- **Ouverture de la fenêtre d'authentification** : étape obligatoire pour se connecter ou créer un compte.

## Suppression des pop-ups d'action

Certaines installations souhaitent supprimer ces dialogues afin d'accélérer les opérations.

### Désactivation via la configuration

Dans `js/modules/core/config.js`, passez `confirmDialogs` à `false` dans la section `ui`.
Toutes les fonctions de confirmation utilisent désormais `c2rConfirm()`, qui respecte ce paramètre.

### Suppression manuelle

1. Rechercher dans le code les appels à `c2rConfirm()` ou aux modales.
2. Supprimer ces appels ou les remplacer par des notifications non bloquantes.
3. Tester chaque fonction impactée pour éviter toute suppression accidentelle de données.

### Conséquences

En supprimant les confirmations, les actions critiques (réinitialisation, suppression d'utilisateur, fermeture sans sauvegarde) seront exécutées immédiatement. Cela augmente le risque d'erreurs involontaires et de perte de données.

Il est conseillé de conserver une sauvegarde des données ou de restreindre l'accès aux fonctions sensibles si les pop-ups sont désactivés.
