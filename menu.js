const menu = [
  {
    id: 1,
    title: "buckwheat pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed.`,
  },
  {
    id: 2,
    title: "la sauce gombo",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `15 - 20 okra, 2 large peppers, 1 onion, 2 small bitterleaf tips, salt, and meat and water. If possible small sel gemme (kanwa).`,
  },
  {
    id: 3,
    title: "ndolé",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 3,
    title: "black eyed peas",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `Turkey neck bones, water, onion, garlic, salt, black eyed peas, tomato paste, and oil.`,
  },
  {
    id: 4,
    title: "stew",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Small tin of tomato paste, onion powder, garlic powder, pepper, basil, mushrooms, diced bell tomatoes, and oil.`,
  },
  {
    id: 5,
    title: "la sauce graines de tournesol",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `2 cups graines de tournesol, 1 onion, 4 tomatoes or 1 can of tomato purée, 2 hot peppers, 160 ml of oil, salt, and water.`,
  },
  {
    id: 6,
    title: "poulet curry",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Salt, allspice, cloves, curry, onion purée, garlic purée, ginger, mango, and hot african peppers. Lime, rum, and basil.`,
  },
  {
    id: 7,
    title: "poisson curry",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `curry, salt, pepper, garlic purée, onion purée, and mpu fish spice. Cover with basil, parsley, and bay leaf sauce.`,
  },
  {
    id: 8,
    title: "poisson français",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `lemon, salt, pepper, mpu fish spice, basil, and white wine.`,
  },
  {
    id: 9,
    title: "poisson naija",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `njangsa, bush pepper, basil, salt, pepper, freshly crushed garlic.`,
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
