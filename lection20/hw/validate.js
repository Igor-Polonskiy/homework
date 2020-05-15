function validate(data) {
    const {
        login,
        password,
        confirmPassword,
        license,
        firstName,
        gender
    } = data;
    let logins = ["beeline", "beeinterns", "bee"];

    if (login) {
        for (let index = 0; index < logins.length; index++) {
            const element = logins[index];
            if (login === element) {
                alert("Такой логин уже существует");
                return;
            }
        }
    }

    if (!login || !password) {
        alert('Укажите логин/пароль');
    } else if (password.length < 6) {
        alert('Пароль должен быть длинной не менее 6 символов');
    } else if (password !== confirmPassword) {
        alert('Пароли должны совпадать');
    } else if (!firstName) {
        alert('Укажите свое имя');
    } else if (!license) {
        alert('Необходимо согласие');
    } else {
        switch (gender) {
            case 'female':
                alert(`Уважаемая ${firstName} , заявка создана`)
                break;

            default:
                alert(`Уважаемый ${firstName} , заявка создана`)
                break;
        }
    }
}