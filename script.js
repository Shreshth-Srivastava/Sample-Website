const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

const navbar = document.querySelector("#navbar");
const nav = document.querySelector('nav');
var flag = 0;
function a(){
    if(!flag){
        navbar.style.height = "10vh";
        nav.style.height = "20vh";
        flag = 1;
    }
    else{
        navbar.style.height = "0";
        nav.style.height = "6vh";
        flag = 0;
    }
}

const about_btn = document.querySelector('#about');
const reviews_btn = document.querySelector('#services');
const contact_btn = document.querySelector('#contact');
// const main = document.querySelector('#main');

about_btn.addEventListener('click',()=>{
    const About = document.querySelector('#About');
    scroll.scrollTo(About,-50);
})

reviews_btn.addEventListener('click',()=>{
    const Reviews = document.querySelector('.page-title');
    scroll.scrollTo(Reviews,-50);
})

contact_btn.addEventListener('click',()=>{
    const Contact = document.querySelector('footer');
    scroll.scrollTo(Contact,-50);
})

function scrollToTop(){
    const Card = document.querySelector('#Card');
    scroll.scrollTo(Card,-150);
}

// let tl = gsap.timeline();

// tl.to('.review:nth-child(1)',{
//     transform: "translateX(100%)",
//     duration: 15,
//     opacity: '1'
// })