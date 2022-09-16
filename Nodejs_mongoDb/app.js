const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");
const PORT = 3000;
app.use(bodyParser.json());


const postRoutes =require('./routes/post') 

app.use('/posts',postRoutes);

app.get("/", (req, res) => {
  res.send("We are in home page");
});


app.listen(PORT, () => {
  console.log("Connected" + PORT);
});
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true}, () => {
  console.log("Connected the MONGO_DB");
});
