

let btn = document.querySelector('button');

let name = document.querySelector('.name');
let age = document.querySelector('.age');
let city = document.querySelector('.city');
let sport = document.querySelector('.sport');
let torist = document.querySelector('.torist');
let sun = document.querySelector('.sun');
let mom = document.querySelector('.mom');

if (Cookies.get('name') === undefined) {
  console.log('nope');
} else cookieGet();


btn.addEventListener('click', (event) => {
  Cookies.set('name', name.value, { expires: 30 });
  Cookies.set('age', age.value, { expires: 30 });
  Cookies.set('city', city.value, { expires: 30 });
  Cookies.set('sport', sport.checked, { expires: 30 });
  Cookies.set('torist', torist.checked, { expires: 30 });
  Cookies.set('sun', sun.checked, { expires: 30 });
  Cookies.set('mom', mom.checked, { expires: 30 });
});

function cookieGet() {
  name.value = Cookies.get('name');
  age.value = Cookies.get('age');
  city.value = Cookies.get('city');

  if(Cookies.get('sport')==='false'){
    sport.checked = false;
  }
  else sport.checked = true;

  if(Cookies.get('sun')==='false'){
    sun.checked = false;
  }
  else sun.checked = true;

  if(Cookies.get('torist')==='false'){
    torist.checked = false;
  }
  else torist.checked = true;

  if(Cookies.get('mom')==='false'){
    mom.checked = false;
  }
  else mom.checked = true;

}

