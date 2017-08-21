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

app.use(bodyParser.urlencoded({ extended: false }));

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
