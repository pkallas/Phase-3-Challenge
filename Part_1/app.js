const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const daysOfWeek = {
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
  sunday: 7
};

app.listen(3000, () => {
  console.log('Listening on localhost://3000');
});

app.get('/api/days', (request, response) => {
  response.send('Now try adding a spefic day after days using this format: /monday')
});

app.get('/api/days/:day', (request, response) => {
  let dayOfWeek = request.params.day.toLowerCase();
  if (daysOfWeek[dayOfWeek] === undefined) {
    response.status(400).send(`${dayOfWeek} is not a valid day!`)
  }
  else {
    response.send(`${daysOfWeek[dayOfWeek]}`)
  }
});

app.use(bodyParser.json());

app.post('/api/array/concat', (request, response) => {
  let firstArray = request.body['array1'];
  let secondArray = request.body['array2'];
  if (Array.isArray(firstArray) === false) {
    response.status(400).json({"error": "Input data should be of type Array."})
  }
  else if (Array.isArray(secondArray) === false) {
    response.status(400).json({"error": "Input data should be of type Array."})
  }
  else {
    let concatedArray = firstArray.concat(secondArray)
    response.json({"result": concatedArray})
  }
});
