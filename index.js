const app = require('express')();
const PORT = process.env.PORT || 8080;

app.listen(
    PORT,
    () => console.log(`Server is listening on port ${PORT}`)
)


var randMorning = [
    'Good morning! Make sure to do your morning grounding!',
    'Today is going to be a great day, and do not forget your morning grounding!',
    'Its time for your morning grounding!',
    'Grounding time!',

];

var randAfternoon = [
    'Good afternoon! Make sure to do your afternoon grounding!',
    'Today is going to be a great day, and do not forget your afternoon grounding!',
    'Its time for your afternoon grounding!',
    'Grounding Time!'
];

var randEvening = [
    'Good evening! Make sure to do your evening grounding!',
    'Today is going to be a great day, and do not forget your evening grounding!',
    'Its time for your evening grounding!',
    'Grounding Time!'
    

];


function randMorn() {
    return randMorning[Math.floor(Math.random() * randMorning.length)];
};

function randAfter() {
    return randAfternoon[Math.floor(Math.random() * randAfternoon.length)];
};

function randEven() {
    return randEvening[Math.floor(Math.random() * randEvening.length)];
};



app.get('/morning', (req, res) => {
    res.status(200).send({
        affirmation: randMorn()
    })

});

app.get('/afternoon', (req, res) => {
    res.status(200).send({
        affirmation: randAfter()
    })

});

app.get('/evening', (req, res) => {
    res.status(200).send({
        affirmation: randEven()
    })

});


