let btn = document.querySelector('button');

let name = document.querySelector('.name');
let age = document.querySelector('.age');
let city = document.querySelector('.city');
let sport = document.querySelector('.sport');
let torist = document.querySelector('.torist');
let sun = document.querySelector('.sun');
let mom = document.querySelector('.mom');
let form = {}


if (localStorage.getItem('form') != null) {
  form = JSON.parse(localStorage.getItem('form'));
  fillForm();
}

function fillForm() {
  name.value = form.name;
  age.value = form.age;
  city.value = form.city;
  sport.checked = form.sport;
  torist.checked = form.torist;
  sun.checked = form.sun;
  mom.checked = form.mom;
}

btn.addEventListener('click', (event) => {
  saveStorege()
});

function saveStorege() {
  localStorage.form = JSON.stringify({
    name: name.value,
    age: age.value,
    city: city.value,
    sport: sport.checked,
    torist: torist.checked,
    sun: sun.checked,
    mom: mom.checked,
  })
}