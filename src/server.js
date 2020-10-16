// For handling internalization but not sure how to do yet
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/locales/add/:lng/:ns', (req, res) => {
  const { lng, ns } = req.params;

  console.log(req.body);
  console.log(lng, ns);

  res.sendStatus(200);
});

app.listen(8000, () => console.log(`Listening!`));
