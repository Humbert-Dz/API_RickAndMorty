/**
 *! Funcion que envuelve el personaje en HTML
 * @param {character} character
 * @returns {HTMLDivElement}
 */
export const createCharacterHTML = (character) => {
  //desestructuración del personaje
  const { image, id, name, status, species, type, gender } = character;

  const char = `
    <figure class="main__character__figure">
      <img
        src="${image}"
        alt=""
        class="main__character__img"
      />
      <figcaption class="main__character__name">
        ${name} <span class="main__character__id">${id}</span>
      </figcaption>
    </figure>
    <div class="main__character__description">
      <p class="main__character__status"><span class="bold">Status: ${status} </span> <span class="status" style="background-color: ${
    status === "Alive" ? "green" : "red"
  }"></span></p>
      <p class="main__character__specie"><span class="bold">Especie:</span> ${species}</p>
      <p class="main__character__type"><span class="bold">Tipo:</span> ${type} </p>
      <p class="main__character__gender"><span class="bold">Gender:</span> ${gender}</p>
    </div>`;

  //crea un nuevo elemento DIV HTML
  const main__character = document.createElement("div");
  main__character.classList.add("main__character");
  main__character.innerHTML = char;

  return main__character;
};
