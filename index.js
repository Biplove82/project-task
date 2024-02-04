const express= require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("../src/routes/routes")
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());


mongoose
  .connect(
    "mongodb+srv://biplavmandalmandal:HDUX8LAFjG3o57lz@cluster0.iqkysa5.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DB Connected");
  })
  .catch((Error) => {
    console.log(Error);
  });

app.use("/v1",routes)
app.listen(process.env.PORT || 3000, function () {
    console.log("Server is running on port" + (process.env.PORT||3000));
  });
  