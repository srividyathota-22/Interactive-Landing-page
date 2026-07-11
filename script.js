const button = document.querySelector(".home-content button");

button.addEventListener("click", function() {
    alert("Thank you for choosing Astra Creative Agency!");
});
const counters = document.querySelectorAll(".counter");

let started = false;

window.addEventListener("scroll", () => {

    const statsSection = document.querySelector(".stats");

    const sectionTop = statsSection.offsetTop;

    const screenPosition = window.innerHeight;

    if(window.pageYOffset > sectionTop - screenPosition && !started){

        started = true;

        counters.forEach(counter => {

            const target = +counter.getAttribute("data-target");

            let count = 0;

            const updateCounter = () => {

                count += Math.ceil(target / 50);

                if(count < target){

                    counter.innerText = count;

                    setTimeout(updateCounter, 30);

                } else {

                    counter.innerText = target + "+";

                }

            };

            updateCounter();

        });

    }

});
const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        if(answer.style.display === "block"){

            answer.style.display = "none";

        } else {

            answer.style.display = "block";

        }

    });

});
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if(name === ""){
        alert("Please enter your name");
        return;
    }

    if(email === ""){
        alert("Please enter your email");
        return;
    }

    if(!email.includes("@")){
        alert("Please enter a valid email");
        return;
    }

    if(message === ""){
        alert("Please enter your message");
        return;
    }

    alert("Message Sent Successfully!");

    form.reset();

});
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if(sectionTop < windowHeight - 100){

            section.classList.add("active");

        }

    });

});
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        themeToggle.innerText = "☀️";

    }else{

        themeToggle.innerText = "🌙";

    }

});
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
const textElement = document.getElementById("typing-text");

const texts = [
    "Grow Your Business With Astra",
    "Build Your Brand Online",
    "Boost Your Digital Presence"
];

let textIndex = 0;
let charIndex = 0;

function typeText() {

    if(charIndex < texts[textIndex].length){

        textElement.textContent += texts[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeText, 80);

    } else {

        setTimeout(eraseText, 1500);

    }

}

function eraseText() {

    if(charIndex > 0){

        textElement.textContent = texts[textIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseText, 40);

    } else {

        textIndex++;

        if(textIndex >= texts.length){
            textIndex = 0;
        }

        setTimeout(typeText, 300);

    }

}

typeText();
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});