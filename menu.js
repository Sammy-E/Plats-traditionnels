const menu = [
  {
    id: 1,
    title: "buckwheat pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `Farine de sarrasin, deux œufs et de l'eau .`,
  }, 
  {
    id: 2,
    title: "gâteau de pistache",
    category: "petit déjeuner",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `2 cups graines de courge, des épices, de la viande.`,
  },
  {
    id: 3,
    title: "la sauce gombo",
    category: "déjeuner",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `15 - 20 okra, 2 large peppers, 1 onion, 2 small bitterleaf tips, salt, and meat and water. If possible small sel gemme (kanwa).`,
  },
  {
    id: 4,
    title: "ndolé",
    category: "déjeuner",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `feuilles amères, graines de courge.`,
  },
  {
    id: 5,
    title: "black eyed peas",
    category: "déjeuner",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `Turkey neck bones, water, onion, garlic, salt, black eyed peas, tomato paste, and oil.`,
  },
  {
    id: 6,
    title: "haricots noirs",
    category: "déjeuner",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `Turkey neck bones, water, onion, garlic, salt, haricots noirs, tomato paste, and oil.`,
  },
  {
    id: 7,
    title: "stew",
    category: "déjeuner",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Small tin of tomato paste, onion powder, garlic powder, pepper, basil, mushrooms, diced bell tomatoes, and oil.`,
  },
  {
    id: 8,
    title: "poulet curry",
    category: "déjeuner",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Salt, allspice, cloves, curry, onion purée, garlic purée, ginger, mango, hot african peppers, and basil.`,
  },
  {
    id: 9,
    title: "poisson curry",
    category: "déjeuner",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `curry, salt, pepper, garlic purée, onion purée, and mpu fish spice. Cover with basil, parsley, and bay leaf sauce.`,
  },
  {
    id: 10,
    title: "poisson français",
    category: "déjeuner",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `lemon, salt, pepper, mpu fish spice, and basil.`,
  },
  {
    id: 11,
    title: "poisson naija",
    category: "déjeuner",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `njangsa, bush pepper, basil, salt, pepper, freshly crushed garlic.`,
  },
  {
    id: 12,
    title: "La pépé soupe",
    category: "dîner",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `viande, njangsa, bush pepper, basil, salt, pepper, freshly crushed garlic.`,
  },
];

const sectionCenter = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", function () {
  let displayMenu = menu.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
});
