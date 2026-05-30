const menuIcon = document.querySelector('#menu-icon');
const body = document.querySelector('body')
const navLinks = document.querySelector('.nav-links');

const classActive = 'active';

menuIcon.onclick = () => {
    navLinks.classList.toggle(classActive);
}

anyLink.onclick = () => {
    navLinks.classList.remove(classActive);
}