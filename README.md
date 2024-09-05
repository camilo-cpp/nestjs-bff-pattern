<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">

# Español

Esta aplicación está construida con NestJS y sigue el patrón BFF (Backend for Frontend). Sirve como una capa intermediaria entre el frontend y dos APIs externas: una API de clientes y una API de portfolios. Utiliza GraphQL para manejar las consultas y mutaciones.

### Correr todo el proyecto

En los siguientes pasos crearemos el ambiente completo para la ejecución local de la aplicación.

**1.** Construimos la imagen de esta aplicación

```
docker build -t nestjs-bff-pattern .
```

**2.** Clonamos ambos repositorios

- **API de Clientes**: [api-repository](https://github.com/camilo-cpp/nestjs-api-hexagonal-arch)

- **API de Portfolios**: [api-repository](https://github.com/camilo-cpp/golang-api-echo)

**3.** Ahora vamos a cada repositorio y construimos las imagenes correspondientes (cada repositorio esta documentado)

**4.** Ejecutamos el docker compose de esta aplicación

```
docker compose up
```

ya una vez hecho esto podremos probar nuestra aplicación desde la ruta:

```
http://localhost:3000/graphql
```

### Tecnologías usadas

- GraphQL
- Docker
- Docker Compose
- NestJS

<br>

# English

This application is built with NestJS and follows the BFF (Backend for Frontend) pattern. It serves as an intermediary layer between the frontend and two external APIs: a clients API and a portfolios API. It uses GraphQL to handle queries and mutations.

### Run the entire project

In the following steps, we will create the complete environment for the local execution of the application.

**1.** Build the image of this application

```
docker build -t nestjs-bff-pattern .
```

**2.** Clone both repositories

- **Clients API**: [api-repository](https://github.com/camilo-cpp/nestjs-api-hexagonal-arch)

- **Portfolios API**: [api-repository](https://github.com/camilo-cpp/golang-api-echo)

**3.** Now go to each repository and build the corresponding images (each repository is documented)

**4.** Run the docker compose of this application

```
docker compose up
```

Once this is done, we can test our application from the route:

```
http://localhost:3000/graphql
```

## Technologies used

- GraphQL
- Docker
- Docker Compose
- NestJS

---

Developed by [Juan Camilo](https://github.com/camilo-cpp)
