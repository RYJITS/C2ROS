# UICore (Interface utilisateur)

Gère le thème, la navigation et les notifications. Il adapte l'interface aux différents écrans et applique les préférences de l'utilisateur.

Le Store utilise `toggleApp(appId)` pour installer ou désinstaller une application. L'icône d'installation devient une poubelle alignée à droite et conserve sa couleur en mode sombre. Sur mobile, un bouton **Applications** est présent dans la barre de navigation basse.

La page Profil permet de réordonner visuellement les applications grâce à SortableJS. La sidebar dispose d'un mode compact activé par un bouton dans son en-tête, affichant un chevron selon sa position.

Le menu hamburger a été supprimé au profit de la barre de navigation basse et la sidebar bénéficie d'un fond dégradé avec une légère ombre pour s'intégrer aux deux thèmes.
