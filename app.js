require('dotenv').config();
const express = require("express");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT;

// Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// Servir contenido static
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render('Home', {
    Nombre: "Alexis Rojas",
    Titulo: "Curso de Node",
  });
});

app.get("/generic", (req, res) => {
  res.render('generic', {
    Nombre: "Alexis Rojas",
    Titulo: "Curso de Node",
  });
});

app.get("/elements", (req, res) => {
  res.render('elements', {
    Nombre: "Alexis Rojas",
    Titulo: "Curso de Node",
  });
});

app.get("*", (req, res) => {
  res.send("404 | Page not found");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
