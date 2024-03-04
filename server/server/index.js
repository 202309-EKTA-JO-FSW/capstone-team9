const express = require("express");
const cors = require("cors");
const eventRoute = require("./routes/EventRoute");
const userRoute = require("./routes/UserRoute");
const searchRoute= require("./routes/SearchRoute")
const ticketRoute = require('./routes/TicketRoute');
require("dotenv").config();

const connectToMongo = require("./db/connection");

const app = express();
const port =
  process.env.NODE_ENV === "test"
    ? process.env.NODE_LOCAL_TEST_PORT
    : process.env.NODE_LOCAL_PORT;
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  connectToMongo();
});
app.use("/event",eventRoute);
app.use("/user",userRoute);
app.use('/ticket', ticketRoute);
app.use('/search', searchRoute);

app.get("/test", (req, res) => {
  res.json(
    "Server connection to client works!!  Good Luck with your capstones :D"
  );
});

module.exports = app;
