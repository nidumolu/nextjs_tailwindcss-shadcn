import React from "react";

const CompletedToDoList = (props) => {
  return (
    <div className="relative">
      {props.completedTaskList.length > 0 && (
        <div className="flex bg-slate-300 my-10 mx-2 px-2 py-2 rounded-md font-mono text-2xl text-grey-950">
          Your Completed ToDo items :
        </div>
      )}
      {props.completedTaskList.map((completed) => (
        <div
          key={completed.id}
          className="grow h-10 justify-start align-middle font-mono text-lg my-2 mx-2 px-2 py-2"
        >
          {completed.title}
        </div>
      ))}
    </div>
  );
};

export default CompletedToDoList;
