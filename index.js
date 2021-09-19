import express from "express";
import morgan from "morgan";
import getWeather from "./getWeather.js";

const app = express();

app.use(morgan("combined"));
app.use(express.static("www"));

app.use("/", express.static("www"));
app.get("/api", getWeather);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is runnin on Port ${port}`);
});
