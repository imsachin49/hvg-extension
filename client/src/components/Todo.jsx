import { IoAddOutline } from "react-icons/io5";
import { useState, useEffect } from "react";

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([{ text: newTask, completed: false }, ...tasks]);
      setNewTask("");
    }
  };

  const handleTaskChange = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );

    const sortedTasks = updatedTasks.sort((a, b) => a.completed - b.completed);

    setTasks(sortedTasks);
  };

  const handleRemoveCompleted = () => {
    const uncompletedTasks = tasks.filter((task) => !task.completed);
    setTasks(uncompletedTasks);
  };

  const hasCompletedTasks = tasks.some((task) => task.completed);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTask();
  };
  return (
    <div className="bg-light-teal text-gray-850 p-4 rounded-md w-full min-w-[200px] max-w-[350px] max-h-[250px] overflow-auto no-scrollbar">
      <div className="py-1 text-xl text-gray-200 mb-2">My Todo</div>
      <div className="flex flex-col justify-between gap-3">
        <form onSubmit={handleSubmit}>
          <div className="w-full flex gap-2">
            <input
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="w-full px-[10px] py-[7px] rounded-md border-none outline-none text-sm"
              placeholder="Add Your Task"
              type="text"
            />
            <button
              onClick={handleAddTask}
              className="bg-[#3B656A] border-[#9dad9e] shadow-md px-3 rounded-md text-white"
            >
              <IoAddOutline />
            </button>
          </div>
        </form>
        {tasks.length === 0 && (
          <h1 className="text-center text-sm text-gray-200 pt-2">
            No Tasks Added
          </h1>
        )}
        {tasks.map((task, index) => (
          <div
            key={index}
            className="border border-[#9dad9e] rounded-md flex items-center px-2 gap-1"
          >
            <input
              type="checkbox"
              checked={task.completed}
              className="border-none outline-none"
              onChange={() => handleTaskChange(index)}
            />
            <div
              className={`rounded-md p-[5px] text-sm inline-flex text-gray-200 ${
                task.completed ? "line-through text-gray-300" : ""
              }`}
            >
              {task.text}
            </div>
          </div>
        ))}
        {hasCompletedTasks && (
          <button
            onClick={handleRemoveCompleted}
            className=" bg-rose-400 text-white p-2 rounded-md text-sm mt-2"
          >
            Remove Completed Tasks
          </button>
        )}
      </div>
    </div>
  );
}
