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

const videoSection = document.querySelector(".music-card-container");
const currentYearEl = document.getElementById('currentYear');
currentYearEl.innerText = new Date().getFullYear();


hamburgerEl.addEventListener('click', () => {
    hamburgerEl.classList.toggle('open');
    menuListEl.classList.toggle('show');
    miniMenuEl.classList.toggle('hidden')
});


fetch("https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UU1LigOWq5aH1XwPfIcwi3Yw&key=AIzaSyB0uYdt_D3q_1syiz7YWa89OiIVystFkk8 ")
.then(res => res.json())
.then(data => {
    data.items.forEach(el => {

      // Get the truncated title if it's longer than 23 characters
      const truncatedTitle = el.snippet.title.length > 25 ? el.snippet.title.substring(0, 22) + '...' : el.snippet.title;

      videoSection.innerHTML += `
      <a target="_blank" href="https://www.youtube.com/watch?v=${el.snippet.resourceId.videoId}"
      class="yt-video">
        <img src="${el.snippet.thumbnails.maxres.url}"  />
        <h3 class="cardtitle">${truncatedTitle}</h3>
      </a>
      `
    })
})
.catch(err => console.error('Error fetching data:', err));