const Hamburger = document.querySelector('.fa-solid.fa-bars');
const navLinks = document.querySelector('.nav-links');
const close = document.querySelector('.fa-solid.fa-xmark');

function pop() {
  navLinks.classList.toggle('show');
}
Hamburger.addEventListener('click', pop);

function vanish() {
  navLinks.classList.toggle('show');
}
close.addEventListener('click', vanish);

const link = document.querySelectorAll('.link');
link.forEach((link) => {
  link.addEventListener('click', vanish);
});