// Define schemas and models for MongoDB database

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect(
  "mongodb+srv://abhi5702:mongodb5702@cluster0.qvkxsat.mongodb.net/todo_self"
);

const todoSchema = new Schema({
  title: String,
  desc: String,
  isCompleted: Boolean,
});

// Model for todos
const Todo = mongoose.model("Todo", todoSchema);

//exports
module.exports = Todo;
