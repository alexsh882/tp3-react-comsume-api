# Trabajo Práctico N°4 – React

## Personajes de Rick and Morty

#### Stack Utilizado
- React JS
- Bootstrap Css

#### Actividad
1. Consumir una API (a elección) o utilizando alguna de las siguientes:

En mi caso utilice la API de [Rick and Morty](https://rickandmortyapi.com/api/character), donde obtuve los personajes de dicha serie y realice la actividad solicitada.

### La aplicación que realiza lo siguiente:
- Lista los elementos obtenidos de la API.
- Elimina un elemento de la lista (de manera local, es decir en memoria).

Detalles a tener en cuenta:
- La aplicación cuenta con una sola página.
- Tiene un botón que al presionarlo realiza la petición
- Posteriormente carga la lista
- El sistema tiene dos componentes, el componente `ButtonFetch` y el componente `Characters`


### Se implementaron los Hooks:

- **useContext**: CharactersContext
- **useState**
- **useEffect**

### Se implementó un custom Hook
-  **useFetch**


### ¿ Como pruebo el proyecto ?

1. Clonar el proyecto desde GitHub utilizando el siguiente comando en tu terminal:

   ```bash
   git clone https://github.com/alexsh882/tp3-react-comsume-api.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd tp3-react-comsume-api
   ```

3. Instala las dependencias del proyecto:

   ```bash
    pnpm i
   ```

4. Ejecuta la app en modo de desarrollo

   ```bash
   pnpm run dev
   ```

Abrir el [link](http://localhost:5173/) para ver el proyecto