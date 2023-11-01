
# Clase 16 AJAX & FETCH

Curso Javascript Comision 47085

Abordamos como trabajar con un archivo .json local y una API, usando el metodo fetch()
## Uso & Ejemplo
**fetch recibe dos parametros, la url y la configuracion, en este ejemplo vemos como traernos los datos de un archivo.json de forma local**
```javascript
fetch('js/viajes.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al obtener los datos')
        }

        return response.json()
    })
    .then(data => console.log(data));
```


**En este ejemplo, usamos la [Pokeapi](https://pokeapi.co/api/v2) para hacer un buscador de pokemones**
```javascript
const nameInput = document.querySelector('#nombre');
const buscador = document.querySelector('#buscar');
const resultados = document.querySelector('#resultados');

function buscarPokemon() {
    const nombre = nameInput.value;

    fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
        .then(response => {
            if (!response.ok) {
                resultados.innerHTML = `
                <p>No se encontro el pokemon</p>`
                throw new Error('Error al obtener los datos')
            }
            return response.json()
        })
        .then(data => {
            resultados.innerHTML = ` 
                <h2>Name: ${data.name}</h2>
                <img src=${data.sprites.front_shiny} alt="foto hermosa de ${data.name}"> 
                <p>Type: ${data.types[0].type.name}</p> `;
        })
        .catch(error => console.log(error))
}

buscador.addEventListener('click', buscarPokemon);

```