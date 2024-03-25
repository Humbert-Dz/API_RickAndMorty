let characters = [];

/**
 * !funcion que carga el storage
 * @returns
 */
const cargarStorage = (() => {
  //si no hay nada en el storage con ese nombre se sale
  if (!localStorage.getItem("characters")) return;

  //si si está ese item, lo retorna en formato de array
  characters = JSON.parse(localStorage.getItem("characters"));
})();

//!funcion para guardar en el localStorage los personajes
const guardarStorage = () => {
  //lo transforma en JSON
  const chars = JSON.stringify(characters);

  //lo agrega al localStorage con la llave de characteres
  localStorage.setItem("characters", chars);
};

/**
 * !Función que retorna los caracteres
 * @returns {Array}
 */
const obtenerCharacters = () => {
  return characters;
};

/**
 * ! funcion que guarda un personaje en el array de personajes
 * y actualiza el localStorage
 * @param {*} character
 * @param {Array} characters
 */
const guardarCharacter = (character) => {
  //agrega un nuevo elemento
  characters.push(character);
  guardarStorage();
};

/**
 * !función para eliminar un caracter
 * @param {*} id
 */
const eliminarCharacter = (id) => {
  //filtra los personajes que sean diferentes al id recibido
  characters = characters.filter((character) => character.id != id);
  guardarStorage();
};

export {
  cargarStorage,
  guardarCharacter,
  eliminarCharacter,
  guardarStorage,
  obtenerCharacters,
};
