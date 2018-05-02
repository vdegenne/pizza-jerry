# pizza-jerry

Un exemple d'un projet qui utilise express, knex et objection avec postgresql. Ce projet est un scénario de test utilisé pour construire le starter `node-pg-rest`. Un support Docker a tenté d'être établie mais en manque d'utilité dans mes projets pour l'instant, il n'a pas été testé et pauffiné. A perfectionner à l'avenir donc si le besoin Docker se fait ressentir.

## Installation

```bash
git clone https://github.com/vdegenne/pizza-jerry.git
cd pizza-jerry
yarn install && yarn install:database
yarn test
yarn start -p 3000
```


## Usage

```bash
curl -s localhost:3000/customers/1 | jq '.favoritePizza.name' | awk '{print substr(bash, 2, length(bash) -2)}'
```
