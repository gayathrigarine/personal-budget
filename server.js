// Budget API

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const budget = {
    myBudget: [
        {
            title: 'Eat out',
            budget: 25
        },
        {
            title: 'Rent',
            budget: 275
        },
        {
            title: 'Grocery',
            budget: 110
        },
        {
            title: 'play',
            budget: 120
        },
        {
            title: 'work',
            budget: 100
        },
        {
            title: 'stocks',
            budget: 150
        },
        {
            title: 'cosmetics',
            budget: 190
        },
        {
            title: 'movies',
            budget: 85
        },
    ]
};

app.use('/', express.static('public'));

app.get('/hello', (req, res) => {
    res.send('Welcome to the Budget API');
});

app.get('/budget', (req, res) => {
    res.json(budget);
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});