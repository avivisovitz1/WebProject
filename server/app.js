const express = require('express');
const app = express();
const { studentRoute, postRoute } = require('./routes');
const port = process.env.PORT || 3000;

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => { console.log('Connection Success'); });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

app.use('/student', studentRoute)
app.use('/post', postRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});