# NodeJSExpressPostgreSQLs

Première API Rest nodejs

# DB PostgreSQL

## Installation:
```bash
brew install postgresql
brew services start postgresql
psql postgres
```

### Créé la base de donnée beerdb et l'utilisateur alois:
```sql
CREATE ROLE alois WITH LOGIN PASSWORD 'root';
ALTER ROLE alois CREATEDB;
CREATE DATABASE beerdb;
GRANT ALL PRIVILEGES ON DATABASE beerdb TO alois;
```

### Connexion à la base beerdb avec l'utilisateur alois:
```slq
psql -d beerdb -U alois
```
### Création de la table beers et insertion d'un jeux de données:
```sql
CREATE TABLE beers (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(30),
  type VARCHAR(30),
  size VARCHAR(30)
);

INSERT INTO beers (name, type, size)
  VALUES ('Kro', 'blonde', '25cl'), ('Grimbergen', 'tripple', '50cl'), ('Guinness', 'brune', '1l'), ('Chouffe', 'tripple', '50cl'), ('1664', 'blonde', '25cl'), ('Desperados', 'aromatisé', '25cl');
```

### Commande pour lancer et stopper postgre:
```sql
brew services start postgresql
brew services stop postgresql
```







# Mise en place de l'api et nodejs

### Installer node & npm:

```bash
brew install node
brew install npm
```

### Installer express & pg-promise:

```bash
npm install express
npm install pg-promise
```





