//  play sound
function playSound() {
    document.getElementById("CarSound").play();
}

// preloader
setTimeout(function () {
    $('.loader-bg').fadeOut();
}, 1500)

// header animation
const nav = document.querySelector("header");
document.addEventListener("scroll", function () {
    if (scrollY > 30) {
        nav.style.backgroundColor = "#131313";
        nav.style.borderBottom = "3px soild #000";
        nav.style.boxShadow = "0 0 10px #000";
        nav.style.paddingBottom = "20px";
        nav.style.paddingTop = "20px";
    }
    else {
        nav.style.background = "transparent";
        nav.style.borderBottom = "none";
        nav.style.boxShadow = "none";
        nav.style.paddingBottom = "20px";
        nav.style.paddingTop = "20px";
    }
})

// FAQ animations
const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});

// ShowHide function
const password = document.getElementById("password");
const ConfirmPassword = document.getElementById("ConfirmPassword");
const eye = document.getElementById("eye");
function ShowHide() {
    if (password.type == 'password' && ConfirmPassword.type == 'password') {
        password.setAttribute('type', 'text');
        ConfirmPassword.setAttribute('type', 'text');
        eye.style.color = '#d41a23';
        eye.classList.add('hide');
    }
    else {
        password.setAttribute('type', 'password');
        ConfirmPassword.setAttribute('type', 'password');
        eye.style.color = 'rgb(180, 180, 180)';
        eye.classList.remove('hide');
    }
}

// scroll reveal
const sr = ScrollReveal({
    origin: 'left',
    distance: '60px',
    duration: 2500,
    delay: 1500,
    //reset: true
})
// reveal header
sr.reveal("header")
sr.reveal("header .left-section", { delay: 1700 });
sr.reveal("header .right-section", { origin: 'right', delay: 1700 });
sr.reveal("header .mid-section", { origin: 'top', delay: 1700 });
// reveal main content
sr.reveal(".main-text");
sr.reveal(".text .specs", { delay: 1600 });
sr.reveal(".hero-img", { origin: 'right', delay: 1800 });
sr.reveal(".main-content .splashes .colored-rec", { delay: 2000 });
sr.reveal(".main-content .splashes .white-rec", { delay: 1200 });
sr.reveal(".main-content .red-rectangle", { origin: 'right', delay: 1500 });
sr.reveal(".main-content .red-border", { origin: 'right', delay: 2700 });
sr.reveal(".main-content .black-border", { origin: 'bottom', delay: 2700 });
sr.reveal(".main-content .line", { delay: 1900 });
sr.reveal(".main-content .buttons", { delay: 2200 });
sr.reveal(".main-content .scroll", { origin: "bottom", delay: 2200 });
// reveal titles
sr.reveal(".upper-section .left-section", { delay: 300 });
sr.reveal(".upper-section .right-section", { origin: "right", delay: 300 });
// reveal services
sr.reveal(".services .content", { interval: 300, origin: "top" });
// reveal advantage
sr.reveal(".advantage .card", { interval: 200, delay: 300, origin: "top" });
// reveal quote
sr.reveal(".quote .bg", { origin: "top", delay: 400 });
// reveal how it works
sr.reveal(".how-it-works .card", { interval: 200, delay: 300, origin: "top" });
// reveal gallery
sr.reveal(".gallery .img-box", { interval: 100, delay: 300, origin: "top" });
// reveal faqs
sr.reveal(".questions .faq", { interval: 100, delay: 1200, origin: "top" });
// reveal footer
sr.reveal(".footer .upper", { interval: 100, delay: 600, origin: "top" });
// reveal image 
sr.reveal(".footer .image", { interval: 100, delay: 600, origin: "right" });
// reveal form
sr.reveal(".lower .form", { interval: 100, delay: 600, origin: "left" });
// reveal line 
sr.reveal(".footer .line", { delay: 700 });
// reveal down footer
sr.reveal(".footer .dcontent", { interval: 100, delay: 500, origin: "bottom" });
// reveal contact info
sr.reveal(".container .contactInfo", { interval: 100, delay: 300, origin: "left" });
// reveal contact form
sr.reveal(".container .contactForm", { interval: 100, delay: 300, origin: "right" });
// reveal loginForm 
sr.reveal(".loginContainer .loginForm", { interval: 100, delay: 300, origin: "left" });
// reveal welcomeForm
sr.reveal(".loginContainer .welcomeForm", { interval: 100, delay: 300, origin: "right" });
// reveal signupForm 
sr.reveal(".signupContainer .signupForm", { interval: 100, delay: 300, origin: "right" });
// reveal welcomeForm
sr.reveal(".signupContainer .welcomeForm", { interval: 100, delay: 300, origin: "left" });