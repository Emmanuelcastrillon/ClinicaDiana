#!/bin/bash

# Asegúrate de que npm y git estén en el PATH
export PATH=$PATH:/usr/local/bin:/usr/bin

# Cambia al directorio del proyecto
cd /var/www/html/assets || { echo "No se pudo cambiar al directorio"; exit 1; }

# Agrega el directorio como seguro
git config --global --add safe.directory /var/www/html/assets

# Actualiza el repositorio
git pull origin main || { echo "Error al hacer git pull"; exit 1; }

# Instala dependencias
npm install || { echo "Error al instalar dependencias"; exit 1; }

# Construye la aplicación
npm run build || { echo "Error al construir la aplicación"; exit 1; }

echo "Script ejecutado correctamente"
