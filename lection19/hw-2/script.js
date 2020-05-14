const form = document.querySelector('form');

form.addEventListener('submit', function onSubmit(e) {
    e.preventDefault();

    const numberA = document.querySelector('#numberA');
    const numberB = document.querySelector('#numberB');

    houseWork(numberA.value, numberB.value);
});
