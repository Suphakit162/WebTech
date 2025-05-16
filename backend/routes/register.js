const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.post('/', (req, res) => {
  const { fname, lname, email, password, occupation } = req.body;

  // ตรวจสอบว่า field ไหนขาด
  if (!fname || !lname || !email || !password || !occupation) {
    return res.status(400).json({ message: 'Please fill in all fields.' });
  }

  const filePath = path.join(__dirname, '../data/user.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading user.json:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }

    let users = [];
    try {
      users = JSON.parse(data);
    } catch (error) {
      console.error('Error parsing user.json:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }

    // เช็คซ้ำ email
    if (users.find(user => user.email === email)) {
      return res.status(400).json({ message: 'Email already registered.' });
    }

    // เพิ่ม user ใหม่
    users.push({ fname, lname, email, password, occupation });

    // เขียนกลับไฟล์
    fs.writeFile(filePath, JSON.stringify(users, null, 2), err => {
      if (err) {
        console.error('Error writing user.json:', err);
        return res.status(500).json({ message: 'Failed to save user' });
      }

      console.log(`✅ User saved: ${email}`);
      return res.json({ message: 'Registration successful.' });
    });
  });
});

module.exports = router;