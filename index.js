window.addEventListener("load", () => {
    const bar = document.querySelectorAll(".bar");
    for (let i = 0; i < bar.length; i++) {
      bar.forEach((item, j) => {
        // Random move
        item.style.animationDuration = `${Math.random() * (0.7 - 0.2) + 0.2}s`; // Change the numbers for speed / ( max - min ) + min / ex. ( 0.5 - 0.1 ) + 0.1
      });
    }
  });


const hamburgerEl = document.querySelector('.hamburger-menu-icon');
const menuListEl = document.querySelector('.menu-list');

const miniMenuEl = document.querySelector(".mini-hamburger-menu");




hamburgerEl.addEventListener('click', () => {
    hamburgerEl.classList.toggle('open');
    menuListEl.classList.toggle('show');
    miniMenuEl.classList.toggle('hidden')
});
