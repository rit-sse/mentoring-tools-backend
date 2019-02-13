/**
 * Backend of mentoring-tools react app.
 */
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'test',
    });
});

app.listen(5000, () => {
    console.log('Server Running');
});
