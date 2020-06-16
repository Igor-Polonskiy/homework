const xhrStart = () => {
    console.log('before request');
    const xhr = new XMLHttpRequest();
    // AJAX
    xhr.open('POST', '/request/', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    xhr.responseType = 'json';
    xhr.send(JSON.stringify({ id: 12345, isAvailable: true }));
    xhr.onload = () => {
        console.log(xhr.response);
        console.log(xhr.status);
        console.log(xhr.statusText);
    };
    console.log('after request');
};

const fetchStart = () => {
    fetch('/request/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        },
        body: JSON.stringify({ id: 12345, isAvailable: true }),
    })
        .then(resp => resp.json())
        .then(respFormatted => console.log(respFormatted))
        .catch(() => console.log('server error'))
};


const axiosStart = () => {
    axios.get('/request/')
        .then(resp => console.log(resp.data))
        .catch(er => console.log(er))
};

const isAvailable = true;

const promise = new Promise((resolve, reject) => {
    const obj = {
        foo: 'foo',
        bar: 'qwerty'
    };
    if (isAvailable) {
        resolve(obj);
    } else {
        reject(new Error('some error'));
    }
});

const resultFormatted = (obj) => {
    const message = `Arg1 = ${obj.foo} && Arg2 = ${obj.bar}`

    return Promise.reject(message);
};

const testPromise = () => {
    promise
        .finally(() => console.log('finally'))
        .then(resultFormatted)
        .then(fulfilled => {
        console.log(fulfilled)
    })
        .catch(err => console.log(err))
        .finally(() => console.log('finally'))
};

const testPromiseAllResolved = () => {
    Promise.all([
        axios.post('/request/'),
        axios.get('/request/'),
        axios.post('/request/'),
    ])
        .then(() => console.log('Promise fulfilled'))
        .catch(() => console.log('Promise rejected - server error'));
};

// Зафейлится из-за гет запроса
const testPromiseAllRejected = () => {
    Promise.all([
        axios.post('/request/'),
        axios.get('/request1/'),
        axios.post('/request/'),
    ])
        .then(() => console.log('Promise fulfilled'))
        .catch(() => console.log('Promise rejected - server error'));
};

const testPromiseAllWithAsync = async () => {
    const [result1, result2, result3] = await Promise.all([
        axios.post('/request/'),
        axios.get('/request/'),
        axios.post('/request/'),
    ]);

    console.log(result1);
    console.log(result2);
    console.log(result3);
};

const testPromiseAllSettled = async () => {
    const [result1, result2, result3] = await Promise.allSettled([
        axios.post('/request/'),
        axios.get('/request1/'), // Запрос зафейлится, но промис не завершится, будет ждать остальных
        axios.post('/request/'),
    ]);

    console.log(result1);
    console.log(result2);
    console.log(result3);
};

const testPromiseRace = () => {
    return Promise.race([
        new Promise((resolve, reject) => setTimeout(() => resolve('delay 3000'), 3000)),
        new Promise((resolve, reject) => setTimeout(() => resolve('delay 1000'), 1000)),
        new Promise((resolve, reject) => setTimeout(() => resolve('delay 5000'), 5000)),
        new Promise((resolve, reject) => setTimeout(() => resolve('delay 100'), 100)),
    ]).then((res) => console.log(res));
};

const testAsync = async () => {
    const result = await axios.post('/request/', { id: 12312313 });
    const resultNew = await axios.post('/request/', result.data);
    const resultNewNew = await axios.post('/request/', resultNew.data);

    return resultNewNew.data;
};




