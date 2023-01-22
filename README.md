# Storybook

Ejemplo de integración de storybook con React

### Subir a producción

1. Ejecutar comando: _yarn build_
2. Copiar carpeta _storybooks-static_
3. Desplegar en Netlify o GithubPages (se requiere cambiar el nombre de la carpeta a docs)

### Uso con Chromatic

1. Ir a [chromatic](https://www.chromatic.com/)
2. Acceder a cuenta
3. Enlazar repositorio de proyecto storybook con React
4. Ejecutar comandos de instalación para Chromatic dentro del proyecto
5. Validar comando _chromatic_ dentro de package.json
6. Ejecutar _yarn chromatic_
7. Aceptar revisión de cambios
