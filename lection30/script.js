 const push = document.querySelector('button');
 const answer = document.querySelector('.answer');

 push.addEventListener('click', (e) => {
     const req = window.frames[0].document.querySelector('.request')
     let number = prompt("Введите число", );
     if (number == '') {
         alert('введите любое число');
     } else if (number.match(/\D/)) {
         alert(' введите ЧИСЛО! ЦИФРАМИ!!');
     } else if (number.match(/\d/g)[0] == 0 && number.match(/\d/g).length > 1) {
         alert('число не может начинаться с 0');
     } else {
         req.innerText = number;
         answer.innerText = (+req.innerText + 1);
     };

 })

 window.onbeforeunload = function () {
     return ''
 };