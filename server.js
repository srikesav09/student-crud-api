
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const mongoose = require("mongoose");
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));
 
mongoose.connect(process.env.MONGODB_URI).then(()=> console.log("Mongoose connected")).catch(err=> console.log(err));

app.use("/api/students",require("./routes/studentRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});