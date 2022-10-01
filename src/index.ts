import LocomotiveScroll from 'locomotive-scroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const scroll = new LocomotiveScroll({
    el: document.querySelector('.smooth-scroll'),
    smooth: true
});