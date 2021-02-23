
/* -----------------Start Navbar On Header---------------------*/
let searchNavbar = document.querySelector(".header .search-navbar");
let searchButton = document.querySelector(".nav-bar .fa-search");
let closeSearchNavbar = document.querySelector(".header .search-navbar .close-search");

//Show Search Navbar When Click On Searc Button
searchButton.addEventListener("click", () => {
    searchNavbar.classList.replace("hide", "show");
});
//Hide Search Navbar When Click On Close Button
closeSearchNavbar.addEventListener("click", () => {
    searchNavbar.classList.replace("show", "hide");
});
/* -----------------End Navbar On Header----------------------*/

/* ---------------- Start Slider On Header--------------------*/

//Create Variables I Will Used
let myHeader = document.querySelector(".header");
let allSide = document.querySelectorAll(".header .all-slider .slide");
let currentNumber = document.querySelector(".header .all-slider .active");
let nextSlide = document.querySelectorAll(".header .all-slider .fa-angle-right");
let prevSlide = document.querySelectorAll(".header .all-slider .fa-angle-left");
let myInterval;
let x = parseInt(currentNumber.dataset.current);

//Run randomBackground Function Every 10000 ms
function runMyInterval() {
    myInterval = setInterval(() => {
        x = x + 1;
        if (x === 5) { 
            x = 1;
        }
        randomBackground();
    }, 10000);
};
runMyInterval();

//When I Click On Right Button
nextSlide.forEach(element => {
    element.addEventListener("click", () => {
        clearInterval(myInterval);
        myInterval = false;
        if (x >= 4) { 
            x = 0;
        }
        x = x + 1;
    randomBackground();
    });
});

//When I Click On left Button
prevSlide.forEach(element => {
    element.addEventListener("click", () => {
        clearInterval(myInterval);
        myInterval = false;
        if (x === 1) { 
            x = 5;
        }
        x = x - 1;
    randomBackground();
    })
});

//Run Random Background When I left the Header After Stop It By Prev and Next Button
myHeader.onmouseleave = () => {
    if (myInterval === false) {
        runMyInterval();
    }
};

//Create an Function Change the Header background and Change the Header Content
function randomBackground() {
        allSide.forEach(slide => {
            slide.classList.remove("active");
        })
        document.querySelector(`.header .all-slider .num${x}`).classList.add("active");
        myHeader.style.backgroundImage = `url(./imgs/slider/slide${x}.png)`;
        myHeader.style.transition = "all .5s";
}
/* -----------------End Slider On Header----------------------*/

//Set Animation On All Elements When Window Scroll
window.onscroll = () => {
    animateScroll("devices", 200);
    animateScroll("iphone", 200);
    animateScroll("iphone2", 200);
    animateScroll("iphone3", 200);
    animateScroll("all-cameras", 800);
    animateScroll("all-cameras2", 800);
    animateScroll("all-cameras3", 800);
    animateScroll("all-cameras4", 800);
    animateScroll("apple-music", 400);
    animateScroll("music-slider", 200);
    animateScroll("airpods", 200);
    animateScroll("airpods2", 200);
    animateScroll("music-app", 900);
    animateScroll("working", 200);
    animateScroll("mac", 700);
    animateScroll("mac-section2", 600);
    animateScroll("what-mac", 200);
    animateScroll("macos", 200);
    animateScroll("desc", 600);

    if (window.pageYOffset > 100) {
        document.querySelector(".header .navbars .navbar").style.backgroundColor = "#171515";
    } else {
        document.querySelector(".header .navbars .navbar").style.backgroundColor = "";
    }
}
function animateScroll(x, y) {
    let myElement = document.querySelector(`.${x}`);
    if (window.pageYOffset + y > (myElement.offsetTop + myElement.offsetHeight - window.innerHeight)) {
        document.querySelector(`.${x} .part1`).classList.add("active");
        if (myElement.classList.contains("found")) {
            document.querySelector(`.${x} .part2`).classList.add("active");
        }
    } else {
        document.querySelector(`.${x} .part1`).classList.remove("active");
        if (myElement.classList.contains("found")) {
            document.querySelector(`.${x} .part2`).classList.remove("active");
        }
    }
}

/*--------------------Start Music Slider----------------------*/
let allLinks = document.querySelectorAll(".music-slider .part1 li");
let musicSlide = document.querySelectorAll(".music-slider .part2 div");

document.querySelector(".music-slider .part1 li:nth-child(1)").onclick = function () {
    slideShow (0,5);
    this.classList.add("active");
    
};
document.querySelector(".music-slider .part1 li:nth-child(2)").onclick = function () {
    slideShow (5,10);
    this.classList.add("active");
    
};
document.querySelector(".music-slider .part1 li:nth-child(3)").onclick = function () {
    slideShow (10,15);
    this.classList.add("active");
};
document.querySelector(".music-slider .part1 li:nth-child(4)").onclick = function () {
    slideShow (15,20);
    this.classList.add("active");
};
document.querySelector(".music-slider .part1 li:nth-child(5)").onclick = function () {
    slideShow (3,8);
    this.classList.add("active");
};
document.querySelector(".music-slider .part1 li:nth-child(6)").onclick = function () {
    slideShow (7,12);
    this.classList.add("active");
};

function slideShow (x,y) {
    allLinks.forEach(link => {
        link.classList.remove("active");
    })
    musicSlide.forEach(element => {
        element.classList.remove("active");
    })
    musicSlide.forEach(element => {
        if (element.dataset.index > x && element.dataset.index <= y) {
            element.classList.add("active");
        }
    })
};
/*--------------------End Music Slider-----------------------*/

/*-------------------Start Apps Container---------------------*/
let appsLinks = document.querySelectorAll(".apps-container ul li");
let myAppsParagraph = document.querySelectorAll(".apps-container .paragraph1");
let proAppsLinks = document.querySelectorAll(".pro-apps-container ul li");
let myProAppsParagraph = document.querySelectorAll(".pro-apps-container .paragraph1");
let i = 1;

appsLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        changeParagraph(appsLinks,myAppsParagraph,link);
    })
});
proAppsLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        changeParagraph(proAppsLinks,myProAppsParagraph,link);
    })
});

function changeParagraph(x,y,z) {
    //Remove Active Class From All Links
    x.forEach(link => {
        link.classList.remove("active");
    })
    //Add Active Class To Link I Clicked On
    z.classList.add("active");
    //Remove Active Class From All Paragraph
    y.forEach(para => {
        para.classList.remove("active");
    });
    //Add Active class On Paragraph[i]
    y.forEach(para => {
        if (z.dataset.index === para.dataset.index) {
            para.classList.add("active");
        }
    });
}
/*-------------------End Apps Container-----------------------*/

//When I Clicked On Any Button in website it will scroll the website to it's Element
scrollToView(".header .navbar .go-mac",".mac");
scrollToView(".header .navbar .go-iphone",".iphone");
scrollToView(".header .navbar .go-music",".apple-music");
scrollToView(".footer .head .go-up",".header");
scrollToView(".header .all-slider .num1 button",".iphone");
scrollToView(".header .all-slider .num2 button",".mac");
scrollToView(".header .all-slider .num3 button",".airpods");
scrollToView(".devices-overlay .devices .part2 .iphone-go",".iphone");
scrollToView(".devices-overlay .devices .part2 .mac-go",".mac");
scrollToView(".devices-overlay .devices .part2 .apple-go",".apple-music");
function scrollToView(x,y) {
    document.querySelector(x).onclick = () => {
        document.querySelector(y).scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    };
};