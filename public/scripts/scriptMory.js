 // Función para obtener todos los personajes de Rick and Morty
 function fetchAllCharacters() {
    const apiURL = 'https://rickandmortyapi.com/api/character';
  
    fetch(apiURL)
      .then(response => response.json())
      .then(data => {
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML = '';
  
        data.results.forEach(character => {
          const characterCard = document.createElement('div');
          characterCard.className = 'character-card';
          characterCard.innerHTML = `
            <h3>${character.name}</h3>
            <img src="${character.image}" alt="${character.name}">
            <p><strong>Estado:</strong> ${character.status}</p>
            <p><strong>Especie:</strong> ${character.species}</p>
            <p><strong>Género:</strong> ${character.gender}</p>
            <p><strong>Origen:</strong> ${character.origin.name}</p>
          `;
          outputDiv.appendChild(characterCard);
        });
      })
      .catch(error => {
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML = `<p style="color: red;">Error al obtener los personajes: ${error.message}</p>`;
      });
  }
  
  // Llamar a la función para obtener todos los personajes al cargar la página
  window.onload = fetchAllCharacters;
  