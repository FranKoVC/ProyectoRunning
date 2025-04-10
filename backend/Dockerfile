# Usa la imagen oficial de Node.js 18 (versión LTS)
FROM node:18.17-alpine3.18

# Crea y define la carpeta de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de dependencias (package.json y package-lock.json)
COPY package*.json ./

# Instala las dependencias (incluyendo las de desarrollo si es necesario)
RUN npm install

# Copia TODO el código fuente al contenedor
COPY . .

# Compila la aplicación (esto generará la carpeta /dist)
RUN npm run build

# Puerto que expone el contenedor (debe coincidir con el que usa Nest.js, ej: 3000)
EXPOSE 3000

# Comando para iniciar la aplicación en producción
CMD ["npm", "run", "start:prod"]