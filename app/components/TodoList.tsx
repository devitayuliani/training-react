"use client";
import React, { FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { addTodo, setText } from "../reducer/todoSlice";
import { ITodo } from "../types/todo";

function TodoList() {
  const { todos, form } = useSelector((state: RootState) => state.todo);

  return (
    <section className=" text-black todo__list mt-4 p-4 border border-grey-400">
      {todos.map((todo) => (
         <div className="shadow rounded bg-white w-[300px] p-3">{todo.text}</div>
      ))}
    </section>
  );
}

export default TodoList;