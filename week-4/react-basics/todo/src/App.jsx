import React, { useState } from "react";
import DisplayList from "./DIsplayList";
import InputForm from "./InputForm";

export default function App() {
  const [todoList, setTodoList] = useState([
    {
      title: "Demo title",
      desc: "Demo description",
    },
  ]);

  function addNewTodo(newTodo) {
    const list = [...todoList, newTodo];
    // list.push(newTodo);
    setTodoList(list);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <InputForm handleSubmit={addNewTodo} />
      <DisplayList items={todoList} />
    </div>
  );
}
