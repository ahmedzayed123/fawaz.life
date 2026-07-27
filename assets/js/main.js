/*==========================================
    HERO CONTENT
==========================================*/
const heroContent = [
    {
        tag: "VERANTWORTUNG • VERTRAUEN • MENSCHLICHKEIT",
        title: "Dr. Fawaz\nPraxis für rechtliche Betreuung \n Coaching & Decision-Support",
        text: "Gemeinsam schaffen wir Strukturen, die Sicherheit und Stabilität ermöglichen.",
        button1: "Kontakt",
        button2: "Mehr erfahren"
    },
    
    {

        tag:"BETREUUNG • ETHIK • LEBENSHILFE",

        title:"Jede Veränderung beginnt mit einem Moment des Verstehens.",

        text:"Lassen Sie sich begleiten auf Ihrem Weg zu Orientierung und innerer Stärke.",

        button1:"Unsere Leistungen",

        button2:"Über uns"

    },

    {

        tag:"RESPEKT • WÜRDE • VERSTÄNDNIS",

        title:"Jeder Schritt zu mehr Klarheit beginnt mit Vertrauen.",

        text:"Entdecken Sie Wege zu Stabilität, Selbstbestimmung und menschlicher Würde.",

        button1:"Jetzt starten",

        button2:"Kontakt"

    }

];

const header = document.getElementById('header');

window.addEventListener('scroll', () => {

    if (window.scrollY > 80) {

        header.classList.add('scrolled');

    } else {

        header.classList.remove('scrolled');

    }

});

/*==========================================
    HERO SLIDER
==========================================*/

// const slides = document.querySelectorAll('.slide');

// let currentSlide = 0;

// function showSlide(index){

//     slides.forEach(slide=>{

//         slide.classList.remove('active');

//     });

//     slides[index].classList.add('active');

// }

// function nextSlide(){

//     currentSlide++;

//     if(currentSlide >= slides.length){

//         currentSlide = 0;

//     }

//     showSlide(currentSlide);

// }

// setInterval(nextSlide,6000);

const slides = document.querySelectorAll(".slide");

const heroTag=document.getElementById("heroTag");
const heroTitle=document.getElementById("heroTitle");
const heroText=document.getElementById("heroText");
const heroBtn1=document.getElementById("heroBtn1");
const heroBtn2=document.getElementById("heroBtn2");

let currentSlide=0;

function loadHero(index){
    heroTag.textContent = heroContent[index].tag;
    heroTitle.innerText = heroContent[index].title; // Must be innerText for \n to work
    heroText.textContent = heroContent[index].text;
    heroBtn1.textContent = heroContent[index].button1;
    heroBtn2.textContent = heroContent[index].button2;
}

function showSlide(index){

    slides.forEach(slide=>{

        slide.classList.remove("active");

    });

    slides[index].classList.add("active");

    loadHero(index);

}

function nextSlide(){

    currentSlide++;

    if(currentSlide>=slides.length){

        currentSlide=0;

    }

    showSlide(currentSlide);

}

loadHero(0);

setInterval(nextSlide,6000);

/*==========================================
    SCROLL INDICATOR
==========================================*/

const scrollIndicator = document.querySelector(".scroll-indicator");

scrollIndicator.addEventListener("click",()=>{

    document.getElementById("philosophy").scrollIntoView({

        behavior:"smooth"

    });

});

/*==========================================
    SCROLL TO TOP
==========================================*/

const scrollTopButton = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollTopButton.classList.add("show");

    } else {

        scrollTopButton.classList.remove("show");

    }

});

scrollTopButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*==========================================
    MOBILE MENU
==========================================*/

const mobileMenu = document.querySelector(".mobile-menu");
const mainNav = document.getElementById("mainNav");

mobileMenu.addEventListener("click", () => {

    mainNav.classList.toggle("active");

    mobileMenu.innerHTML = mainNav.classList.contains("active")
        ? "✕"
        : "☰";

});

document.querySelectorAll("#mainNav a").forEach(link => {

    link.addEventListener("click", () => {

        mainNav.classList.remove("active");

        mobileMenu.innerHTML = "☰";

    });

});