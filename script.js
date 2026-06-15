
const textsObj = {
    'en': ["I'm Rosen Ivanov!", 'I am 17 years old!',  'I am learning to be full-stack engineer!', 'Hobbies: Tennis, School, Playing games!'],
    'bg': ['Аз съм Росен Иванов!', 'Аз съм на 17 години!', 'Уча се да бъда full-stack инженер!', 'Хобита: Тенис, Училище, Игра на игри!']
}
const speed = 100;
const delay = 1000;
let index = 0;
let textIndex = 0;
let currentOption = 'en';
let texts = textsObj[currentOption];


function typeWriter() {
    if (index < texts[textIndex].length) {
        document.getElementById("typing").innerHTML += texts[textIndex].charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(deleteText, delay);
    }
}

function deleteText() {
    const currentText = document.getElementById("typing").innerHTML;
    if (currentText.length > 0) {
        document.getElementById("typing").innerHTML = currentText.substring(0, currentText.length - 1);
        setTimeout(deleteText, speed);
    } else {
        index = 0;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeWriter, delay);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let selectedOption = document.getElementById('select');
    selectedOption.addEventListener('change', (e) => {
        currentOption = e.target.value;
        texts = textsObj[currentOption];
        index = 0;
        textIndex = 0;
        document.getElementById("typing").innerHTML = "";
    })
})

document.addEventListener('DOMContentLoaded', () => {
    let selectedOption = document.getElementById('sel');
    selectedOption.addEventListener('change', (e) => {
        texts = [];
        currentOption = e.target.value;
        texts = textsObj[currentOption];
        index = 0;
        textIndex = 0;
        document.getElementById("typing").innerHTML = "";
    })
})


document.addEventListener("DOMContentLoaded", typeWriter);
let cIndex = 1;
let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
    showSlides(slideIndex += n);
}


function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " active";
}

showCertificateSlides(cIndex);

function plusCertificateSlides(n) {
    showCertificateSlides(cIndex += n);
}

function currentCertificateSlide(n) {
    showCertificateSlides(cIndex = n);
}

function showCertificateSlides(n) {
    let i;
    let slides = document.getElementsByClassName("certificateSlides");
    let dots = document.getElementsByClassName("dots");
    if (n > slides.length) {cIndex = 1}
    if (n < 1) {cIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[cIndex-1].style.display = "flex";
    dots[cIndex-1].className += " active";
}

