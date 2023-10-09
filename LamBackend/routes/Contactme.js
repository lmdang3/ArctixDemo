const express = require("express");
const router = express.Router();
const exceljs = require("exceljs"); // excel libary
const path = require("path"); // Node.js path module
const xml2js = require("xml2js"); // XML to JSON converter

// Define the relative path to the existing Excel file
const excelFilePath = path.join(__dirname, "../../Contact.xlsx");

// Create a route to handle POST requests to add a new contact
router.post('/api/add', (req, res) => {
    try {

  
      if (req.is('application/json')) {
        // Handle JSON data
        const { fullName, emailAddress, message } = req.body;
  
        // Load the existing Excel file
        const workbook = new exceljs.Workbook();
        workbook.xlsx.readFile(excelFilePath).then(() => {
          const worksheet = workbook.getWorksheet(1); // Assuming the data is in the first worksheet
          worksheet.addRow([fullName, emailAddress, message]);
          return workbook.xlsx.writeFile(excelFilePath);
        }).then(() => {
          res.status(201).json({ message: 'Contact added and data logged to Excel sheet.' });
        }).catch(error => {
          console.error(error);
          res.status(500).json({ error: 'An error occurred.' });
        });
      } else {
        res.status(400).json({ error: 'Unsupported Content-Type.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred.' });
    }
  });
  

module.exports = router;
