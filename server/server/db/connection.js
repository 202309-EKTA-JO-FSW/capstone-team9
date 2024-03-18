const mongoose = require("mongoose");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME, TEST_DB_HOST } =
  process.env;

const DB_URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${
  process.env.NODE_ENV === "test" ? TEST_DB_HOST : DB_HOST
}:${DB_PORT}/${DB_NAME}?authSource=admin`;

//const url = DB_URI;

const url ='mongodb+srv://admin:bc1q92xadetvvngcgu6cq9kfhd33flss7xch63wmrv@cluster0.vzuriw8.mongodb.net/'
const connectToMongo = () => {
  mongoose.connect(url, { useNewUrlParser: true });

  db = mongoose.connection;

  db.once("open", () => {
    console.log("Database connected: ", url);
  });

  db.on("error", (err) => {
    console.error("Database connection error: ", err);
  });
};

module.exports = connectToMongo;
