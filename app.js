const burgerBtn = document.querySelector('.burger')
const closeBtn = document.querySelector('.close-btn')
const navLinks = document.querySelector('.links')

burgerBtn.addEventListener('click', () => {
    navLinks.classList.add('links-active')
    document.body.style.overflow = 'hidden'
})
closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('links-active')
    document.body.style.overflow = 'unset'

})
setInterval(() => {
    Array.from(document.querySelectorAll('.faq-container')).forEach(e => {
        e.style.maxHeight = e.firstElementChild.offsetHeight + 'px'
    })
}, 0)


window.addEventListener('click', (e) => {
    if (e.target.classList.contains('layer')) {
        e.target.parentElement.nextElementSibling.classList.toggle('active-ans')
        e.target.parentElement.parentElement.classList.toggle('faq-active')
    }
})