# Diseño Atómico | WebConf LATAM 2022

Este repositorio contiene el código usado para la presentación de la charla sobre Diseño Atómico en la [WebConf LATAM 2022](https://webconf.tech/)

## Qué necesito tener instalado antes?
Before cloning this repo, I recommend installing the following software:
- [Node](https://nodejs.org/en/download/) >=16.13.2 to para instalar las dependencias

## Instalación por primera vez
Despues de clonar el repositorio, instalar los paquetes npm en la raiz del proyecto.
```sh
git clone https://github.com/NicolasOmar/atomic-conf-poc.git
cd atomic-conf-poc
npm install
```

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
- `env:` Variables de ambiente.
- `public:` Carpeta donde la App iniciará apuntando al componente `<App />` una vez iniciado. Contiene estilos, lógica, logotipo y otros archivos necesarios.
- `src:`
  - `components:` Contenedor de los componentes necesarios siguiendo la [estructura jerarquíca de Diseño Atómico](https://atomicdesign.bradfrost.com/chapter-2/)
    - `atoms / átomos`
    - `molecules / moléculas`
    - `organisms / organismos`
    - `templates / plantillas`
    - `pages / páginas`
  - `constants:` Archivos en formato JSON usados para contener constantes como rutas y clases usadas de [Bulma](https://bulma.io/).

## Quiero saber más
| [Presentación](localhost) | [Demo de Diseño Atómico](localhost) |
| :--- | :--- |
| Presentación de la charla creada en Google slides | Demo utilizada en la charla (utilizando [Netlify](https://netlify.com/)) |

## Licencia
**MIT**
