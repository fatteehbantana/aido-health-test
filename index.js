const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const { sequelize } = require("./models");

const insuranceRoute = require("./routers/insuranceRoute.js");

app.use("/insurance", insuranceRoute);

app.listen(port, () => console.log(`http://localhost:${port}`));

