gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#body"),
    smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#body" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#body", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#body").style.transform ? "transform" : "fixed"
});

// Typed JS
var typed = new Typed('#element', {
    strings: ['Full Stack Developer', 'Coder', 'Musician'],
    typeSpeed: 90,
    backSpeed: 70,
    loop: true
});
// Typed JS

// technical skills logo
gsap.from(".techLogo", {
    y: 100,
    stagger: 0.09,
    delay: 1,
    duration: .5,
    opacity: 0,
    scrollTrigger: {
        trigger: ".techLogo",
        scroller: "body",
    }
})
gsap.from("#ts-text", {
    x: -500,
    delay: .5,
    stagger: 1.3,
    duration: .5,
    opacity: 0,
    scrollTrigger: {
        trigger: "#ts-text",
        scroller: "body",
    }
})



// GSAP
gsap.from("#home", {
    x: -100,
    delay: .3,
    duration: 1.5,
    opacity: 0,
})
gsap.from("#about", {
    x: -100,
    delay: .3,
    duration: .5,
    opacity: 0,
    scrollTrigger: {
        trigger: "#about",
        scroller: "body",
        scrub: 2,
        end: "top 30%"
    }
})
gsap.from("#left", {
    x: -100,
    delay: .3,
    duration: .8,
    opacity: 0
})
gsap.from("#demoImg", {
    x: 150,
    delay: .3,
    duration: 1,
    opacity: 0
})
gsap.from("#about-img", {
    x: -100,
    delay: .2,
    duration: .8,
    opacity: 0,
    scrollTrigger: {
        trigger: "#about-img",
        scroller: "body",
        scrub: 2,
        end: "top 30%"
    }
})
gsap.from("#about-me", {
    x: 150,
    delay: .2,
    duration: .8,
    opacity: 0,
    scrollTrigger: {
        trigger: "#about-me",
        scroller: "body",
        end: "top 30%",
        scrub: 2,
    }
})
gsap.from("#proff-skill-text", {
    x: -100,
    delay: .2,
    duration: .8,
    opacity: 0,
    scrollTrigger: {
        trigger: "#proff-skill-text",
        scroller: "body",
        end: "top 30%",
        scrub: 2
    }
})
gsap.from(".l-skills", {
    x: -100,
    delay: .2,
    duration: .8,
    opacity: 0,
    scrollTrigger: {
        trigger: ".l-skills",
        scroller: "body",
        scrub: 2,
        end: "top 30%"
    }
})

//Split-text
const logo = new SplitType('#logo');
gsap.to('.char', {
    y: 0,
    stagger: 0.05,
    delay: 0.2,
    duration: .1,
})
gsap.from('.line', {
    y: -200,
    stagger: 0.05,
    delay: 0.2,
    duration: .5,
})

// Timeline
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".main-c",
        // markers: true,
        start: "50% 50%",
        end: "100% 50%",
        scrub: 2,
        pin: true
    }
});
tl.
    to("#top", {
        top: "-50%"
    }, 'a')
    .to("#bottom", {
        bottom: "-50%"
    }, 'a')
    .to("#top-h", {
        bottom: "30%"
    }, 'a')
    .to("#bottom-h", {
        bottom: "-70%"
    }, 'a')