gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed"*/
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();


// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

var vw = window.innerWidth;
var vh = window.innerHeight;

window.addEventListener('load',()=>{
    const loader = document.querySelector('#loader');
    const main = document.querySelector('#main');
    main.style.maxHeight = "400vh";
    loader.style.display = "none";
    if(vw > vh){
        gsap.from('#about-1>h1',{
            y: 100,
            duration: .5,
            // delay: .5,
            opacity: 0,
            scrollTrigger:{
                trigger: '#about-1>h1',
                scroller: '#main',
                start: "top 100%",
                // markers: true,
            }
        })
    
        gsap.from('#about-2>p',{
            y: -500,
            duration: 2.5,
            // delay: .5,
            opacity: 0,
            scrollTrigger:{
                trigger: '#about-2>p',
                scroller: '#main',
                start: "top 30%",
                // markers: true,
            }
        })
    
        gsap.from('#card-1,#card-3',{
            x: -1500,
            duration: 2,
            // opacity: 0,
            scrollTrigger:{
                trigger: "#card-1,#card-3",
                scroller: "#main",
                start: "start 60%",
                // markers: true,
            }
        })
    
        gsap.from('#card-2,#card-4',{
            x: 1500,
            duration: 2,
            // opacity: 0,
            scrollTrigger:{
                trigger: "#card-1,#card-3",
                scroller: "#main",
                start: "start 60%",
                // markers: true,
            }
        })
    
        gsap.from('.page-title>h1',{
            y: 100,
            duartion: .5,
            scrollTrigger:{
                trigger: '.page-title>h1',
                scroller: '#main',
                start: "top 100%",
                // markers: true,
            }
        })
    }
    else{
        gsap.from('#about-1>h1',{
            y: 100,
            duration: 1,
            // delay: 2.5,
            opacity: 0,
            scrollTrigger:{
                trigger: '#about-1>h1',
                scroller: '#main',
                start: "top 100%",
                // markers: true,
            }
        })
    
        gsap.from('#about-2>p',{
            y: -500,
            duration: 2,
            // delay: 2.5,
            opacity: 0,
            scrollTrigger:{
                trigger: '#about-2>p',
                scroller: '#main',
                start: "top 110%",
                // markers: true,
            }
        })
    
        gsap.from('#card-1,#card-3',{
            x: -1500,
            duration: 2,
            // opacity: 0,
            scrollTrigger:{
                trigger: "#card-1,#card-3",
                scroller: "#main",
                start: "start 40%",
                markers: true,
            }
        })
    
        gsap.from('#card-2,#card-4',{
            x: 1500,
            duration: 2,
            // opacity: 0,
            scrollTrigger:{
                trigger: "#card-1,#card-3",
                scroller: "#main",
                start: "start 40%",
                markers: true,
            }
        })
    
        gsap.from('.page-title>h1',{
            y: 100,
            duration: 2,
            // delay: .3,
            scrollTrigger:{
                trigger: '.page-title>h1',
                scroller: '#main',
                start: "top 80%",
                // markers: true,
            }
        })
    }
})

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
    // scroll.scrollTo(About,-50);
    locoScroll.scrollTo(About,-50);
})

reviews_btn.addEventListener('click',()=>{
    const Reviews = document.querySelector('.page-title');
    // scroll.scrollTo(Reviews,-50);
    locoScroll.scrollTo(Reviews,-50);
})

contact_btn.addEventListener('click',()=>{
    const Contact = document.querySelector('footer');
    // scroll.scrollTo(Contact,-50);
    locoScroll.scrollTo(Contact,-50);
})

function scrollToTop(){
    const Card = document.querySelector('#Card');
    // scroll.scrollTo(Card,-150);
    locoScroll.scrollTo(Card,-150);
}

const Reviews = document.querySelector('#reviews');
const review = document.querySelectorAll('.review');
Reviews.addEventListener("mouseover",()=>{
    review.forEach(element => {
        element.style.animationPlayState = 'paused';
    });
})

Reviews.addEventListener("mouseleave",()=>{
    review.forEach(element => {
        element.style.animationPlayState = 'running';
    });
})