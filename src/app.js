const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const gadgetRoutes = require("./routes/gadgetRoutes");
const sequelize = require("./models/index");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/gadgets", gadgetRoutes);

app.use((req, res) => res.status(404).json({ error: "Not Found" }));

sequelize.sync();
module.exports = app;
