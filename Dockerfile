# Establecer la imagen base
FROM node:12-alpine

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de la aplicación en el contenedor
COPY . .

# Instalar las dependencias de la aplicación
RUN npm install

# Compilar la aplicación
RUN npm run build

# Exponer el puerto 8080
EXPOSE 8080

# Iniciar la aplicación al iniciar el contenedor
CMD ["npm", "run", "start"]
