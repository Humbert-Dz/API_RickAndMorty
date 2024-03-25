import { createCharacterHTML } from "./createCharacterHTML";
import {
  obtenerCharacters,
  guardarCharacter,
  eliminarCharacter,
  cargarStorage,
} from "./storage";

/**
 * !funcion que hace una peticion al endpoint
 * @param {integer} id de personaje a buscar
 * @returns {Promise}
 */
const sendHTTP = async () => {
  // obtiene un numero random para representar el id del personaje
  let idCharacter = Math.floor(Math.random() * 826);
  //hace una peticion al endpoint de la API
  //espera hasta que se resuelva la promesa
  const peticion = await fetch(
    `https://rickandmortyapi.com/api/character/${idCharacter}`
  );

  //retorna el cuerpo de la petición, espera hasta que se resuelva
  return await peticion.json();
};

//le asigna el valor convertido de localStorage o un array vacío si no hay nada en local

/**
 * !función que renderiza un personaje
 * @param {HTMLDivElement} element
 */
export const renderCharacter = async (element) => {
  //referencia a boton de agregar nuevo
  const botonNuevo = document.querySelector("#main__button");

  //!función que renderiza los personajes en el elemento div
  const renderizer = () => {
    //limpia el contenedor de los personajes
    element.innerHTML = "";

    //agrega los personajes al contenedor
    obtenerCharacters().map((character) => {
      element.append(createCharacterHTML(character));
    });

    //referencia a los botones de eliminar
    const butonsDelete = document.querySelectorAll(".main__character__delete");
    //recorre los botones
    butonsDelete.forEach((butonDelete) => {
      //agrega un evento click
      butonDelete.addEventListener("click", () => {
        //llama la función eliminar y envía el id del boton
        eliminarCharacter(butonDelete.getAttribute("data-id"));
        renderizer();
      });
    });
  };

  //renderizar desde un inicio los personajes
  renderizer();

  //evento de escucha al boton de nuevo personaje
  botonNuevo.addEventListener("click", async () => {
    //espera la respuesta de la promesa que trae un nuevo personaje
    //cuando se resuelve envía el personaje y lo envia junto con el array de
    //personajes a la funcion guardar que guarda en el localStorage y finalmente renderiza
    await sendHTTP().then(guardarCharacter);
    renderizer();
  });
};
