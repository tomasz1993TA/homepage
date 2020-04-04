console.log('Siema!');
const name = 'Tomek';
const age = 26;
console.log(name);
console.log(age);

console.log(`Nazywam się ${name} i mam ${age} lat.`);

const about = document.querySelector('.about__paragraph--js');

console.log(about.innerHTML);

about.innerHTML = `<strong>Nazywam</strong> się ${name} i mam ${age} lat.`;

const paragraphs = document.querySelectorAll('p');

console.log(paragraphs);
console.log(paragraphs[0]);

let nameWelcome, ageWelcome;
nameWelcome = 'Tomasz';
ageWelcome = 26;
function Welcome(name, age) {
    return console.log(`Serdecznie witamy ${nameWelcome} ${ageWelcome} lat!!!`);
}
Welcome();

const welcome2 = (name, age) => {
    console.log(`Witaj ${name}, masz ${age} lat!`);
}

welcome2(nameWelcome, ageWelcome);

const button = document.querySelector('.header__button--js');
console.log(button);

button.addEventListener('click', (e) => {
    const header = document.querySelector('.header__title--js');
    header.innerHTML = 'Witam na stronie Tomasza';
    header.classList.toggle('header__title--red');
    if (header.classList.contains('header__title--red')) {
        console.log('jest klasa');    
    } else {
        console.log('brak klasy');
    }
});

const navigationSwitcher = document.querySelector('.navigation__switcher--js');

navigationSwitcher.addEventListener('click', (e) => {
    const navigationList = document.querySelector('.navigation__list--js');
    navigationList.classList.toggle('navigation__list--visible');    
    
    if (navigationSwitcher.innerHTML == '☰') {
        navigationSwitcher.innerHTML = '🗙';
    } else {
        navigationSwitcher.innerHTML = '☰';
    }        
});