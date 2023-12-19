// 20nov2023mon1600
//  cn 21nov2023tue1100
const card = [
  {
    // id: 1,
    title: "Snack1",
    type: "Snacks",
    price: 1000,
    img: "./imgs/img-1.jpg",
    info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque illum dolor, quaerat eius dignissimos voluptatem aperiam.`,
  },
  {
    // id: 2,
    title: "Main1",
    type: "Main",
    price: 1000,
    img: "./imgs/img-2.jpg",
    info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque illum dolor, quaerat eius dignissimos voluptatem aperiam.`,
  },
  {
    // id: 3,
    title: "Snack2",
    type: "Snacks",
    price: 1000,
    img: "./imgs/img-3.jpg",
    info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque illum dolor, quaerat eius dignissimos voluptatem aperiam.`,
  },
  {
    // id: 4,
    title: "Main2",
    type: "Main",
    price: 1000,
    img: "./imgs/img-4.jpg",
    info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque illum dolor, quaerat eius dignissimos voluptatem aperiam.`,
  },
  {
    // id: 5,
    title: "Coffee",
    type: "Beverages",
    price: 1000,
    img: "./imgs/img-5.jpg",
    info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque illum dolor, quaerat eius dignissimos voluptatem aperiam.`,
  },
  {
    // id: 6,
    title: "Main3",
    type: "Main",
    price: 1000,
    img: "./imgs/img-6.jpg",
    info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque illum dolor, quaerat eius dignissimos voluptatem aperiam.`,
  },
  {
    // id: 7,
    title: "Main4",
    type: "Main",
    price: 1000,
    img: "./imgs/img-7.jpg",
    info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque illum dolor, quaerat eius dignissimos voluptatem aperiam.`,
  },
  {
    // id: 8,
    title: "Snack3",
    type: "Snacks",
    price: 1000,
    img: "./imgs/img-8.jpg",
    info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque illum dolor, quaerat eius dignissimos voluptatem aperiam.`,
  },
  {
    // id: 9,
    title: "Snack4",
    type: "Snacks",
    price: 1000,
    img: "./imgs/img-9.jpg",
    info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque illum dolor, quaerat eius dignissimos voluptatem aperiam.`,
  },
  {
    // id: 10,
    title: "Tea",
    type: "Beverages",
    price: 1000,
    img: "./imgs/img-10.jpg",
    info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque illum dolor, quaerat eius dignissimos voluptatem aperiam.`,
  },
  {
    // id: 11,
    title: "Juice",
    type: "Beverages",
    price: 1000,
    img: "./imgs/img-11.jpg",
    info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque illum dolor, quaerat eius dignissimos voluptatem aperiam.`,
  },
  {
    // id: 12,
    title: "Shake",
    type: "Beverages",
    price: 1000,
    img: "./imgs/img-12.jpeg",
    info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque illum dolor, quaerat eius dignissimos voluptatem aperiam.`,
  },
  {
    // id: 13,
    title: "Snack5",
    type: "Snacks",
    price: 1000,
    img: "./imgs/img-13.jpg",
    info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque illum dolor, quaerat eius dignissimos voluptatem aperiam.`,
  },
];

const menuContainer = document.querySelector(".menu-container");
const btnsEl = document.querySelector(".btns");
// const typeBtn = document.querySelectorAll(".btn");

// load cards
window.addEventListener("DOMContentLoaded", function () {
  showMenuCards(card); // shows menu cards
  showBtns(); // to show btns;
  if (type === "All") {
    item.classList.add("active");
  }
});

function showMenuCards(items) {
  let showCard = items.map(function (item) {
    return `<div class="card">
        <div class="img-container">
          <img src="${item.img}" alt="" />
        </div>
        <div class="card-info">
          <h2 class="title">${item.title}</h2>
          <p class="info">${item.info}</p>
          <p class="price">Kshs. ${item.price}/-</p>
        </div>
      </div>`;
  });
  showCard = showCard.join("");
  menuContainer.innerHTML = showCard;
  // console.log(showCard);
}

function showBtns() {
  // 1.var for every type of card
  const types = card.reduce(
    function (values, item) {
      if (!values.includes(item.type)) {
        values.push(item.type);
      }
      return values;
    },
    ["All"]
  );

  // show buttons DOM(only after iterating
  const typeBtns = types
    .map(function (type) {
      return `<button class="btn" data-type=${type}>${type}</button>`;
    })
    .join("");
  btnsEl.innerHTML = typeBtns;

  // to filter by type of card
  const typeBtn = document.querySelectorAll(".btn"); //!!!declaring as global var breaks filtering functionality!!!???

  typeBtn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      console.log(e.currentTarget.dataset.type); // on main "Main" is logged out instead of Main and consequently no cards are displayed under Main. For now I'll have to change Main type just to Main. Future fix: Display cards under Main while type remains as Main Dishes in array objects
      const type = e.currentTarget.dataset.type;
      const cardType = card.filter(function (cardItem) {
        if (cardItem.type === type) {
          return cardItem;
        }
      });

      if (type === "All") {
        showMenuCards(card);
      } else {
        showMenuCards(cardType);
      }

      // To add red underline
      typeBtn.forEach((item) => {
        item.classList.remove("active");
      });
      btn.classList.add("active"); //😂😂😂 nov22nd14:30
      // if (typeBtn ==) {

      // }
    });
  });
}
// nov22nd14:35wed
