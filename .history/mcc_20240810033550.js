let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}

function openTab(tabName) {
    var i, tabContent, tabButtons;
    tabContent = document.getElementsByClassName("tab");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.remove("active");
    }
    document.getElementById(tabName).classList.add("active");
    tabButtons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }
    document.querySelector(".tab-button[data-tab='" + tabName + "']").classList.add("active");
}


// javaScript for google review section


// function getRandomLightColor() {
//     const base = 180; 
//     const randomComponent = () => Math.floor(Math.random() * (255 - base) + base);
//     const r = randomComponent();
//     const g = randomComponent();
//     const b = randomComponent();
//     return `rgb(${r}, ${g}, ${b})`;
// }

// function setRandomBackgroundColors() {
//     const images = document.querySelectorAll('.carousel .list .item img');
//     images.forEach(img => {
//         img.style.backgroundColor = getRandomLightColor();
//     });
// }

// window.onload=setRandomBackgroundColors();

// function setGradientBackgrounds() {
//     const images = document.querySelectorAll('.carousel .list .item img');
//     images.forEach(img => {
//         img.style.backgroundImage = 'linear-gradient(to bottom right, #E0F2F1, #B9FBC0)'; // Light green and white gradient
//     });
// }

function getRandomGreenColor() {
    // Generate a random light green color
    const r = Math.floor(Math.random() * 100) + 155; // Light green range
    const g = Math.floor(Math.random() * 100) + 155; // Light green range
    const b = Math.floor(Math.random() * 100) + 155; // Light green range
    return `rgb(${r}, ${g}, ${b})`;
}

function getRandomWhiteShade() {
    // Generate a random shade of white
    const shade = Math.floor(Math.random() * 50); // Light gray/white shades
    return `rgb(${shade}, ${shade}, ${shade})`;
}

function getRandomGreenWhiteGradient() {
    const greenColor = getRandomGreenColor();
    const whiteShade = getRandomWhiteShade();
    return `linear-gradient(to bottom right, ${greenColor}, ${whiteShade})`;
}

function setRandomGradientBackgrounds() {
    const images = document.querySelectorAll('.carousel .list .item img');
    images.forEach(img => {
        img.style.backgroundImage = getRandomGreenWhiteGradient();
    });
}

// Call the function to set random gradient backgrounds on page load
window.onload = setRandomGradientBackgrounds;


// Call the function to set the gradient background on page load
// window.onload = setGradientBackgrounds;
