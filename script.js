let lightTheme = true;

const toggleBtn = document.getElementById("toggle-theme-btn");

const darkColor = "#111729";
const lightColor = "#F2F9FE";

const root = document.querySelector(':root');
const logoImg = document.getElementById('logo').children[0];

toggleBtn.addEventListener('click', () => {
    const darkElement = toggleBtn.children[0];
    const lightElement = toggleBtn.children[1];

    darkElement.classList.toggle('active-theme');
    lightElement.classList.toggle('active-theme');


    if (darkElement.classList.contains("active-theme")) {
        darkElement.children[0].src = "./assets/Moon_fill.svg";
        lightElement.children[0].src = "./assets/Sun_fill_light.svg";
        root.style.setProperty('--background', darkColor);
        root.style.setProperty('--color', lightColor);
        logoImg.src = "./assets/alarado-icon-homepage-dark.svg"
    } else {
        darkElement.children[0].src = "./assets/Moon_fill_light.svg";
        lightElement.children[0].src = "./assets/Sun_fill.svg";
        root.style.setProperty('--background', lightColor);
        root.style.setProperty('--color', darkColor);
        logoImg.src = "./assets/alarado-icon-homepage.svg";
    }
})

const hamburgerMenuBtn = document.getElementById('hamburger-menu');

let menuIsClosed = true;
hamburgerMenuBtn.addEventListener('click', () => {
   

    if (menuIsClosed) {
        document.getElementById("hamburger-icon").classList.toggle("fa-bars");
        document.getElementById("hamburger-icon").classList.toggle("fa-window-close");
        document.getElementById('header-container').children[1].style.display = 'flex';
        menuIsClosed = false;
    } else {
        document.getElementById('header-container').children[1].style.display = 'none';
        document.getElementById("hamburger-icon").classList.toggle("fa-bars");
        document.getElementById("hamburger-icon").classList.toggle("fa-window-close");
        menuIsClosed = true;
    }
})
