const hamburgerButtons = document.querySelectorAll('.hamberger-menu');
const slider = document.querySelector('.hamburger-menu-slider');
hamburgerButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        slider.classList.toggle('active');
    })
})