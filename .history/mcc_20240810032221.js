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




KC
how to generate random linear background color  
ChatGPT
To generate a random linear background color using CSS and JavaScript, you can use the following approach:

HTML
html
Copy code
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random Linear Gradient Background</title>
    <style>
        body {
            height: 100vh;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: Arial, sans-serif;
            color: white;
            text-align: center;
            transition: background 0.5s;
        }
    </style>
</head>
<body>
    <h1>Random Linear Gradient Background</h1>
    <button onclick="generateRandomBackground()">Generate Background</button>

    <script>
        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        function generateRandomBackground() {
            const color1 = getRandomColor();
            const color2 = getRandomColor();
            const angle = Math.floor(Math.random() * 360);
            document.body.style.background = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
        }

        // Generate a random background on page load
        generateRandomBackground();
    </script>
</body>
</html>
Explanation
HTML Structure: A simple webpage structure with a heading and a button.
CSS: The body is styled to take up the full height of the viewport, center the content, and transition smoothly when the background changes.
JavaScript:
getRandomColor(): Generates a random hex color.
generateRandomBackground(): Generates two random colors, a random angle, and applies a linear gradient as the background.
The background is set to a random gradient on page load and when the button is clicked.
This code will create a webpage where the background color changes to a random linear gradient whenever you click the button.

 <div class="carousel">
      <!-- list item -->
      <div class="list">
          <div class="item">
              <img>
               <!-- <div class="backgroundg"></div> -->
              <div class="content">
                  <div class="title">BSC Mathematics</div>
                  <div class="collegeName">M.H Saboo Siddik Polytechnic</div>
                  <div class="name">Saquib Shaikh</div>
                  <div class="topic">Software Engineer</div>
                  <div class="des">
                      <!-- lorem 50 -->
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                  </div>

                  <div class="buttons">
                      <div class="lpa"> 6.5 LPA</div>
                      <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
                  </div>
              </div>
          </div>
          <div class="item">
              <img>
              <div class="content">
                <div class="title">BSC Mathematics</div>
                <div class="collegeName">M.H Saboo Siddik Polytechnic</div>
                <div class="name">Saquib Shaikh</div>
                <div class="topic">Software Engineer</div>
                <div class="des">
                    <!-- lorem 50 -->
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                </div>

                <div class="buttons">
                    <div class="lpa"> 6.5 LPA</div>
                    <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
            </div>
          </div>
          <div class="item">
              <img>
              <div class="content">
                <div class="title">BSC Mathematics</div>
                <div class="collegeName">M.H Saboo Siddik Polytechnic</div>
                <div class="name">Saquib Shaikh</div>
                <div class="topic">Software Engineer</div>
                <div class="des">
                    <!-- lorem 50 -->
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                </div>

                <div class="buttons">
                    <div class="lpa"> 6.5 LPA</div>
                    <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
            </div>
          </div>
          <div class="item">
              <img>
              <div class="content">
                <div class="title">BSC Mathematics</div>
                <div class="collegeName">M.H Saboo Siddik Polytechnic</div>
                <div class="name">Saquib Shaikh</div>
                <div class="topic">Software Engineer</div>
                <div class="des">
                    <!-- lorem 50 -->
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                </div>

                <div class="buttons">
                    <div class="lpa"> 6.5 LPA</div>
                    <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
            </div>
          </div>
      </div>
      <!-- list thumnail -->
      <div class="thumbnail">
          <div class="item">
              <img src="assests/person.jpg">
              <div class="content">
                  <div class="title">
                    Saquib Shaikh
                  </div>
                  <div class="description">
Software Engineer
                  </div>
              </div>
          </div>
          <div class="item">
              <img src="assests/person.jpg">
              <div class="content">
                  <div class="title">
                    Asalam Shaikh
                  </div>
                  <div class="description">
                      Python Developer
                  </div>
              </div>
          </div>
          <div class="item">
              <img src="assests/person.jpg">
              <div class="content">
                  <div class="title">
                    Taufique Shaikh
                  </div>
                  <div class="description">
                      Software Developer
                  </div>
              </div>
          </div>
          <div class="item">
              <img src="assests/person.jpg">
              <div class="content">
                  <div class="title">
                    Akhtar Raza Khan
                  </div>
                  <div class="description">
                      Software Developer
                  </div>
              </div>
          </div>
      </div>
      <!-- next prev -->

      <div class="arrows">
          <button id="prev"><</button>
          <button id="next">></button>
      </div>
      <!-- time running -->
      <!-- <div class="time"></div> -->
  </div>


