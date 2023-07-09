// console.log(document);
const el = document.body.getElementsByTagName('h1');
// console.log(el)

const header = document.getElementById('header');
// console.log(header)

const listItem = document.getElementsByClassName('list-item');
// console.log(listItem);

const headerEl = document.querySelector('#header');
console.log(headerEl);

const listItemEl = document.querySelectorAll('.list-item');
// console.log(listItemEl);
for(let el of listItemEl){
    console.dir(el);
}

const listfirst = document.querySelector('ul li:first-of-type');
const listlast = document.querySelector('ul li:last-of-type');

// console.log(listfirst);
// console.log(listlast);

