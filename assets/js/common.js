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
