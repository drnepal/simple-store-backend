const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/product-routes");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/products", router); // localhost:5000/books

mongoose
  .connect(
    "mongodb+srv://devrajn:Chicago123@cluster0.sblnmes.mongodb.net/storebackend?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(8000);
  })
  .catch((err) => console.log(err));
