// Función para buscar un Pokémon
    function fetchPokemon() {
      const pokemonName = document.getElementById('pokemonName').value.toLowerCase(); // Obtiene el nombre del Pokémon del campo de entrada
      const apiURL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`; // Construye la URL de la API

      fetch(apiURL) // Hace una solicitud GET a la API
        .then(response => {
          if (!response.ok) {
            throw new Error('Pokémon no encontrado'); // Lanza un error si la respuesta no es exitosa
          }
          return response.json(); // Convierte la respuesta a JSON
        })
        .then(data => {
          const outputDiv = document.getElementById('output'); // Obtiene el div donde se mostrará la información
          outputDiv.innerHTML = `
            <h2>${data.name.toUpperCase()}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <p><strong>Altura:</strong> ${data.height}</p>
            <p><strong>Peso:</strong> ${data.weight}</p>
            <p><strong>Tipos:</strong> ${data.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
          `; // Muestra la información del Pokémon
        })
        .catch(error => {
          const outputDiv = document.getElementById('output'); // Maneja errores
          outputDiv.innerHTML = `<p style="color: red;">${error.message}</p>`; // Muestra el mensaje de error
        });
    }

 