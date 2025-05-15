const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

// อ่าน JSON ไฟล์
const filePath = path.join(__dirname, '../../json/occupation-cat.json');

// สร้าง Web service ที่ให้บริการข้อมูลอาชีพ
router.get('/', (req, res) => {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const jsonData = JSON.parse(data);
    res.json(jsonData);
  } catch (err) {
    console.error("Error reading occupation-cat.json:", err.message);
    res.status(500).json({ error: "Cannot load occupation categories" });
  }
});

module.exports = router;
