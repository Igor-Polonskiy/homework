const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const objectData = Object.fromEntries(formData.entries());
    objectData.license = document.getElementById('licenseCheckbox').checked;

    validate(objectData)
});
