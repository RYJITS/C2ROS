# UICore (Interface utilisateur)

S'occupe du thème, de la navigation et des notifications. Il adapte l'interface aux différents écrans et applique les préférences de l'utilisateur. C'est lui qui met à jour la sidebar et les pages lors des interactions.

Depuis la version actuelle, le Store utilise la méthode `toggleApp(appId)` pour installer ou désinstaller une application. L'icône « plus » devient une poubelle rouge, alignée à droite du texte. L'affichage sombre conserve cette couleur et la taille des icônes est réduite pour un meilleur rendu mobile. Une correction assure également que la poubelle reste rouge sur mobile.
La petite croix fermant la liste déroulante des applications sur mobile adopte elle aussi une teinte neutre.
Les icônes de cette liste sont désormais plus petites et utilisent la couleur secondaire pour rester discrètes sur mobile.

La barre de navigation basse a été entièrement revue pour s'approcher d'une véritable application mobile. Elle s'affiche en noir plein écran sous 768 px, avec des icônes blanches. L'icône active passe en rouge `#ff1f1f` et le bouton central **Profil** est mis en valeur par un cercle blanc. Un appui déclenche une petite vibration si le navigateur le permet. Le bouton **Applications** utilise désormais le pictogramme `fa-robot`.

La page Profil permet de réordonner visuellement les applications installées grâce à SortableJS. Un bouton de déconnexion est également présent sur cette page.

La sidebar propose un mode compact activé par un bouton dans son en-tête. L'icône passe d'une croix à un petit carré lorsque la barre est repliée, quelles que soient sa position et son thème. Les icônes de suppression restent rouges comme en mode standard.

La barre latérale bénéficie d'un fond dégradé gris et d'une ombre pour s'intégrer harmonieusement aux thèmes sombre et clair. Le bouton hamburger a été supprimé au profit de cette barre de navigation basse.
Une page **Contact** est disponible pour accéder rapidement aux informations de support.
Depuis la version 1.1.5, un fichier `manifest.json` avec des icônes encodées en base64 et des meta tags permet d'installer C2R OS sur mobile en plein écran.
