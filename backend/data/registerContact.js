const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const {fname, lname, email, occupation, message} = req.body;
    console.log('Content form summited', fname, lname, email, occupation, message);
    res.status(200).json({status : 'Message Received'})


});

module.exports = router ; 