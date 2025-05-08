const express = require('express');
const router = express.Router();

const subject = '{"contactSubject": ["General Enquery","Classes","Schedules","Instructor","Prices","Other"]}' ;
const subject_file = require('../data/contact_subject.json');

router.get('/', (req, res) => {
  //res.end(subject);
  res.json(subject_file);
});


module.exports = router;