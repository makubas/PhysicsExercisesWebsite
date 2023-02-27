const express = require('express');
const config = require("./config.json");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.static("./src/public"));

app.use("/", require("./src/routes/homepage.js"));
app.use("/users/", require("./src/routes/users.js"));

app.listen(port, () => {
    console.log(`Example app listening on port ${config.port}`);
})