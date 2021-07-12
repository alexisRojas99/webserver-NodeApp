const express = require("express");
const app = express();
const port = 8080;

// Servir contenido estatico

app.use(express.static('public-old'));

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/hola-mundo", (req, res) => {
  res.send("Hola mundo en su respectiva ruta");
});

app.get("*", (req, res) => {
  // dirname hace referencia a la Path, es decir la ruta
  res.sendFile(__dirname + '/public-old/404.html');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
