# TV Shows App

## Descripción

Sitio web responsive que ofrece una guía de series de televisión, listando las series de televisión según distintas categorías y al hacer clic en la tarjeta de una serie de TV de una lista, se redirige hacia otra página en la cual se muestra más información sobre la película elegida.

El idioma de la web es inglés, ya que si bien mi idea inicial era que la web estuviera en español, finalmente me decanté por hacerla enteramente en inglés debido a que la API utilizada para obtener la información de las series de TV, no proveía traducciones al español de absolutamente todos los contenidos de texto. La API utilizada es [The Movie Database (TMDB) API](https://developers.themoviedb.org/3/getting-started/introduction), específicamente sus opciones de [end points de TV](https://developers.themoviedb.org/3/tv/get-tv-details).

El diseño UI de la web está inspirado en [este diseño en Behance de la diseñadora Rina Grim](https://www.behance.net/gallery/161696289/Movie-app-Movieto) y en [la propia web de TMDB](https://www.themoviedb.org/).

### Características de la web

Hasta el momento la web tiene cuatro páginas distintas de listas en la cual cada una muestra una lista distinta de series de TV según las categorías: Top Rated, Popular, On TV y Airing Today.

La página de detalle (la que muestra más información sobre una serie de TV específica) incluye una sección "Similar shows" en la cual se listan series de TV similares a la serie principal mostrada en la página. Desde esta lista también se puede acceder a ver más información sobre las películas de la lista haciendo clic en cualquiera de las tarjetas de la lista.

Algunas de las funcionalidades o características que se encuentran en proceso de agregar a la web son:

- Botón "Load more" en las listas.
- Modal para el menú mobile.
- Homepage con buscador (actualmente la home redirige a la página de la lista Top Rated).
- Más información y links relacionados en la página de detalle.

## Stack del proyecto:

- TypeScript
- [Vue.js](https://vuejs.org/) versión 3 [Composition API](https://vuejs.org/guide/extras/composition-api-faq.html)
- [Vue Router](https://router.vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- CSS3/[Sass](https://sass-lang.com/)
- [Vite](https://vitejs.dev/guide/)

## Versión en vivo

https://vue-tv-shows-app-melisandoval.vercel.app/

Aclaración: lamentablemente actualmente hay un problema con el deploy que no permite acceder a cada una de las distintas URL de la web de manera directa (esto sí funciona al ejecutar el proyecto de manera local). Por lo tanto, para ver las distintas secciones de la web de momento hay que ingresar al link principal y desde allí navegar hasta las distintas secciones.

## Cómo ejecutar este proyecto

### Requisitos previos

Antes de poder ejecutar el proyecto, es necesario que tengas instalado Node.js.

### Instalación

1- Clona el repositorio a tu máquina local.

2- Abre una terminal y navega hasta la carpeta raíz del proyecto.

3- Ejecuta `npm install` para instalar las dependencias.

### Configurar la API key

1- Las URLS del archivo `api.ts` utilizan la variable `API_KEY`, cuyo valor proviene de la variable de entorno `VITE_API_KEY`, la cual no fue agregada al repositorio. Para que el proyecto clonado pueda utilizar estas URLs, deberás asignarle a `API_KEY` el valor de tu propia API key (información sobre cómo obtener la API key en este link de la api: https://developers.themoviedb.org/3/getting-started/introduction ).

2- Luego de que tengas tu propia API key crea un archivo .env en el root de tu proyecto clonado y guárdala allí con el formato `VITE_API_KEY=aquí tu key sin comillas`. Más info sobre variables de entorno con Vite en: https://vitejs.dev/guide/env-and-mode.html

### Ejecución

1- Ejecuta `npm run dev` para iniciar el servidor de desarrollo.

2- Abre en tu navegador el link de http://localhost:[puerto] que te indica la terminal para ver la aplicación en funcionamiento.
