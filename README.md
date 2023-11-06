Ceci est le projet sur l'orientation des gars du concours et il est fait avec le language typescript.

## Comment installer et demarrer le server

D'abord il vous faut [node js](https://nodejs.org/en) pour lancer executer et installer les packages JS, ensuite [xampp](https://www.apachefriends.org/fr/index.html) pour utiliser une base de donnees mysql

Apres avoir installer tout ce qui faut, vous allez installer le projet en copiant la ligne de commande ci-dessous:

```bash
git clone https://github.com/Dar-rius/orientation.git

# Et entrer dans le dossier du projet
cd orientation

# Une fois dans le projet installer les dependances et package du projet
npm i
```

Apres avoir executer les commandes precedente, ouvrer xampp et executer le server spark et mysql.

Ensuite executer les commandes suivantes dans le repetoir du projet "orientation"

```bash
# Migrer la base de donnees
npx prisma migrate dev --name init

## Lancer le server
npm run dev
```

Une fois les commandes executer aller dans le navigateur et tapper ceci [http://localhost:3000](http://localhost:3000)

Et maintenant c'est bon! 
