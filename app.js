const express = require('express');
const app = express();
const path = require('path');

// Conversion logic
const conversions = require('./conversions');

// Set up middleware
app.use(express.urlencoded({ extended: true }));

// Set up EJS view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (like CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Main Page with options for conversion
app.get('/', (req, res) => {
    res.render('index');
});

// Route for length conversion
app.get('/length', (req, res) => {
    res.render('length');
});

// Handle form submission for length conversion
app.post('/length', (req, res) => {
    const { unit1, unit2, number } = req.body;
    const convertedValue = conversions.convertLength(unit1, unit2, parseFloat(number));
    res.render('length', { unit1, unit2, number, convertedValue });
});

// Route for weight conversion
app.get('/weight', (req, res) => {
    res.render('weight');
});

// Handle form submission for weight conversion
app.post('/weight', (req, res) => {
    const { unit1, unit2, number } = req.body;
    const convertedValue = conversions.convertWeight(unit1, unit2, parseFloat(number));
    res.render('weight', { unit1, unit2, number, convertedValue });
});

// Route for temperature conversion
app.get('/temperature', (req, res) => {
    res.render('temperature');
});

// Handle form submission for temperature conversion
app.post('/temperature', (req, res) => {
    const { unit1, unit2, number } = req.body;
    const convertedValue = conversions.convertTemperature(unit1, unit2, parseFloat(number));
    res.render('temperature', { unit1, unit2, number, convertedValue });
});

// Start server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
