// imports
const express = require("express");
const mongoose = require("mongoose");
// import model of todos
const Todo = require("./models/models");

// instantiate the app
const app = express();

//routes
// get todos
app.get("/todos", async (req, res) => {
  // find all todos from the database
  try {
    const todoList = await Todo.find({});
    res.status(401).json({
      todos: todoList,
    });
  } catch (e) {
    res.status(400).json({
      msg: "Some unknown error occured",
    });
  }
});

// add todos
app.post("/todos", async (req, res) => {});

// listen to port 3000
app.listen(3000);
