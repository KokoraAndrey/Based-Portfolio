const menu = document.querySelector('.header__nav');
const burger = document.querySelector('.header__burger');

burger.addEventListener('click', () => {
    menu.classList.toggle('header__nav--open');
    burger.classList.toggle('header__burger--open');
});
