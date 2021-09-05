const navSlide = () => {   
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links'); 
    const navLinks = document.querySelectorAll('.nav-links li');
    

    /* now to make it so when burger is clicked on the nav link gets class nav active */
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');          /* wont work till you envoke navslide function */
//toggle the nav
navLinks.forEach((link, index) => {
    if (link.style.animation) {
        link.style.animation = ''
    } else {
    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 9 + .6}s`;
    }
    });

    //burger animation
    burger.classList.toggle('toggle');


    });






}

navSlide();

