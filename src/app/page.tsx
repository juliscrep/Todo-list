"use client"

import Image from "next/image";
import { TodoForm } from "./components/TodoForm";
import { useState } from "react";
import { TodoList } from "./components/TodoList";

export default function Home() {
  const [todos, setTodos]= useState<Array<Todo>>([]);
  const addTodo: AddTodo = newTodo => {
    if(newTodo !== ""){
      setTodos([...todos,{text:newTodo, complete: false}]);
    }
  }

  const toggleComplete: ToggleComplete = selectedTodo => {
    const updatedTodos = todos.map( todo => {
      if(todo === selectedTodo) {
        return {...todo, complete: !todo.complete};
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  return (
    <main >
      <div className="todo-app">
        <h1>Todo List</h1>
        <TodoForm addTodo={addTodo}/>
        <TodoList todos={todos} toggleComplete={toggleComplete}/>
      </div>
    </main>
  );
}