.carousel{
    height: 100vh;
    margin-top: 50px;
    width: 100vw;
    overflow: hidden;
    position: relative;
}
.carousel .list .item{
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    inset: 0 0 0 0;
    /* background: linear-gradient(rgb(0, 123, 255),blue); */
}
.carousel .list .item img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-image: linear-gradient(to right, var(--color2),var(--text-color));
}
.carousel .list .item .content{
    position: absolute;
    top: 20%;
    width: 1140px;
    max-width: 80%;
    left: 50%;
    transform: translateX(-50%);
    padding-right: 30%;
    box-sizing: border-box;
    color: #fff;
    text-shadow: 0 5px 10px #0004;
}
.carousel .list .item .name{
    font-weight: 600;
    letter-spacing: 4px;
    font-size: var(--font-size2);
}
.carousel .list .item .collegeName{
    font-size: 20px;
    font-weight: 500;
    line-height: 1.3em;
}
.carousel .list .item .title{
    font-size: var(--font-size4);
    font-weight: 500;
    line-height: 1.3em;
}
.carousel .list .item .topic{
    color: #f1683a;
    font-size: var(--font-size1);
}
.carousel .list .item .buttons{
    /* display: grid;
    grid-template-columns: repeat(2, 100px);
    grid-template-rows: 40px; */
    display: flex;
    gap: 1.2rem;
    /* flex-direction: column; */
    margin-top: 2rem;
}
.carousel .list .item .buttons .lpa{
    font-size: 22px;
    text-decoration: underline;
    font-weight: 700;
}
.carousel .list .item .buttons a{
    font-size: 22px;
    text-decoration: underline;
    font-weight: 700;
    color: var(--white-color1);
}
.carousel .list .item .buttons button:nth-child(2){
    background-color: transparent;
    border: 1px solid #fff;
    color: #eee;
}
/* thumbail */
.thumbnail{
    position: absolute;
    bottom: 50px;
    left: 50%;
    width: max-content;
    z-index: 100;
    display: flex;
    gap: 20px;
}
.thumbnail .item{
    width: 150px;
    height: 220px;
    flex-shrink: 0;
    position: relative;
}
.thumbnail .item img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
}
.thumbnail .item .content{
    color: #fff;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
}
.thumbnail .item .content .title{
    font-weight: 500;
}
.thumbnail .item .content .description{
    font-weight: 300;
}
/* arrows */
.arrows{
    position: absolute;
    top: 80%;
    right: 52%;
    z-index: 100;
    width: 300px;
    max-width: 30%;
    display: flex;
    gap: 10px;
    align-items: center;
}
.arrows button{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #eee4;
    border: none;
    color: #fff;
    font-family: monospace;
    font-weight: bold;
    transition: .5s;
}
.arrows button:hover{
    background-color: #fff;
    color: #000;
}

/* animation */
.carousel .list .item:nth-child(1){
    z-index: 1;
}

/* animation text in first item */

.carousel .list .item:nth-child(1) .content .name,
.carousel .list .item:nth-child(1) .content .title,
.carousel .list .item:nth-child(1) .content .collegeName,
.carousel .list .item:nth-child(1) .content .topic,
.carousel .list .item:nth-child(1) .content .des,
.carousel .list .item:nth-child(1) .content .buttons
{
    transform: translateY(50px);
    filter: blur(20px);
    opacity: 0;
    animation: showContent .5s 1s linear 1 forwards;
}
@keyframes showContent{
    to{
        transform: translateY(0px);
        filter: blur(0px);
        opacity: 1;
    }
}
.carousel .list .item:nth-child(1) .content .title{
    animation-delay: 0.8s!important;
}
.carousel .list .item:nth-child(1) .content .collegeName{
    animation-delay: 1s!important;
}
.carousel .list .item:nth-child(1) .content .name{
    animation-delay: 1.2s!important;
}
.carousel .list .item:nth-child(1) .content .topic{
    animation-delay: 1.4s!important;
}
.carousel .list .item:nth-child(1) .content .des{
    animation-delay: 1.6s!important;
}
.carousel .list .item:nth-child(1) .content .buttons{
    animation-delay: 1.8s!important;
}
/* create animation when next click */
.carousel.next .list .item:nth-child(1) img{
    width: 150px;
    height: 220px;
    position: absolute;
    bottom: 50px;
    left: 50%;
    border-radius: 30px;
    animation: showImage 1s 1 forwards;
}
@keyframes showImage{
    to{
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 0;
    }
}

.carousel.next .thumbnail .item:nth-last-child(1){
    overflow: hidden;
    animation: showThumbnail .5s linear 1 forwards;
}
.carousel.prev .list .item img{
    z-index: 100;
}
@keyframes showThumbnail{
    from{
        width: 0;
        opacity: 0;
    }
}
.carousel.next .thumbnail{
    animation: effectNext .5s linear 1 forwards;
}

