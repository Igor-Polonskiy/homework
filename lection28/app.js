const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './index.html'));
});
app. get('/style.css', (req, res) => {
    res.sendFile(path.resolve(__dirname, './style.css'));
});
app.get('/script.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, './script.js'));
});

app.get('/request/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './response.json'))
});

app.get('/serviceavailable/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './response1.json'))
});
app.get('/getinfo/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './response2.json'))
});
app.get('/getdescription/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './response3.json'))
});
app.post('/request/', (req, res) => {
    setTimeout(() => {
        res.sendFile(path.resolve(__dirname, './response.json'))
    }, 5000);
});

app.listen(4040, () => console.log('App listening on port 4040'));
