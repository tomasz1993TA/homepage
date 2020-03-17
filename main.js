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