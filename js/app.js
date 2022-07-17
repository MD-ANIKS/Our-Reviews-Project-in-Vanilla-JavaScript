// local reviews data
const reviews = [
  {
    id: 1,
    name: "Bill Anderson",
    job: "Web Developer",
    img: "images/1.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicyle rights tumeric chartreuse brfore they sold out chambry phoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "susan smith",
    job: "Web Designer",
    img: "images/2.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell or brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "anna johnson",
    job: "ux designer",
    img: "images/3.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic j ianbing swag.",
  },
];

// Select items
const img = document.querySelector(".person-info img");
const author = document.querySelector(".author");
const job = document.querySelector(".job");
const info = document.querySelector(".text");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

window.addEventListener("DOMContentLoaded", function () {
  // callback function
  showPerson();
});

// set initial value
let currentItem = 0;

// create a showPerson function
function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// Show next person when click the next button

nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

// Show prev person when click the prev button

prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

// show random person when click the random btn
randomBtn.addEventListener("click", () => {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson();

  console.log(currentItem);
});
