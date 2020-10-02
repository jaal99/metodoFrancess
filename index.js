// Importar express
const express = require("express");

//Importar handlebars como temmplate enige
const exphbs = require("express-handlebars");

// Crear un servidor express
const app = express();

//Indicar a express utilizar handlebars como template engine
app.engine("hbs", exphbs({defaultLayout: "main", extname: ".hbs"}));

app.set("view engine", "hbs");

// Crear ruta para /
app.get("/", (req, res, next) => {
    res.render("formulario_prestamo");
});

// Inicializar el servidor en un puerto en especifico
app.listen(5000, () => {
    console.log("Servidor ejecutandose en el puerto 5000");
});

//