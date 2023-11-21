import React, { useState } from "react";

const ToDoList = (props) => {
  const handleSubmit = (e) => {
    
    switch (e) {
      case "delete":
        //alert("Deleting selected items from todo list"+ props.idList.length);
        props.deleteTodoProps();
        break;
      case "reset":
        //alert("Resetting Todos .. ToDo and Completed");
        props.resetTodo();
        break;
      case "mark-complete":
        let temp1 = props.idList.toString()
        //alert("mark-complete  event fired length:"+props.idList.length);
        props.markCompleted();
        break;
    }
   
  };

  return (
    
      <div className="relative">
        {props.todosProps.length > 0 && (
          <div className="flex bg-slate-300 my-2 mx-2 px-2 py-2 rounded-md font-mono text-2xl text-grey-950">
            Your ToDo items :
          </div>
        )}
        {props.todosProps.map((todoitem) => (
          <div key={todoitem.id}>
            <div className="grid grid-cols-2 bg-slate-300 rounded-md my-2 mx-2 px-2 py-2 ">
              <div className=" flex-none w-14 h-10 m-2 p-2">
                <input
                  type="checkbox"
                  className="my-2 px-2 py-2"
                  checked={todoitem.checked}
                  onChange={() => props.handleChangeProps(todoitem.id)}
                ></input>
              </div>
              <div className="grow h-10 justify-start align-middle font-mono text-lg my-2 mx-2 px-2 py-2">
                {todoitem.title}
              </div>
            </div>
          </div>
        ))}

        <div className="grow h-10 justify-start align-middle font-mono text-lg my-2 mx-2 px-2 py-2">
          <input
            type="submit"
            className="justify-center mx-2  px-2 rounded-3xl bg-slate-500 hover:bg-slate-700 text-white text-xl focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            value="Mark Complete"
            id="mark-complete"
            onClick={() => handleSubmit("mark-complete")}
          />

          <input
            type="submit"
            className="justify-center mx-2  px-2 rounded-3xl bg-slate-500 hover:bg-slate-700 text-white text-xl focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            value="Delete"
            id="delete"
            onClick={() => handleSubmit("delete")}
          />

          <input
            type="submit"
            className="justify-center mx-2  px-2 rounded-3xl bg-slate-500 hover:bg-slate-700 text-white text-xl focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            value="Reset"
            id="reset"
            onClick={() => handleSubmit("reset")}
          />
        </div>
      </div>
   
  );
};

export default ToDoList;
