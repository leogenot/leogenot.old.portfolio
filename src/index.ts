import LocomotiveScroll from 'locomotive-scroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".smooth-scroll"),
    smooth: true,
    //lerp: 0.08,
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".smooth-scroll", {
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
            height: window.innerHeight,
        };
    },
    pinType: document.querySelector(".smooth-scroll").style.transform
        ? "transform"
        : "fixed",
});

const vw = (coef) => window.innerWidth * (coef / 100);
const vh = (coef) => window.innerHeight * (coef / 100);

const heroScroller = gsap.timeline({
    paused: true,
    scrollTrigger: {
        trigger: ".hero-header.h-1",
        scroller: ".smooth-scroll",
        pin: ".pin-wrapper",
        start: "top",
        scrub: true,
        end: `${vh(100)}`,
    },
});

heroScroller
    .to(
        [".hero-header.h-1", ".hero-header.h-3"],
        {
            ease: "slow",
            scale: 2,
            y: vh(150),
            xPercent: -150,
        },
        "heroScroll"
    )
    .to(
        ".hero-header.h-2",
        {
            ease: "slow",
            scale: 2,
            y: vh(150),
            xPercent: 150,
        },
        "heroScroll"
    )
    .to(
        "#heroImage",
        {
            ease: "slow",
            scaleY: 2.5,
        },
        "heroScroll"
    )
    .to(
        "#heroImage .image",
        {
            ease: "slow",
            scaleX: 2.5,
            xPercent: 50,
        },
        "heroScroll"
    );

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();