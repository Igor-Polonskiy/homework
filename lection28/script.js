let main = document.querySelector('main');
let text1 = document.createElement('p');
let text2 = document.createElement('p');
main.append(text1, text2);

const serviceavailable = () => {
    return fetch('/serviceavailable/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            },
        })
        .then(resp => resp.json())
        .then(respFormatted => {
            console.log(respFormatted);
            if (respFormatted.isSuccess === false) {
                console.log('Is error');
                text1.append('Произошла ошибка');
                text1.classList.add("red");
                main.append(text1);
                Promise.reject();
                return false;
            }
            return true;
        })
        .catch(() => {
            text1.append('Произошла ошибка');
            text1.classList.add("red");
            main.append(text1);
            return false;
        })
};

const buttonClickHandler = () => {
    text1.innerText = '';
    text2.innerText = '';

    serviceavailable()
        .then(res => res ? res : Promise.reject())
        .then(async () => {
            const [result1, result2] = await Promise.allSettled([
                fetch('/getInfo/')
                .then(resp => resp.ok ? resp.json() : Promise.reject())
                .then(respFormatted => {
                    console.log(respFormatted);
                    return respFormatted;
                }),
                fetch('/getdescription/')
                .then(resp => resp.ok ? resp.json() : Promise.reject())
                .then(respFormatted => {
                    console.log(respFormatted);
                    return respFormatted;
                }),
            ])
            console.log('result1', result1);
            console.log('result2', result2);

            if (result1.status == 'fulfilled' && result1.value.isSuccess == true) {
                text1.append(result1.value.text);
                text1.classList.add("green");
                main.append(text1);
            }

            if (result2.status == 'fulfilled' && result2.value.isSuccess == true) {
                text2.append(result2.value.text);
                text2.classList.add("green");
                main.append(text2);
            }
            if (result1.status == 'rejected' && result2.status == 'rejected') {
                console.log('Server Error');
                text1.append('Server Error');
                text1.classList.add("red");
            }

            if (result1.status == 'fulfilled' && result2.status == 'fulfilled') {
                if (result1.value.isSuccess == false && result2.value.isSuccess == false) {
                    console.log('Server Error');
                    text1.append('Server Error');
                    text1.classList.add("red");
                }
            }
        })

}