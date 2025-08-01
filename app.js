const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');

//end section
const section = document.querySelector('section');
const end = section.querySelector('h1');

//scroll magic
const controller = new ScrollMagic.Controller();


//Scenes
let scene = new ScrollMagic.Scene({
    duration: 2000,
    triggerElement: intro,
    triggerHook: 0
})
.addIndicators()
.setPin(intro)
.addTo(controller);


//text animation


let scene2 = new ScrollMagic.Scene({
    duration: 2000,
    triggerElement: intro,
    triggerHook: 0
})
.addTo(controller); 

scene2.on("progress", function(e) {
    text.style.opacity = 1 - e.progress;
});


//image animation
const scrollImg = document.querySelector('.scroll-img');

let imgScene = new ScrollMagic.Scene({
    duration: 2000,
    triggerElement: intro,
    triggerHook: 0
})
.addTo(controller);

imgScene.on("progress", function(e) {
    TweenMax.to(scrollImg, 0, {
        x: -window.innerWidth * e.progress,
    });
});



//video animation
let accelamount = 0.5;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
    scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    console.log(scrollpos, delay);

    video.currentTime = delay;
}, 33.3);