const fish = document.querySelector(".fish");
let positionX = 0;

fish.addEventListener("click", (e) => {
  e.stopPropagation();
  positionX += 200;
  fish.style.transform = `translateX(${positionX}px)`;
});

const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
