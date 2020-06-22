 const push = document.querySelector('button');
 const answer = document.querySelector('.answer');

 push.addEventListener('click', (e) => {
     const req = window.frames[0].document.querySelector('.request')
     let number = prompt("Введите число", );
     if (number.match(/\D/i) == null) {
         req.innerText = number;
         answer.innerText = (+req.innerText + 1);
     } else alert('введите ЧИСЛО! ЦИФРАМИ!!');
 })

 window.onbeforeunload = function () {
     return ''
 };