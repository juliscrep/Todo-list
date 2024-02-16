"use client"

import Image from "next/image";
import { TodoForm } from "./components/TodoForm";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos]= useState<Array<Todo>>([]);
  const addTodo: AddTodo = newTodo => {
    if(newTodo !== ""){
      setTodos([...todos,{text:newTodo, complete: false}]);
    }
  }

  return (
    <main >
      <div>
        <h1>Todo List</h1>
        <TodoForm addTodo={addTodo}/>
      </div>
    </main>
  );
}
