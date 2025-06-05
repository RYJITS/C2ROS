# UICore (Interface utilisateur)

Gère le thème, la navigation et les notifications. Il adapte l'interface aux différents écrans et applique les préférences de l'utilisateur.

Le Store utilise `toggleApp(appId)` pour installer ou désinstaller une application. L'icône d'installation devient une poubelle alignée à droite et conserve sa couleur en mode sombre. Sur mobile, un bouton **Applications** est présent dans la barre de navigation basse.

En mode mobile, la barre de navigation basse comprend un bouton **Applications**. L'icône est chargée grâce à l'ajout du pictogramme `list` dans `IconManager`.

La page Profil permet de réordonner visuellement les applications installées grâce à SortableJS. Un bouton de déconnexion est également présent sur cette page.

La sidebar propose un mode compact activé par un bouton dans son en-tête. L'icône passe d'une croix à un petit carré lorsque la barre est repliée, quelles que soient sa position et son thème. Les icônes de suppression restent rouges comme en mode standard.

La barre latérale bénéficie d'un fond dégradé gris et d'une ombre pour s'intégrer harmonieusement aux thèmes sombre et clair. Le bouton hamburger a été supprimé au profit de cette barre de navigation basse.
