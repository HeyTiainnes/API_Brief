Cours du 10/11/22 matin.
1/ creation repository
2/ creation dossier local
3/ l’ouvrir dans vscode

4/ git init
5/ creation dossier git ignore
 6/ insérer les node_modules
7/ inserer les dist
 
 07:24 
8 / Se brancher sur le repository distant

git remote add origin [Url repository]
10:19
9 / creation package json
npm init -y
npm init -y après le repo git car ainsi le package json comprend les infos relatives au respository git.
10 / Création tsconfig.json
tsc –init
11 / décommenter et modifier l.52 tsconfig.json :
 
+ supprimer toutes les options en commentaire
15 :00
12 / création dépendances pour faire des API avec express 
13 / installer express :
npm i express
14 /  installer ts, les types pour utiliser toutes les bibliothèques express, ts node pour lancer les fichiers TS a partir de node et nodemon qui relance a chaque modif. 
npm i -D typescript @types/express ts-node nodemon	
15 / créer dossier source et fichier index.ts à l’intérieur
16 / dans index.ts créer app et importer express
17 / On ajoute un middleware afin de pouvoir récupérer le body et pouvoir les parser. Rajoute la prise en charge du body sous forme de json : 
 
L’API ferme toutes les communications avec tous les programmes qu’elle ne connait pas donc erreur de type CORS.
18 / cors et ses types pour éviter les erreurs CORS
Pour autoriser l’accès de notre application react vers l’API on utilise un package (CORS)
npm i cors	
npm i -D @types/cors
importer et utiliser le middleware cors
On lui fournit un paramètre qui précise qui peut accéder a l’API.
On précise les méthodes autorisées : 
 		       
19 / On créé un point d’entrée pour l’API :
 
20 / Création script « start » dans package.json qui lance nodemon avec le point d’entrée
 
    21 / On vérifie
 

29 :00
22 / mise en place des routes (on fait tout le chemin pour remonter jusqu’à la base de données).
On simule la Bdd avec un objet qui sera contenu dans nos services.
22 – 1 / création d’un dossier routes. Et dans celui-ci un fichier routes.ts
(roads et plantRoad.ts pour le brief).
Il va falloir accéder au router de express pour lui rattacher des routes.
Il faut donc importer le router de express, dans le fichier plantRoad.ts. 
 
22 -2 / on le stock dans une const et on relie ça à l’index :


22 -3 / on permet le passage de la req au contrôleur
 
35 :00
23 / Création du contrôleur
Création dossier et fichier (controller / plantController).
Ce sera une class, on l’exporte.
 
40 :00
Méthodes class plantController
