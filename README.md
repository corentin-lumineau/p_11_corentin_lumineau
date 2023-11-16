# README

Bienvenue sur l'API inscription. Cette API permet de créer des utilisateurs en rentrant uniquement son pseudo.
Si le pseudo renseigné est déjà utilisé, notre API se chargera pour vous de vous en créer un unique en son genre !

## Configuration requise

- Ruby 3.0.5
- Ruby on Rails 7.0.8
- PostgrSQL 1.1

## Installation

1. Clonez le dépôt GitHub :

```
git clone git@github.com:corentin-lumineau/api_inscription.git
```

2. Installez les gemmes Ruby requises :

```
bundle install
```

3. Migration de la base de données :

```
rails db:migrate
```

## Utilisation

### Endpoints

```
POST api/v1/users
```

### Body

```
{
    user: {
        pseudo: "EXP"
    }
}
```

La documentation de cette API a été généré sur l'outil Swagger. Pour afficher la documentation, veuillez récupérer le contenu du fichier `swagger.yaml` et le copier dans
[l'outil swagger](https://editor.swagger.io/)

## Test

Pour lancer les test de l'API inscription :

```
bundle exec rspec
```
