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

4. Lancer un serveur local sur le port 3000 :

```
rails s
```

## Utilisation

- Connect-vous à l'API en utilisant l'URL localhost:3000/api/v1

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

### Response

```
{
	"id": 1,
	"pseudo": "EXP",
	"status": "created"
}
```

### Note

Ce projet bénéficie d'une documentation Swagger. Vous pouvez récupérer le contenu du fichier `swagger.yaml` et le copier dans
[l'outil swagger](https://editor.swagger.io/)

## Test

Pour lancer les test de l'API inscription :

```
bundle exec rspec
```

## Auteur

- [Corentin LUMINEAU](https://github.com/corentin-lumineau/)

## License

Ce project bénéficie de la license MIT.
