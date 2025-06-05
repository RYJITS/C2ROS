# UICore (Interface utilisateur)

S'occupe du thème, de la navigation et des notifications. Il adapte l'interface
aux différents écrans et applique les préférences de l'utilisateur. C'est lui
qui met à jour la sidebar et les pages lors des interactions.

Depuis la version actuelle, le Store utilise la méthode `toggleApp(appId)` pour
installer ou désinstaller une application. Un bouton unique affiche l'icône
`plus` en blanc tant que l'application n'est pas installée, puis une icône de
poubelle rouge une fois installée. Les boutons placent désormais l'icône à droite du texte.
L'affichage sombre maintient cette couleur rouge et la taille de ce bouton a
été réduite pour un meilleur rendu sur mobile.

En mode mobile, la barre de navigation basse comprend un bouton **Applications**.
L'icône correspondante est maintenant correctement chargée grâce à l'ajout de
l'icône `list` dans `IconManager`.

La barre latérale bénéficie désormais d'un fond dégradé gris et d'une ombre pour s'intégrer harmonieusement aux thèmes sombre et clair.
