const express = require("express");
require("dotenv").config();
const { DataModel } = require("../Model/data.module.js");

const DataRouter = express.Router();

DataRouter.get("/", async (req, res) => {
  try {
    const data = await DataModel.find();
    res.status(200).send({ message: "add chat", data });
    console.log("res", data);
  } catch (err) {
    res.status(401).send({
      message: "Error in your API data",
      error: err,
    });
  }
});

DataRouter.post("/add", async (req, res) => {
  try {
    const data = new DataModel(req.body);
    await data.save();
    res.status(200).send({ message: "data Successfully added", data });
  } catch (err) {
    res.status(401).send({
      message: "Error in adding",
      error: err,
    });
  }
});
module.exports = { DataRouter };
