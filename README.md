# Diseño Atómico | WebConf LATAM 2022

Este repositorio contiene el código usado para la presentación de la charla sobre Diseño Atómico en la [WebConf LATAM 2022](https://webconf.tech/)

## Qué necesito tener instalado antes?
Antes de clonar este repo, te recomiendo instalar el siguiente software:
- [Node](https://nodejs.org/en/download/) v16.13.2 o superior para instalar las dependencias

## Instalación por primera vez
Despues de clonar el repositorio, instalar los paquetes npm en la raiz del proyecto.
```sh
git clone https://github.com/NicolasOmar/atomic-conf-poc.git
cd atomic-conf-poc
npm install
```
En caso que quieras iniciar la aplicación de React, deberás:
- Crear una [cuenta de desarrollador en Unsplash](https://unsplash.com/developers)
- Seguir los pasos para crear una app donde te darán el [AccessKey necesario para usar la API](https://unsplash.com/documentation#authorization)
- Ir al archivo `.env` en la raiz del proyecto y cambiar el valor de `REACT_APP_API_KEY` por la `AccessKey` obtenida

## Como iniciarlo
Para la version en React
```sh
npm start
```
Para la version de Storybook (usada en la demo)
```sh
npm run storybook
```

## Estructura de archivos
Una vez clonado el repo, aparecerán las siguientes carpetas:
- `.storybook:` Dedicado a la configuración de [Storybook](https://storybook.js.org/).
- `.env:` Archivo con las variables de ambiente/entorno.
- `public:` Carpeta donde la App iniciará apuntando al componente `<App />` una vez iniciado. Contiene estilos, lógica, logotipo y otros archivos necesarios.
- `src:`
  - `components:` Contenedor de los componentes necesarios siguiendo la [estructura jerarquíca de Diseño Atómico](https://atomicdesign.bradfrost.com/chapter-2/)
    - `atoms / átomos`
    - `molecules / moléculas`
    - `organisms / organismos`
    - `templates / plantillas`
    - `pages / páginas`
  - `constants:` Archivos en formato JSON usados para contener constantes como rutas y clases de estilo usadas de [Bulma](https://bulma.io/).

## Quiero saber más
| [Presentación](https://docs.google.com/presentation/d/1hT0AUbK7zBjp4yqxOXr9je8JvPR0Flo2d6s15M7SVAc/edit?usp=sharing) | Demos de Diseño Atómico |
| :--- | :--- |
| Presentación de la charla usando Google slides | Demostraciones del concepto en 2 páginas para [componentes](https://atomiconfpage.netlify.app/) y el [sitio funcional](https://atomiconfpage.netlify.app/) |

## Licencia
**MIT**
