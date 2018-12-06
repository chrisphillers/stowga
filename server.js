require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const pgp = require("pg-promise")();
const db = pgp({
  host: process.env.DB_HOST || "localhost",
  port: 5432,
  database: process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD
});

app.use(bodyParser.json());

app.get("/api/temperature/:temp", function(req, res) {
  console.log(req, res);
  const temp = req.params.temp;
  db.any(`SELECT * FROM warehouses WHERE temperature = $1`, [temp])
    .then(function(data) {
      res.json(data);
    })
    .catch(function(error) {
      res.json({ error: error.message });
    });
});

app.get("/api/capacity/:size", function(req, res) {
  db.any(`SELECT * FROM warehouses WHERE capacity_sq_ft > $1`, [
    req.params.size
  ])
    .then(function(data) {
      res.json(data);
    })
    .catch(function(error) {
      res.json({ error: error.message });
    });
});

app.get("/api/rating/:rating", function(req, res) {
  console.log(req.params.rating);
  db.any(`SELECT * FROM warehouses WHERE rating > $1 ORDER BY rating ASC`, [
    req.params.rating
  ])
    .then(function(data) {
      console.log(res.json(data));
      res.json(data);
    })
    .catch(function(error) {
      res.json({ error: error.message });
    });
});

app.get("/api/location/:long/:lat/:distance", function(req, res) {
  db.any(
    `SELECT name, location, temperature, capacity_sq_ft FROM warehouses WHERE ST_DWithin(geom, ST_MakePoint($1,$2)::geography, $3);`,
    [req.params.long, req.params.lat, req.params.distance]
  )
    .then(function(data) {
      res.json(data);
    })
    .catch(function(error) {
      res.json({ error: error.message });
    });
});

app.listen(process.env.PORT || 8080, function() {
  console.log("Listening on port 8080");
});
