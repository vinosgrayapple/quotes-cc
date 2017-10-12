const continueBtn = document.querySelector('#continue');
const returnBtn = document.querySelector('#return');
const randomBtn = document.querySelector('#random');
const app = document.querySelector('#app');
const quote = document.querySelector('.quote span');


const quotes = [
    {
        text  : "В жизни должна быть любовь - одна великая любовь за всю жизнь, это оправдывает беспричинные приступы отчаяния, которым мы подвержены.",
        author: "Альберт Камю"
    },
    {
        text  : "Хочу хронического здоровья, прогрессирующего счастья, рецидивирующего успеха, гипертонической зарплаты, и вечно беременного кошелька без угрозы выкидыша!",
        author: "Альберт Камю"
    },  
    {
        text  : "- Мам, скоро родительское собрание в школе, и я хотел бы анонсировать готовящиеся информационные атаки на меня.",
        author: "Альберт Камю"
    }
];
document.addEventListener("DOMContentLoaded", () => {
    quote.innerHTML = `${quotes[0].text} <br> ${quotes[0].author}`;
});


continueBtn.addEventListener('click', () => {
    quote.innerHTML = `${quotes[0].text}`;
});