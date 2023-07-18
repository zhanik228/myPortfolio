/*=============== Show Menu =============== */
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

/*===== Menu Show =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

/*===== Hide Show =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/*=============== Remove Menu Mobile =============== */
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  // when we click on each link, we remove the show-menu class
  navMenu.classList.remove('show-menu')
}

navlink.forEach((n) => n.addEventListener('click', linkAction))

/*=============== Background Header =============== */

/*=============== Contact Form =============== */

/*=============== Style Switcher =============== */
const styleSwitcherToggle = document.querySelector('.style__switcher-toggler'),
styleSwitcher = document.querySelector('.style__switcher')

styleSwitcherToggle.addEventListener('click', () => {
  styleSwitcher.classList.toggle('open')
})

// hide switcher on scroll
window.addEventListener('scroll', () => {
  if (styleSwitcher.classList.contains('open')) {
    styleSwitcher.classList.remove('open')
  }
})

const alternateStyles = document.querySelectorAll('.alternate-style')

function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute('title')) {
      style.removeAttribute('disabled')
    } else {
      style.setAttribute('disabled', 'true')
    }
  })
}

/*=============== Js render =============== */
const projects = [
  {
    title: 'Ecommerce shop app Admin',
    description: 'You can manage your products, watch statistics and etc.',
    img: './assets/img/projects/ecommerce-admin-navy.vercel.app_75d297e0-df5c-47e4-a033-5c5bedba3205.png',
    stack: ['Typescript', 'Next js', 'React', 'Stripe'],
    type: 'web',
    link: 'https://ecommerce-admin-navy.vercel.app/75d297e0-df5c-47e4-a033-5c5bedba3205'
  },
  {
    title: 'Ecommerce shop app Store',
    description: 'You can manage your products, watch statistics and etc.',
    img: './assets/img/projects/ecommerce-store-ten-theta.vercel.app_.png',
    stack: ['Typescript', 'Next js', 'React', 'Stripe'],
    type: 'web',
    link: 'https://ecommerce-store-ten-theta.vercel.app/'
  },
]
const projectContainer = document.querySelector('.projects__container')
const htmlProjects = projects.map((project) => {
  return `<div class="project__item grid mix ${project.type}">
  <img src="${project.img}" alt="" class="project__img">
  
  <div class="project__data">
    <h3 class="project__title text-lg">${project.title}</h3>
    <p class="project__description">${project.description}</p>
    <h4 class="project__stack text-xs">USED STACK:</h4>
    <ul class="tags text-sm">
      ${project.stack.map((item, index) => {
        return `<li>${item}</li>`
      }).join(' ')}
    </ul>
  
    <a href="${project.link}" target="_blank" class="project__link text-sm">${project.link}</a>
  </div>
  </div>`
}).join(' ')

projectContainer.insertAdjacentHTML("afterbegin", htmlProjects)

/*=============== Mixitup Filter =============== */
let mixerProjects = mixitup('.projects__container', {
  selectors: {
    target: '.project__item'
  },
  animation: {
    duration: 300
  }
});