@keyframes effectNext{
    from{
        transform: translateX(150px);
    }
}


/* prev click */

.carousel.prev .list .item:nth-child(2){
    z-index: 2;
}

.carousel.prev .list .item:nth-child(2) img{
    animation: outFrame 0.5s linear 1 forwards;
    position: absolute;
    bottom: 0;
    left: 0;
}
@keyframes outFrame{
    to{
        width: 150px;
        height: 220px;
        bottom: 50px;
        left: 50%;
        border-radius: 20px;
    }
}

.carousel.prev .thumbnail .item:nth-child(1){
    overflow: hidden;
    opacity: 0;
    animation: showThumbnail .5s linear 1 forwards;
}
.carousel.next .arrows button,
.carousel.prev .arrows button{
    pointer-events: none;
}
.carousel.prev .list .item:nth-child(2) .content .name,
.carousel.prev .list .item:nth-child(2) .content .title,
.carousel.prev .list .item:nth-child(2) .content .collegeName,
.carousel.prev .list .item:nth-child(2) .content .topic,
.carousel.prev .list .item:nth-child(2) .content .des,
.carousel.prev .list .item:nth-child(2) .content .buttons
{
    animation: contentOut 1.5s linear 1 forwards!important;
}

@keyframes contentOut{
    to{
        transform: translateY(-150px);
        filter: blur(20px);
        opacity: 0;
    }
}
@media screen and (max-width: 678px) {
    .carousel .list .item .content{
        padding-right: 0;
    }
    .carousel .list .item .content .title{
        font-size: 30px;
    }
  
}
yeh wale section ke ke liye jo img tag hai usmei random background color chahiye
ChatGPT
To set a random background color for the img tags within the carousel section, you can modify your JavaScript to apply a random background color to each image. Here's how you can do it:

Updated HTML with JavaScript
Add the following JavaScript code to your existing HTML:

html
Copy code
<script>
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function setRandomBackgroundColors() {
        const images = document.querySelectorAll('.carousel .list .item img');
        images.forEach(img => {
            img.style.backgroundColor = getRandomColor();
        });
    }

    // Call the function to set random background colors on page load
    window.onload = setRandomBackgroundColors;
</script>
Explanation:
getRandomColor(): This function generates a random hex color.
setRandomBackgroundColors(): This function selects all img tags within the .carousel .list .item elements and applies a random background color to each one.
window.onload: This ensures that the random background colors are applied when the page loads.
Full Example:
Ensure this JavaScript is included within your HTML, ideally before the closing </body> tag.

html
Copy code
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carousel with Random Background Images</title>
    <style>
        /* Your existing CSS here */
    </style>
</head>
<body>
    <!-- Your existing HTML structure here -->
  
    <script>
        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        function setRandomBackgroundColors() {
            const images = document.querySelectorAll('.carousel .list .item img');
            images.forEach(img => {
                img.style.backgroundColor = getRandomColor();
            });
        }

        // Call the function to set random background colors on page load
        window.onload = setRandomBackgroundColors;
    </script>
</body>
</html>
Now, every time the page loads, each image in the carousel will have a random background color applied to it.

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color1 = '#';
    let color2= '#';
    for (let i = 0; i < 4; i++) {
        color1 += letters[Math.floor(Math.random() * 16)];
        color2 += letters[Math.floor(Math.random() * 16)];
    }
    return color1+color2;
}

function setRandomBackgroundColors() {
    const images = document.querySelectorAll('.carousel .list .item img');
    images.forEach(img => {
        img.style.backgroundColor = getRandomColor();
    });
}

I want to use linear gridient color in background
ChatGPT
To apply a linear gradient background using randomly generated colors, you can modify your existing getRandomColor function to return two colors, and then use them to create a linear gradient. Here's how you can do it:

Updated JavaScript
javascript
Copy code
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setRandomBackgroundColors() {
    const images = document.querySelectorAll('.carousel .list .item img');
    images.forEach(img => {
        const color1 = getRandomColor();
        const color2 = getRandomColor();
        img.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
    });
}

// Call the function to set random background colors on page load
window.onload = setRandomBackgroundColors;
Explanation:
getRandomColor(): Generates a random hex color.
setRandomBackgroundColors():
Selects all img tags within the .carousel .list .item.
For each image, two random colors (color1 and color2) are generated.
A linear gradient is applied as the backgroundImage using the generated colors.
The gradient is set to transition from color1 to color2 horizontally (to right).
Full Example:
Ensure that this JavaScript is included within your HTML file:

html
Copy code
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carousel with Random Gradient Backgrounds</title>
    <style>
        /* Your existing CSS here */
    </style>
