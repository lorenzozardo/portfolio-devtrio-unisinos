// Abre/fecha o menu mobile
const toggle = document.querySelector('.mobileMenuToggle');
const menu = document.querySelector('.navMenu');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active')
})

// Fecha o menu quando clica em algum link
document.querySelectorAll('.navLink').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active')
    })
})