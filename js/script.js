window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.list_menu'),
    menuItem = document.querySelectorAll('.item_menu'),
    hamburger = document.querySelector('.burger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('burger_active');
        menu.classList.toggle('list_menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('burger_active');
            menu.classList.toggle('list_menu_active');
        })
    })
})