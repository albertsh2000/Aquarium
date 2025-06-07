const fish = document.querySelector(".fish");
let positionX = 0;

fish.addEventListener("click", (e) => {
  e.stopPropagation();
  positionX += 200;
  fish.style.transform = `translateX(${positionX}px)`;
});
