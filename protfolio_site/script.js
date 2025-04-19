const texts = ["I'm Rosen Ivanov!", 'I am 16 years old!',  'I am learning to be full stack engineer!', 'Hobbies: Tennis, School, Playing games!'];
const speed = 100;
const delay = 1000;
let index = 0;
let textIndex = 0;

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

document.addEventListener("DOMContentLoaded", typeWriter);

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