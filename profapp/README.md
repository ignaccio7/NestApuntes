# NEST

Para crear un proyecto en NEST
```bash
nest new profapp
```

Para ejecutar el proyecto
```bash
pnpm run start:dev
```

Para construir el proyecto para produccion y luego ejecutarlo

```bash
pnpm run build
pnpm start
```

## Estructura del proyecto

Para ver una ayuda detallada de como crear controladores decoradores middlewares etc
```bash
nest generate --help
```

### Para crear un modulo
Si quisiseramos crear 3 modulos de manera independiente y podemos ver que podemos abreviar el comando inicial que tenemos a un principio
```bash
nest generate module <name_module>
nest generate module projects
nest generate mo tasks
nest g mo auth
```

### Para crear un controlador
Si quisiseramos crear 3 controladores de manera independiente y podemos ver que podemos abreviar el comando inicial que tenemos a un principio
```bash
nest generate controller <name_controller>
nest generate controller hello <- Esto creara una carpeta nueva "hello" con el controlador dentro de ella (sin modulo)
nest generate controller projects <- Esto creara un controlado dentro de la carpeta projects que ya creamos anteriormente creando el modulo
nest generate co tasks
nest g co auth --no-spec <- Genera un controlado sin el archivo spec para testing
```

### Para crear un servicio
Si quisiseramos crear 3 servicios de manera independiente y podemos ver que podemos abreviar el comando inicial que tenemos a un principio
```bash
nest generate service <name_service>
nest generate service users
nest g s projects
nest g s auth --no-spec
```

### Para un DTO
Basicamente lo que es un DTO data transfer object es un objeto que contiene datos que se usan para transferir datos entre diferentes partes del sistema.
Especifica los datos que vamos a ir recibiendo.

```bash
lo que tenemos que hacer es crear una carpeta dto dentro de nuestro modulo y dentro de ella crear el archivo <nombre_dto>.dto.ts y ahi adentro creamos interfaces o clases para manejar y luego para tener validaciones haciendo uso del dto usamos el siguiente comando

pnpm i --save class-validator class-transformer
```
### Para crear un pipe personalizado
Recoredmos que el pipe es un middleware que se encarga de transformar datos del parametro antes de que lleguen a nuestro controlador.
```bash
nest g pipe nombre-pipe
nest g pipe tasks/pipes/validateGreeeting
```

### Para crear los cuatro en uno
Si quisiseramos crear todos los tres en uno y podemos ver que podemos abreviar el comando inicial que tenemos a un principio

```bash
nest g resource nombre-recurso --no-spec
```

### Ahora como creamos GUARDS 
Que son guardias que nos ayudan a proteger nuestra aplicacion de que se ejecuten acciones que no sean necesarias

```bash
nest g guard nombre-guard
nest g guard /tasks/guards/auth

```

## Para crear MIDDLEWARES
Que serian funciones que se ejecutaran entre la peticion y la respuesta
Podemos tener varios middlewares y cada uno de ellos puede ser un middleware personalizado
Para poder usar los middlewares editaremos el modulo en el cual estamos utilizado
```bash
nest g middleware nombre-middleware
nest g mi tasks/logger
nest g mi tasks/auth


```

## Para añadir documentacion con SWAGGER
```bash
 pnpm install --save @nestjs/swagger
```
Y seguir la guia de la [pagina](https://docs.nestjs.com/openapi/introduction)
que basicamente modificaremos nuestro archivo **main.ts**

## CORS
En el archivo **main.ts** agregar
```bash
app.enableCors()
```
```bash

```
```bash

```
```bash

```
```bash

```
```bash

```
```bash

```
```bash

```
