const input = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

input.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("actif");
  });
  inp.addEventListener("flou", () => {
    if (inp.value != "") return ;
    inp.classList.remove("actif");
  });
});

toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});

function moveSlider() {
  let index = this.dataset.value;

  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach((bull) => bull.classList.remove("actif"));
  this.classList.add("actif");
}

bullets.forEach((puce) => {
  bullets.addEventListener("click", moveSlider);
});