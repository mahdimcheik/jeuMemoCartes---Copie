import monsterArray from "./data.js";
import { createElement } from "./functions.js";

let linkContainer = document.createElement("div");
linkContainer.classList.add("link-container");
document.body.appendChild(linkContainer);

let linkImage = document.createElement("a");
linkImage.classList.add("link-image");
document.body.appendChild(linkImage);
linkImage.innerHTML = "C'est l'heure du Duel !";
linkContainer.href = "https://www.konami.com/yugioh/duel_links/en/";
linkContainer.appendChild(linkImage);

let cardContainer = document.createElement("div");
cardContainer.classList.add("card-container");
document.body.appendChild(cardContainer);

monsterArray.forEach((monster) => {
  createElement(monster, cardContainer);
});

const ring = () => {
  const audio = new Audio();
  audio.src = "audio/heureDuDuel.mp3";
  audio.play();
};

linkImage.addEventListener("click", () => {
  console.log("Je clique");
  ring();
});
