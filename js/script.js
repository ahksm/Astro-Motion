const preloader = document.querySelector('.preloader');

window.addEventListener('load', function () {
    preloader.classList.add('loaded');
});

const container = document.querySelector(".container-1");
const btns = document.querySelectorAll(".header-nav__list-link");
const articles = document.querySelectorAll(".main-tab-element");

container.addEventListener("click", function (e) {
    const id = e.target.parentElement.dataset.id;

    if (id) {
        // remove active from all buttons
        btns.forEach(function (btn) {
            btn.classList.remove("active");
            list.classList.remove("active");
            listContainer.classList.remove("active");
            if (e.target.parentElement.classList.contains("btn__center")) {
                const secondTab = document.querySelector(".secondTab");
                secondTab.classList.add("active");
            }
            e.target.parentElement.classList.add("active");
        });
        // hide other articles
        articles.forEach(function (article) {
            article.style.opacity = "0";
            setTimeout(() => {
                article.style.display = "none";
            }, 300);
        });
        const element = document.getElementById(id);
        element.style.opacity = "1";
        setTimeout(() => {
            element.style.display = "block";
        }, 300);
    }
});

const burger = document.querySelector(".burger");
const listContainer = document.querySelector(".header-nav-container");
const list = document.querySelector(".header-nav__list");

burger.addEventListener("click", function () {
    listContainer.classList.toggle("active");
    list.classList.toggle("active");
});

listContainer.addEventListener('click', function () {
    listContainer.classList.remove("active");
    list.classList.remove("active");
});

const dotsContainer = document.querySelector(".slider-dots");

let onresize = function () {
    if (window.innerWidth >= 575) {
        dotsContainer.innerHTML = `<li class="slider-dots__dot active first"></li>
        <li class="slider-dots__dot second"></li>
        <li class="slider-dots__dot third"></li>`;
    } else {
        dotsContainer.innerHTML = `<li class="slider-dots__dot active first5"></li>
        <li class="slider-dots__dot second5"></li>
        <li class="slider-dots__dot third5"></li>
        <li class="slider-dots__dot fourth5"></li>
        <li class="slider-dots__dot fifth5"></li>`;
    }
};
onresize();

window.addEventListener("resize", onresize);

dotsContainer.addEventListener("click", (e) => {
    const dots = document.querySelectorAll(".slider-dots__dot");

    if (e.target.classList.contains("slider-dots__dot")) {
        dots.forEach((dot) => {
            dot.classList.remove("active");
            e.target.classList.add("active");
        });
    }
});

const card = document.querySelector(".carousel-item");
const carouselInner = document.querySelector(".carousel-inner");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const first5 = document.querySelector(".first5");
const second5 = document.querySelector(".second5");
const third5 = document.querySelector(".third5");
const fourth5 = document.querySelector(".fourth5");
const fifth5 = document.querySelector(".fifth5");
const sliderContainer = document.querySelector(".slider-dots");
const sliderDots = document.querySelectorAll(".slider-dots__dot");

function slider() {
    if (window.innerWidth >= 765) {
        sliderContainer.addEventListener("click", function (e) {
            sliderDots.forEach(function () {
                if (e.target.classList.contains("first")) {
                    carouselInner.style.transform = `translateX(0px)`;
                } else if (e.target.classList.contains("second")) {
                    carouselInner.style.transform = `translateX(${
                        card.offsetWidth * -3
                    }px)`;
                } else if (e.target.classList.contains("third")) {
                    carouselInner.style.transform = `translateX(${
                        card.offsetWidth * -6
                    }px)`;
                }
            });
        });
    } else if (window.innerWidth <= 575) {
        sliderContainer.addEventListener("click", function (e) {
            sliderDots.forEach(function () {
                if (e.target.classList.contains("first5")) {
                    carouselInner.style.transform = `translateX(0px)`;
                } else if (e.target.classList.contains("second5")) {
                    carouselInner.style.transform = `translateX(${
                        card.offsetWidth * -2
                    }px)`;
                } else if (e.target.classList.contains("third5")) {
                    carouselInner.style.transform = `translateX(${
                        card.offsetWidth * -4
                    }px)`;
                } else if (e.target.classList.contains("fourth5")) {
                    carouselInner.style.transform = `translateX(${
                        card.offsetWidth * -6
                    }px)`;
                } else if (e.target.classList.contains("fifth5")) {
                    carouselInner.style.transform = `translateX(${
                        card.offsetWidth * -8
                    }px)`;
                }
            });
        });
    }
}

slider();

window.addEventListener("resize", slider);