const express = require("express");
const mongoose = require("mongoose");
const classesModel = require("./model/classesModel");
const divsModel = require("./model/divsModel");
const housesModel = require("./model/housesModel");
const studentsModel = require("./model/studentsModel");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/schooldb").then(() => {
  console.log("MongoDB is connected successfully...");
});

app.get("/", (req, res) => {
  res.send("Welcome to School App...");
});

app.get("/allclasses", async (req, res) => {
  const result = await classesModel.find({});
  res.json(result);
});

app.get("/alldivs", async (req, res) => {
  const result = await divsModel.find({});
  res.json(result);
});

app.get("/allhouses", async (req, res) => {
  const result = await housesModel.find({});
  res.json(result);
});
app.get("/allstudents", async (req, res) => {
  const result = await studentsModel.find({});
  res.json(result);
});

app.post("/allfiltstudents", async (req, res) => {
  const filt = req.body;
  const result = await studentsModel.find(filt);
  res.json(result);
});

app.listen(5050, () => {
  console.log("Service is running on port 5050...");
});
