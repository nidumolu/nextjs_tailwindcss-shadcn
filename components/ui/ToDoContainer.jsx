"use client";

import React, { useState } from "react";
import ToDoList from "./ToDoList";
import CompletedToDoList from "./CompletedToDoList";
import TodoCreate from "./TodoCreate";
import { v4 as uuidv4 } from "uuid";
const ToDoContainer = () => {
  const todoList = [
    {
      id: uuidv4(),
      title: "Buy groceries",
      tag: "Home",
      user: "Rosa",
      selected: false,
    },
    {
      id: uuidv4(),
      title: "Take our garbage",
      tag: "Important",
      user: "My self",
      selected: false,
    },
  ];
  const completedtodosList = [
    {
      id: uuidv4(),
      title: "Code and deployment",
      tag: "Home",
      user: "Srini",
      selected: true,
    },
  ];

  const idList = [];

  const [todos, setTodos] = useState(todoList);
  const [completedTaskList, setCompletedTaskList] =
    useState(completedtodosList);
  const [ids, setIdList] = useState(idList);

  const handleChange = (id) => {
    todos.map((todo) => {
      if (todo.id === id) {
        todo.selected = !todo.selected;

        if (ids.indexOf(id) == -1) {
          setIdList([...ids, id]);
        } else {
          setIdList([
            ...ids.filter((todo) => {
              return todo != id;
            }),
          ]);
        }
      }
    });
  };

  const delTodo = () => {
    if (ids.length > 0) {
      setTodos([...todos.filter((item) => !ids.includes(item.id))]);
    }
  };

  const markCompleted = () => {
    if (ids.length > 0) {
      setCompletedTaskList([
        ...completedTaskList,
        ...todos.filter((item) => ids.includes(item.id)),
      ]);
      setTodos([...todos.filter((item) => !ids.includes(item.id))]);
    }
  };

  const resetTodo = () => {
    setTodos([]);
    setCompletedTaskList([]);
    setIdList([]);
  };

  const addTodoItem = (title, tag, user) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      tag: "Home",
      user: "Srini",
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <TodoCreate addTodoProps={addTodoItem} />

      <div className="relative">
        <ToDoList
          todosProps={todos}
          handleChangeProps={handleChange}
          deleteTodoProps={delTodo}
          completedTaskList={completedTaskList}
          resetTodo={resetTodo}
          idList={ids}
          markCompleted={markCompleted}
        />
      </div>
      <CompletedToDoList completedTaskList={completedTaskList} />
    </div>
  );
};

export default ToDoContainer;
