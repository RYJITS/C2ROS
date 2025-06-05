# UICore (Interface utilisateur)

S'occupe du thème, de la navigation et des notifications. Il adapte l'interface aux différents écrans et applique les préférences de l'utilisateur. C'est lui qui met à jour la sidebar et les pages lors des interactions.

Depuis la version actuelle, le Store utilise la méthode `toggleApp(appId)` pour installer ou désinstaller une application. L'icône « plus » devient une poubelle rouge, alignée à droite du texte. L'affichage sombre conserve cette couleur et la taille des icônes est réduite pour un meilleur rendu mobile.

gomuxy-codex/2025-06-05
En mode mobile, la barre de navigation basse comprend un bouton **Applications**.
L'icône correspondante est maintenant correctement chargée grâce à l'ajout de
l'icône `list` dans `IconManager`.

La page Profil intègre un tri visuel des applications installées via SortableJS.
L'utilisateur peut glisser-déposer les tuiles pour définir son ordre préféré,
qui est enregistré aussitôt.

La sidebar propose également un mode compact activé par un bouton placé
directement dans son en-tête. Celui-ci affiche une icône en chevron orientée
suivant la position de la barre et n'affiche le logo "C2R" que lorsque la barre
uc0ehg-codex/2025-06-05
est ouverte. Ce bouton se situe en haut à droite ou à gauche suivant la position
de la barre et permet d'afficher uniquement les icônes.
=======
est ouverte.
main

Le bouton hamburger a été retiré au profit de cette barre de navigation basse.

La barre latérale bénéficie désormais d'un fond dégradé gris et d'une ombre pour s'intégrer harmonieusement aux thèmes sombre et clair.
uc0ehg-codex/2025-06-05
=======

La sidebar propose également un mode compact activé par un bouton placé
directement dans son en-tête. Ce bouton se situe en haut à droite ou à gauche
suivant la position de la barre et permet d'afficher uniquement les icônes.
=======
En mode mobile, la barre de navigation basse comprend un bouton **Applications**. L'icône est chargée grâce à l'ajout du pictogramme `list` dans `IconManager`.

La page Profil permet de réordonner visuellement les applications installées grâce à SortableJS.

La sidebar propose un mode compact activé par un bouton dans son en-tête. L'icône passe d'une croix à un petit carré lorsque la barre est repliée, quelles que soient sa position et son thème.

La barre latérale bénéficie d'un fond dégradé gris et d'une ombre pour s'intégrer harmonieusement aux thèmes sombre et clair. Le bouton hamburger a été supprimé au profit de cette barre de navigation basse.
main
main
