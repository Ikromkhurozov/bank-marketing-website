"use strict";

// const toggleBtn = documents.getElementsByClassName('menu-btn')[0]
// const navbarLinks = documents.getElementsByClassName('nav__links')[0]

// toggleBtn.addEventListener('click', () => {
//     navbarLinks.classList.toggle('active')
// });

///////////////////////////////////////
// Modal window
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');


const openModal = function (e) {
    // e.peventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

///////////////////////////////////
// Scrolling
btnScrollTo.addEventListener('click', function (e) {    
    section1.scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.nav__links').addEventListener('click', function(e) {
    e.preventDefault();

    // Matching strategy
    if (e.target.classList.contains('nav__link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior: 'smooth'});
    }
});

//Tabbed component
tabsContainer.addEventListener('click', function(e) {
    const clicked = e.target.closest('.operations__tab');

    // Guard clause
    if(!clicked) return;

    // Remove active classes
    tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
    tabsContent.forEach(content => content.classList.remove('operations__content--active'))
    
    // Active tab
    clicked.classList.add('operations__tab--active');

    // Activate content area
    document
        .querySelector(`.operations__content--${clicked.dataset.tab}`)
        .classList.add('operations__content--active')
    ;
});