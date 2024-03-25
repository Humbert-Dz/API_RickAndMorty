/**
 *! Funcion que envuelve el personaje en HTML
 * @param {character} character
 * @returns {HTMLDivElement}
 */
export const createCharacterHTML = (character) => {
  //desestructuración del personaje
  const { id, name, status, species, type, gender, image } = character;

  const char = `
    <figure class="main__character__figure">
      <img
        src="${image}"
        alt=""
        class="main__character__img"
      />
      <figcaption class="main__character__name">
        ${name} <span class="main__character__id">#${id}</span>
      </figcaption>
    </figure>
    <div class="main__character__description">
      <p class="main__character__status"><span class="bold">Status: ${status} </span> <span class="status" style="background-color: ${
    status === "Alive" ? "green" : "red"
  }"></span></p>
      <p class="main__character__specie"><span class="bold">Especie:</span> ${species}</p>
      <p class="main__character__type"><span class="bold">Tipo:</span> ${type} </p>
      <p class="main__character__gender"><span class="bold">Gender:</span> ${gender}</p>
    </div>
    <button data-id="${id}" class="main__character__delete">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="25px" height="25px">
      <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
    </svg>
    <button>
    `;

  //crea un nuevo elemento DIV HTML
  const main__character = document.createElement("div");
  main__character.classList.add("main__character");
  main__character.innerHTML = char;

  return main__character;
};
