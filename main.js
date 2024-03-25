import { renderCharacter } from "./src/components/renderCharacter";
import "./style.css";

document.querySelector("#app").innerHTML = `
<h1 class="main__title">Consumiendo API de Rick and Morty</h1>
<button class="main__button" id="main__button">Agregar personaje</button>
<div class="main__characters" id="main__characters">
  
</div>
`;

const mainCharacters = document.querySelector("#main__characters");

renderCharacter(mainCharacters);
