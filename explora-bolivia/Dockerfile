# Imagen
FROM node:22-alpine3.20

# Directorio de trabajo en el contenedor
WORKDIR /app

# Instalacion de dependencias
RUN npm install -g nodemon

COPY package*.json ./

RUN npm install

# Copia el codigo del proyecto
COPY . .

# Expone el puerto
EXPOSE 3000

# Ejecutar la aplicacion por defecto en produccion
CMD ["npm", "run", "start:dev"]