/**
 * !funcion que carga el storage
 * @returns
 */
const cargarStorage = () => {
  //si no hay nada en el storage con ese nombre se sale
  if (!localStorage.getItem("characters")) return;

  //si si está ese item, lo retorna en formato de array
  return JSON.parse(localStorage.getItem("characters"));
};

/**
 * ! funcion que guarda un personaje en el array de personajes
 * y actualiza el localStorage
 * @param {*} character
 * @param {*} characters
 */
const guardarCharacter = (character, characters) => {
  //agrega un nuevo elemento
  characters.push(character);
  //lo transforma en JSON
  const chars = JSON.stringify(characters);
  //lo agrega al localStorage con la llave de characteres
  localStorage.setItem("characters", chars);
};

export { cargarStorage, guardarCharacter };
