console.log(' 1) Вёрстка валидная +10 \n 2) Вёрстка семантическая +18 (- 2 балла, больше пяти кнопок button) \n 3) Вёрстка соответствует макету +48 \n 4) Требования к CSS +12 \n 5) Интерактивность, реализуемая через css +20 \n Итого: 108');

let burgerButton = document.querySelector('.burger-button');
let menu = document.querySelector('.menu');

burgerButton.addEventListener('click', function(){
    burgerButton.classList.toggle('active');
    menu.classList.toggle('active');
})

