// cette fonction permet de créer un élément HTML  monstre à partir d'un objet monstre, dans un container donné
// elle prend en paramètre un objet monstre et un container
function createElement(monster, cardContainer) {
  let cardObject = document.createElement("div");
  cardObject.classList.add("card");
  document.body.appendChild(cardObject);

  let monsterImage = document.createElement("img");
  cardObject.appendChild(monsterImage);

  cardContainer.appendChild(cardObject);

  monsterImage.src = monster.verso;

  cardObject.addEventListener("click", () => {
    cardObject.classList.add("reveal-card");
    monsterImage.src = monster.recto;
  });
}

// exporter la fonction createElement, pour l'utiliser dans d'autres fichiers
export { createElement };
