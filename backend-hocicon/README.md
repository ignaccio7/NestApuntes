# Backend de la Aplicación - Gestión de Noticias

Este es el backend de la aplicación que gestiona noticias. Utiliza NestJS y TypeORM para interactuar con una base de datos PostgreSQL.

## Requisitos Previos

Asegúrate de tener instalado Node.js y npm en tu máquina. También necesitarás una instancia de PostgreSQL ejecutándose y configurada con las credenciales adecuadas.

## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone git@gitlab.com:agetic1472403/backend.git
   cd backend

## Instalación

Para instalar las dependencias, ejecuta el siguiente comando en tu terminal:

```bash
npm install

## Configuración de la Base de Datos

1. Para ejecutar la configuración de PostgreSQL y que cree la base de datos en nuestro gestor
debemos ejecutar los siguientes scripts.

    ```bash
    npm run migration:generate src/database/migrations/init  <-- con esto generamos las MIGRACIONES
    npm run typeorm:run-migrations <-- con esto generamos las tablas en la base de datos
    ```

Este paso configurará la base de datos y aplicará las migraciones necesarias para crear la tabla de noticias.

## Ejecución

Inicia la aplicación:

```bash
npm run start:dev

## Ejecución

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## Endpoints

- **GET /noticias**: Obtiene todas las noticias.
url : http://localhost:3000/notice
- **GET /noticias?query**: Filtrara las noticias segun el autor.
url : http://localhost:3000/notice?query=autor 1
- **GET /noticias/:id**: Obtiene una noticia por ID.
url : http://localhost:3000/notice/3
- **POST /noticias**: Crea una nueva noticia.
url : http://localhost:3000/notice/
payload : {
  "titulo": "noticia 444",
  "imagen": "imagen 4",
  "lugar": "lugar 4",
  "autor": "jose",
  "contenido": "contenido 4"
}
- **PUT /noticias/:id**: Actualiza una noticia existente.
url : http://localhost:3000/notice/7
payload : {
  "titulo": "noticia 777",
  "imagen": "imagen 4",
  "lugar": "lugar 4",
  "autor": "jose",
  "contenido": "contenido 4"
}
- **DELETE /noticias/:id**: Elimina una noticia por ID.
url : http://localhost:3000/notice/7

## Uso del CRUD

Puedes utilizar herramientas como Postman o cURL para interactuar con los endpoints del CRUD. Asegúrate de incluir los datos necesarios en el cuerpo de las solicitudes POST y PUT.

## Contribuciones

Siéntete libre de contribuir a este proyecto. Abre problemas (issues) o envía solicitudes de extracción (pull requests) con mejoras o nuevas características.

## Licencia

Este proyecto está bajo la licencia MIT.


