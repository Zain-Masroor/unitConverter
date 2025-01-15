const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => res.redirect("/length"));

app.get("/length", (req, res) => res.render("length", { result: null }));
app.post("/length", (req, res) => {
    const { value, fromUnit, toUnit } = req.body;
    const conversions = {
        mm: 0.001,
        cm: 0.01,
        m: 1,
        km: 1000,
        inch: 0.0254,
        foot: 0.3048,
        yard: 0.9144,
        mile: 1609.34
    };

    const result = ((value * conversions[fromUnit]) / conversions[toUnit]).toFixed(4);
    res.render("length", { result });
});

app.get("/weight", (req, res) => res.render("weight", { result: null }));
app.post("/weight", (req, res) => {
    const { value, fromUnit, toUnit } = req.body;
    const conversions = {
        mg: 0.001,
        g: 1,
        kg: 1000,
        oz: 28.3495,
        lb: 453.592
    };

    const result = ((value * conversions[fromUnit]) / conversions[toUnit]).toFixed(4);
    res.render("weight", { result });
});

app.get("/temperature", (req, res) => res.render("temperature", { result: null }));
app.post("/temperature", (req, res) => {
    const { value, fromUnit, toUnit } = req.body;
    let result;

    if (fromUnit === "Celsius") {
        result = toUnit === "Fahrenheit" ? value * 9/5 + 32 : value * 1 + 273.15;
    } else if (fromUnit === "Fahrenheit") {
        result = toUnit === "Celsius" ? (value - 32) * 5/9 : ((value - 32) * 5/9) + 273.15;
    } else {
        result = toUnit === "Celsius" ? value - 273.15 : (value - 273.15) * 9/5 + 32;
    }
    result = parseFloat(result).toFixed(2);

    res.render("temperature", { result });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
