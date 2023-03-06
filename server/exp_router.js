const express = require("express");
const path = require("path");
const { persons } = require("./data/data");

const router = express.Router();
router.use(express.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  res.json({ success: true, result: persons });
});

router.get("/id/:id", (req, res) => {
  const id = req.params.id;
  const toSend = persons.filter((person) => person.id === Number(id));
  res.json({ success: true, result: toSend });
});

router.get("/random", (req, res) => {
  let randIndex = Math.floor(Math.random() * 20000 + 1);
  const toSend = persons.filter((person) => person.id === randIndex);
  res.send(toSend);
});

router.get("/query", (req, res) => {
  let { query, maxVal } = req.query;
  query = query.toLowerCase();
  if (query === "") {
    return res.json({ success: false, reason: "No Query Given" });
  }
  if (query === "*") {
    if (!maxVal) {
      return res.json({ success: true, result: persons });
    } else {
      return res.json({ success: true, result: persons.slice(0, maxVal) });
    }
  }
  let toSend = persons.filter(
    (person) =>
      person.fname === query ||
      person.lname === query ||
      person.occupation === query ||
      person.id === Number(query) ||
      person.age === Number(query)
  );
  if (toSend.length < 1) {
    return res.json({ success: true, result: "No Matches Found" });
  }

  if (maxVal) {
    toSend = toSend.slice(0, maxVal);
  }

  res.json({ success: true, result: toSend });
});

module.exports = router;
