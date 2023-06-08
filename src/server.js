
const knex = require("./db/knex");
const express = require("express");
const app = express();

const PORT = 8080;

app.use(express.static('build'));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin",
    "*");
  res.header('Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE');
  res.header("Access-Control-Allow-Headers",
    "Content-Type");
  next();
});

app.get("/flower", async (req, res) => {
  const allFlowerList = await knex
    .select("*")
    .from("flower_info");
  res.set("content-type", "application/json")
     .status(200)
     .send(allFlowerList);
});

app.post("/order", async (req, res) => {
  console.log(req.body);
  // await knex("order_info").del().where(req.body);
  await knex("order_info").insert(req.body);

  res.set("content-type", "application/json")
     .status(200)
     .send(req.body);
});

app.listen(PORT, () => {
  console.log(`HTTP Request on PORT ${PORT}`);
});
