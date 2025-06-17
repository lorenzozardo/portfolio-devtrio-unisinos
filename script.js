// Abre/fecha o menu mobile
const toggle = document.getElementById('mobileToggle');
const menu = document.getElementById('navMenu');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Fecha o menu quando clica em algum link
document.querySelectorAll('.navLink').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
})