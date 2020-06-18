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



app.listen(4040, () => console.log('App listening on port 4040'));

