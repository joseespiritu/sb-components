# Storybook

Ejemplo de integración de storybook con React

### Inicializar un proyecto con storybook en react

1. Crear proyecto de React
2. Limpiar proyecto de React, solo dejar el archivo src/main.tsx

- Los siguientes pasos pueden variar dependiendo de versión y la documentación [Storybook](https://storybook.js.org/docs/react/get-started/install)

3. Ejecutar el comando dentro del proyecto: _npx storybook init_

- Una vez creados los archivos de configuración de storybook, continuar con lo siguiente:

4. Cambiar el comando dev por el nuevo que añadio storybook dentro del package.json
5. Cambiar el comando build por el nuevo que añadio storybook dentro del package.json
6. Colocar una exportación dentro del main.tsx

```
Ejemplo de importación en main.tsx
export { Button } from "./stories/Button";
```

7. Ejecutar el comando dentro del proyecto: _yarn dev_ o _yarn storybook_

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

## Paquete -> jlme-my-story-components

Este paquete me sirve para practicar React Components + Storybook + NPM Publish

```
yarn add jlme-my-story-components
```

### Demo
[Storybook Components](https://firststorybookjlme.netlify.app/)