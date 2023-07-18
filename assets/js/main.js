/*=============== Background Header =============== */
function scrollHeader() {
  const header = document.getElementById('header')
  // when the scroll is greater than 50 viewport height, add the scroll-header  class to header tag
  if (this.scrollY >= 50) header.classList.add('scroll-header')
  else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

/*=============== Active Link =============== */
const navlink = document.querySelectorAll('.nav__link')
function activeLink(e) {
  navlink.forEach((a) => {
    a.classList.remove('active-link')
    e.target.classList.add('active-link')
  })
}

navlink.forEach((a) => {
  a.addEventListener('click', activeLink)
})

/*=============== Project Link =============== */

const linkWork = document.querySelectorAll('.category__btn')
function activeWork(e) {
  linkWork.forEach((a) => {
    a.classList.remove('active-work')
    e.target.classList.add('active-work')
  })
}

linkWork.forEach((a) => {
  a.addEventListener('click', activeWork)
})


/*=============== Contact Form =============== */
const contactForm = document.getElementById('contact-form'),
  contactName = document.getElementById('contact-name'),
  contactEmail = document.getElementById('contact-email'),
  Message = document.getElementById('message'),
  contactMessage = document.getElementById('contact-message')

  const sendEmail = (e) => {
    e.preventDefault()

    // check if the field has a value
    if (contactName.value === '' || contactEmail.value === '' || Message.value === '') {
      // add and remove color
      contactMessage.style.display = "block"
      contactMessage.classList.remove('color-light')
      contactMessage.classList.add('color-dark')

      // show message
      contactMessage.textContent = 'Write all the input fields'
    } else {
      // serviceID - templateID - #form - publickey
      emailjs.sendForm(
        'service_oji1kcr', 
        'template_9koj2nj', 
        '#contact-form', 
        'rbFI_1ITj3IWrPgho'
      ).then(() => {
        // show message and add color
        contactMessage.style.display = "block"
        contactMessage.classList.add('color-light')
        contactMessage.textContent = 'Message sent ✔️'

        // remove message after 5 seconds
        setTimeout(() => {
          contactMessage.textContent = ''
        }, 5000);
      }, 
      (error) => {
        alert('OOPs! SOMETHING WENT WRONG...', error)
      })

      contactName.value = ''
      contactEmail.value = ''
      Message.value = ''
    }
  }

  contactForm.addEventListener('submit', sendEmail)

/*=============== Testimonials Swiper =============== */
