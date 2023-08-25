**App de buscador de GIFs con React**

Esta aplicación utiliza React, CSS, HTML y useFetch para buscar GIFs en la API de Giphy. El usuario puede ingresar una palabra o frase en el input y la aplicación devolverá 10 GIFs relevantes.

**Instalación**

Para instalar la aplicación, abre una terminal y ejecuta los siguientes comandos:

```
git clone https://github.com/bard/giphy-search-app.git
cd giphy-search-app
npm install
```

**Ejecución**

Para ejecutar la aplicación, ejecuta el siguiente comando:

```
npm start
```

La aplicación se abrirá en tu navegador en la dirección http://localhost:3000.

**Cómo funciona**

La aplicación utiliza el componente `SearchBar` para mostrar el input del usuario. El componente `SearchButton` se utiliza para enviar la consulta de búsqueda a la API de Giphy. El componente `GiphyList` se utiliza para mostrar los resultados de la búsqueda.

**Código**

El código de la aplicación se encuentra en el archivo `App.js`. El código de la API de Giphy se encuentra en el archivo `giphy.js`.

**Ejemplo**

Si ingresas la palabra "gato" en el input, la aplicación devolverá 10 GIFs de gatos.

**Mejoras**

Esta aplicación se puede mejorar de varias maneras, incluyendo:

* Agregar más opciones de personalización, como la capacidad de elegir el tamaño de los GIFs o el número de GIFs que se muestran.
* Agregar una función de guardado para que los usuarios puedan guardar sus GIFs favoritos.
* Agregar una función de compartir para que los usuarios puedan compartir sus GIFs favoritos con otros.

Espero que esta aplicación te sea útil.