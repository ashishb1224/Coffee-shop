const menuOpenButton = document.getElementById('menu-open-button');
const menuCloseButton = document.getElementById('menu-close-button');
menuOpenButton.addEventListener('click', () => {
    // toogle mobile menu visibility
    document.body.classList.toggle('show-mobile-menu');
});
menuCloseButton.addEventListener('click', () => menuOpenButton.click()
);