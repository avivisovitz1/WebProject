const express = require('express');
require('dotenv').config();

const app = express();
const { studentRoute, postRoute } = require('./routes');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const init = () => {
  const promise = new Promise((resolve, reject) => {
    const db = mongoose.connection;
    db.on('error', (error) => console.error(error));
    db.once('open', () => { console.log('Connection Success'); });

    mongoose.connect(process.env.DATABASE_URL).then(() => {
      app.use(bodyParser.urlencoded({ extended: true }));
      app.use(bodyParser.json());

      app.use('/student', studentRoute)
      app.use('/post', postRoute);

      resolve(app);
    });
  });

  return promise;
}

module.exports = init;