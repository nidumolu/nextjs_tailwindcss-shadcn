import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ToDoCreate = (props) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && title.length > 0) {
      const newTodo = {
        id: uuidv4(),
        title: title,
        tag: "Home",
        user: "Srini",
        completed: false,
      };
      props.addTodoProps(title, "", "");
      setTitle("");
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="flex h-11 items-start justify-center p-50">
          <div className="h-1 text-center font-mono text-4xl text-grey-600">
            Build your own ToDo List
          </div>
        </div>
        <div className="relative">
          <div className="h-100 my-2 w-full rounded-md bg-slate-100 p-3 font-mono text-2xl text-grey-950">
            <p className="text-center text-grey-95">Add a ToDo</p>
          </div>
          <div className="flex bg-slate-200 rounded-lg p-2 m-2">
            <div className=" grow h-14 w-80">
              <input
                type="text"
                name="todoitem"
                id="todoitem"
                value={title}
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="my todo item.."
                onChange={handleChange}
              />
            </div>
            <div className=" grow ">
              <input
                type="submit"
                className="justify-center mx-2  px-2 rounded-3xl bg-slate-500 hover:bg-slate-700 text-white text-xl focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                value="Add Todo"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ToDoCreate;
