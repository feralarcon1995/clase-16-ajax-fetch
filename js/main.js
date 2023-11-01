// const nombreInput = document.getElementById("nombre");
// const buscarButton = document.getElementById("buscar");
// const resultadosDiv = document.getElementById("resultados");

// // Agregar evento al presionar la tecla Enter
// nombreInput.addEventListener("keydown", function (event) {
//     if (event.key === "Enter") {
//         buscarPokemon();
//     }
// });

// // Agregar evento al hacer clic en el botón "Buscar"
// buscarButton.addEventListener("click", function () {
//     buscarPokemon();
// });

// function buscarPokemon() {
//     const nombre = nombreInput.value;

//     // Realizamos la solicitud a la API
//     fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
//         .then((response) => response.json())
//         .then((pokemon) => {
//             // Si la solicitud fue exitosa, mostramos los resultados
//             if (pokemon) {
//                 resultadosDiv.innerHTML = `
//           <h2>Información de Pokémon</h2>
//           <ul>
//             <li>Nombre: ${pokemon.name}</li>
//             <li>Tipo: ${pokemon.types[0].type.name}</li>
//             <li>Habilidad: ${pokemon.abilities[0].ability.name}</li>
//             <li>Peso: ${pokemon.weight / 10} kg</li>
//             <li>Altura: ${pokemon.height / 10} m</li>
//           </ul>
//         `;
//             } else {
//                 // Si la solicitud no fue exitosa, mostramos un error
//                 resultadosDiv.innerHTML = `
//           <h2>Error</h2>
//           <p>No se encontró ningún Pokémon con ese nombre.</p>
//         `;
//             }
//         });
// }







// const usersUrl = 'https://jsonplaceholder.typicode.com/users';
// const listaUsuarios = document.querySelector('#usuarios');

// fetch(usersUrl)
//     .then(response => {
//         console.log(response)
//         if(!response.ok) {
//             throw new Error('hubo un problema al obtener los datos');
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log(data)
//         data.forEach((user) => {
//             let article = document.createElement('article');
//             article.innerHTML = `<h2>Name: ${user.name}</h2>
//                                 <p>Username: ${user.username}</p>
//                                 <p>Phone: ${user.phone}</p>
//                                 <p>Email: ${user.email}</p>
//                                 <p>Company: ${user.company.name}</p>
//                                 <a href=${user.website}>Website</a>`;
//             listaUsuarios.append(article);
//         })
//     })
//     .catch(error => console.error("Se produjo el error:", error))


// const starsUrl = 'https://swapi.dev/api/people/';

// const listaWars = document.querySelector('#wars');

// fetch(starsUrl)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Hubo un problema al obtener los datos')
//         }

//         return response.json();
//     })
//     .then(data => {
//         console.log(data)
//         mostrarDatos(data.results);
//     });



// function mostrarDatos(data) {
//     data.forEach(data => {
//         let article = document.createElement('article');
//         article.innerHTML = `<h2>Name:${data.name}</h2>
//         <p>Eye color: ${data.eye_color}</p>
//         <p>Homeworld: ${data.homeworld}</p>`;
//         listaWars.append(article);
//     })

// }



// const pokeApi = 'https://pokeapi.co/api/v2/pokemon';
// const pokeList = document.querySelector('#poke');



// fetch(pokeApi)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Error al obtener los datos')
//         }

//         return response.json()
//     })
//     .then(data => {
//         mostrarPokemones(data.results)
//     })


// function mostrarPokemones(pokemones) {
//     pokemones.forEach(p => {
//         let article = document.createElement('article');

//         fetch(p.url)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Error al obtener los datos')
//                 }

//                 return response.json()
//             })
//             .then(data => {
//                 article.innerHTML = `
//                 <h2>Name: ${data.name}</h2>
//                 <img src=${data.sprites.front_default} alt=""> 
//                 <p>Type: ${data.types[0].type.name}</p>
//                 `;

//                 pokeList.append(article)
//             })
//     })

// }


fetch('js/viajes.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al obtener los datos')
        }

        return response.json()
    })
    .then(data => console.log(data));



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