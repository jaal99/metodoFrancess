// Importar express
const express = require("express");

//Importar handlebars como temmplate enige
const exphbs = require("express-handlebars");

//Importar body parser que permite acceder al cuerpo de la pteción HTTP
const bodyParser = require("body-parser");

//Importar la funcion de calculo de metodo frances
const { calcularMetodoFrances } = require("./calculoMetodoFrances");

// Crear un servidor express
const app = express();

//Indicar a express utilizar handlebars como template engine
app.engine("hbs", exphbs({defaultLayout: "main", extname: ".hbs"}));

app.set("view engine", "hbs");

//Habilitar body parse para leer los datos del cuerpo de peticiones POST
app.use(bodyParser.urlencoded({ extended: true }));

// Crear ruta para /
// Información sobre los verbos HTTP
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
app.get("/", (req, res, next) => {
    res.render("formulario_prestamo");
});

app.post("/prestamo", (req, res, next) => {
//asignacion por destructuring
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
const {monto, tasaInteres, periodo} = req.body;
   

    const cuotas = calcularMetodoFrances(monto, tasaInteres, periodo);

    res.render("resultado_prestamo", { cuotas });

});
    

// Inicializar el servidor en un puerto en especifico
app.listen(5000, () => {
    console.log("Servidor ejecutandose en el puerto 5000");
});