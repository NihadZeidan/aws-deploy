'use strict';

const PORT = process.env.PORT || 3000

const express = require('express');
const app = express();


app.listen(PORT, () => console.log("listening"));



app.get('/', (req, res) => {
    res.send('I have deployed this using AWS Elastic Beanstalk');
});


// -----------------------------------------------------------