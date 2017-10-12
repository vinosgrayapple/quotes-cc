const continueBtn = document.querySelector('#continue');
const returnBtn = document.querySelector('#return');
const randomBtn = document.querySelector('#random');
const app = document.querySelector('#app');
const quote = document.querySelector('.quote');

continueBtn.addEventListener('click', () => {
    quote.innerHTML = "Hello" + Math.random()*10;
});