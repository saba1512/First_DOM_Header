const themeSwitch = document.querySelector('.switch input');

themeSwitch.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});

const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-menu');

burger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    burger.classList.toggle('active');
});