let linkContainer = document.createElement("div");
linkContainer.classList.add("link-container");
document.body.appendChild(linkContainer);

let linkImage = document.createElement("a");
linkImage.classList.add("link-image");
document.body.appendChild(linkImage);
linkImage.innerHTML = "C'est l'heure du Duel !";
linkContainer.href = "https://www.konami.com/yugioh/duel_links/en/";
linkContainer.appendChild(linkImage);

let monsterArray = [
  {
    verso: "/images/versoCarteTcg.webp",
    recto: "/images/dragonBlancAuxYeuxBleus1.webp",
  },
  {
    recto: "/images/dragonBlancAuxYeuxBleus2.webp",
    verso: "/images/versoCarteTcg.webp",
  },
  {
    recto: "/images/dragonBlancAuxYeuxBleus3.webp",
    verso: "/images/versoCarteTcg.webp",
  },
  {
    recto: "/images/dragonBlancAuxYeuxBleus4.webp",
    verso: "/images/versoCarteTcg.webp",
  },
  {
    recto: "/images/dragonBlancAuxYeuxBleus5.webp",
    verso: "/images/versoCarteTcg.webp",
  },
  {
    recto: "/images/dragonNoirAuxYeuxRouges1.webp",
    verso: "/images/versoCarteTcg.webp",
  },
  {
    recto: "/images/dragonNoirAuxYeuxRouges2.webp",
    verso: "/images/versoCarteTcg.webp",
  },
  {
    recto: "/images/leDragonAileDeRa.webp",
    verso: "/images/versoCarteTcg.webp",
  },
  {
    recto: "/images/magicienSombre1.webp",
    verso: "/images/versoCarteTcg.webp",
  },
  {
    recto: "/images/magicienSombre2.webp",
    verso: "/images/versoCarteTcg.webp",
  },
  {
    recto: "/images/magicienSombre3.webp",
    verso: "/images/versoCarteTcg.webp",
  },
  {
    recto: "/images/magicienSombre4.webp",
    verso: "/images/versoCarteTcg.webp",
  },
  {
    recto: "/images/magicienSombre5.webp",
    verso: "/images/versoCarteTcg.webp",
  },
  {
    recto: "/images/magicienSombre6.webp",
    verso: "/images/versoCarteTcg.webp",
  },
  {
    recto: "/images/magicienSombre7.webp",
    verso: "/images/versoCarteTcg.webp",
  },
  {
    recto: "/images/obeliskLeTourmenteur.webp",
    verso: "/images/versoCarteTcg.webp",
  },
  {
    recto: "/images/sliferLeDragonCeleste.webp",
    verso: "/images/versoCarteTcg.webp",
  },
  {
    recto: "/images/soldatDuLustreNoir.webp",
    verso: "/images/versoCarteTcg.webp",
  },
  {
    recto: "/images/archdemonDeGilfer.webp",
    verso: "/images/versoCarteTcg.webp",
  },
  {
    recto: "/images/paladinDesTenebres.webp",
    verso: "/images/versoCarteTcg.webp",
  },
];

let cardContainer = document.createElement("div");
cardContainer.classList.add("card-container");
document.body.appendChild(cardContainer);

monsterArray.forEach((monster) => {
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
