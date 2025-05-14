const express = require('express');
const router = express.Router();

const occupation = '{ "occupationCategory": ["Computer","Healthcare","Scientific"]}';
const occupation_file = require('../../json/occupation-cat.json');

router.get('/', (req, res) => {
  //res.end(subject);
  res.json(occupation_file );
});


module.exports = router;