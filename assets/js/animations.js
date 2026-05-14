/* 
    Freelance Headless CMS Implementation Specialist
    GSAP Animation Logic - animations.js
*/

document.addEventListener('DOMContentLoaded', () => {
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Hero Section Animations
    const heroTl = gsap.timeline();
    heroTl.from('.hero-title', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power4.out'
    })
    .from('.hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power4.out'
    }, '-=0.6')
    .from('.hero .btn', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power4.out'
    }, '-=0.4');

    // Section Fade-ups
    gsap.utils.toArray('.fade-up').forEach(element => {
        gsap.to(element, {
            scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out'
        });
    });

    // Dashboard Card Reveals
    gsap.from('.dashboard-preview', {
        scrollTrigger: {
            trigger: '.dashboard-preview',
            start: 'top 80%'
        },
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'expo.out'
    });

    // Logo hover micro-animation
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('mouseenter', () => {
            gsap.to('.logo span', { color: '#8B5CF6', scale: 1.1, duration: 0.3 });
        });
        logo.addEventListener('mouseleave', () => {
            gsap.to('.logo span', { color: '#7C3AED', scale: 1, duration: 0.3 });
        });
    }
});
