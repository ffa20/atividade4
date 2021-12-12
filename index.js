require ('dotenv').config()
const PORT = process.env.PORT || 8000
const express = require('express');
const app = express();

app.use(express.json()); // Faz o parse (validação e interpretação) de solicitações do tipo application/json
app.use(express.urlencoded({ extended: true })); // Faz o parse do conteúdo tipo application/x-www-form-urlencoded

require("./route/route.js")(app)
app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));
app.use(express.static("public"));
