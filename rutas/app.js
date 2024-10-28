const express = require("express");
const path = require("path");
const app = express();
const port = 2024;
const routes = require("./routes/server");

app.use(express.static(path.join(__dirname, 'routes')));

app.use("/", routes);

app.listen(port, () => {
    console.log(`Servidor conectado exitosamente desde http://localhost:${port}`);
});
