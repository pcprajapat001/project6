const express = require("express");
const mongoose = require("mongoose");
const citiesModel = require("./model/citiesModel");
const departments = require("./model/departmentsModel");
const departmentsModel = require("./model/departmentsModel");
const fullnamesModel = require("./model/fullnamesModel");
const gendersModel = require("./model/gendersModel");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/assignmentdb").then(() => {
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
app.get("/allcities", async (req, res) => {
  const filt = req.body;
  const result = await citiesModel.find(filt);
  res.json(result);
});
app.get("/alldepartments", async (req, res) => {
  const filt = req.body;
  const result = await departmentsModel.find(filt);
  res.json(result);
});
app.get("/allfullnames", async (req, res) => {
  const filt = req.body;
  const result = await fullnamesModel.find(filt);
  res.json(result);
});
app.get("/allgenders", async (req, res) => {
  const filt = req.body;
  const result = await gendersModel.find(filt);
  res.json(result);
});

app.listen(5010, () => {
  console.log("Service is running on port 5010...");
});