</head>
<body>
    <!-- Your existing HTML structure here -->

    <script>
        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        function setRandomBackgroundColors() {
            const images = document.querySelectorAll('.carousel .list .item img');
            images.forEach(img => {
                const color1 = getRandomColor();
                const color2 = getRandomColor();
                img.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
            });
        }

        // Call the function to set random background colors on page load
        window.onload = setRandomBackgroundColors;
    </script>
</body>
</html>
Now, each image in the carousel will have a random linear gradient background when the page loads, with a smooth transition between two random colors.

I want to use white green random color combination for gradient

2/2

ChatGPT
Memory updated
To create a linear gradient with a random combination of white and green shades, you can modify the getRandomGreenColor function to generate shades of green, and then combine these with white in the gradient. Here's how you can do it:

JavaScript
javascript
Copy code
function getRandomGreenColor() {
    const letters = '0123456789ABCDEF';
    let green = '#';
    green += '00'; // Red component set to 00 for green shades
    green += letters[Math.floor(Math.random() * 16)] + 'F'; // Generate green component with a random value
    green += '00'; // Blue component set to 00 for pure green shades
    return green;
}

function setRandomBackgroundColors() {
    const images = document.querySelectorAll('.carousel .list .item img');
    images.forEach(img => {
        const white = '#FFFFFF';
        const green = getRandomGreenColor();
        img.style.backgroundImage = `linear-gradient(to right, ${white}, ${green})`;
    });
}

// Call the function to set random background colors on page load
window.onload = setRandomBackgroundColors;
Explanation:
getRandomGreenColor():
Generates a random green shade by keeping the red and blue components low while varying the green component.
setRandomBackgroundColors():
For each image in the carousel, the background is set to a linear gradient from white to a random green shade.
Full Example:
html
Copy code
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carousel with White-Green Gradient Backgrounds</title>
    <style>
        /* Your existing CSS here */
    </style>
</head>
<body>
    <!-- Your existing HTML structure here -->

    <script>
        function getRandomGreenColor() {
            const letters = '0123456789ABCDEF';
            let green = '#';
            green += '00'; // Red component set to 00 for green shades
            green += letters[Math.floor(Math.random() * 16)] + 'F'; // Generate green component with a random value
            green += '00'; // Blue component set to 00 for pure green shades
            return green;
        }

        function setRandomBackgroundColors() {
            const images = document.querySelectorAll('.carousel .list .item img');
            images.forEach(img => {
                const white = '#FFFFFF';
                const green = getRandomGreenColor();
                img.style.backgroundImage = `linear-gradient(to right, ${white}, ${green})`;
            });
        }

        // Call the function to set random background colors on page load
        window.onload = setRandomBackgroundColors;
    </script>
</body>
</html>
This will create a linear gradient background that transitions from white to various shades of green for each image in your carousel.

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setRandomBackgroundColors() {
    const images = document.querySelectorAll('.carousel .list .item img');
    images.forEach(img => {
        img.style.backgroundColor = getRandomColor();
    });
}

// Call the function to set random background colors on page load
window.onload=setRandomBackgroundColors()

I want to use light color
ChatGPT
To generate light colors, you can modify the getRandomColor function to create colors with higher brightness. This can be achieved by ensuring that the RGB components are closer to the maximum value (255) and avoiding dark shades.

Here's an updated version of the code that generates light colors:

JavaScript
javascript
Copy code
function getRandomLightColor() {
    const letters = '89ABCDEF'; // Start from higher values to ensure the color is light
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 8)]; // Use only the higher range of values
    }
    return color;
}

function setRandomBackgroundColors() {
    const images = document.querySelectorAll('.carousel .list .item img');
    images.forEach(img => {
        img.style.backgroundColor = getRandomLightColor();
    });
}

// Call the function to set random background colors on page load
window.onload = setRandomBackgroundColors;
Explanation:
getRandomLightColor():
Uses only the characters 8-9 and A-F for generating color components, ensuring that the resulting color is on the lighter side of the spectrum.
This will create random light colors for the background of each image in your carousel.


2/2

how to generate light color
ChatGPT
To generate a light color, you need to ensure that the RGB components of the color are closer to the higher end of the spectrum (closer to 255). Here’s a method to generate light colors:

JavaScript
javascript
Copy code
function getRandomLightColor() {
    const base = 200; // Base value for light colors (closer to 255)
    const randomComponent = () => Math.floor(Math.random() * (255 - base) + base);
    const r = randomComponent();
    const g = randomComponent();
    const b = randomComponent();
    return `rgb(${r}, ${g}, ${b})`;
}

function setRandomBackgroundColors() {
    const images = document.querySelectorAll('.carousel .list .item img');
    images.forEach(img => {
        img.style.backgroundColor = getRandomLightColor();
    });
}

// Call the function to set random background colors on page load
window.onload=setRandomBackgroundColors();