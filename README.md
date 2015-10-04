# coding-game-of-life

CODING DOJO – NODE JS – 05/10/2015
LE JEU DE LA VIE

Énoncé Jeu de la vie

Le jeu de la vie est un automate cellulaire imaginé par John Horton Conway en 1970 qui est probablement, au début du 21e siècle, le plus connu de tous les automates cellulaires.

Automate Cellulaire : modèle où chaque état conduit mécaniquement à l’état suivant à partir de règles pré-établies.

Le jeu se déroule sur une grille à deux dimensions, théoriquement infinie (mais dans notre cas, nous prendrons une grille à dimensions finies), dont les cases — qu’on appelle des « cellules », par analogie avec les cellules vivantes — peuvent prendre deux états distincts : « vivantes » ou « mortes ».
Pour calculer l'état d’une cellule, on devra observer la cellule et ces 8 voisins. Autrement dit on observe une fenêtre de 9 cellules et on veut connaitre le nouvel état de la cellule centrale. Il y a 3 cas possibles:
1.	Si la somme des cellules vivantes est 3, alors la nouvelle cellule sera vivante.
2.	Si la somme des cellules vivantes est 4, alors la nouvelle cellule conserve son ancien état.
3.	Dans tous les autres cas, la nouvelle cellule est morte.
Cas particulier - Cellules se trouvant sur les bords de la grille :
Les cellules qui se trouvent sur les bords se verront ajoutées arbitrairement des voisins morts.
