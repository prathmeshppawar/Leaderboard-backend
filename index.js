const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const teamRoute = require("./routes/team");
const eventRoute = require("./routes/event");
const cors = require("cors");
const app = express();

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/team", teamRoute);
app.use("/api/event", eventRoute);


app.listen(process.env.PORT || 4000, () => {
  console.log("Backend Server is Running!");
});
