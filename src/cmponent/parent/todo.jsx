import React, { useEffect, useRef, useState } from 'react';

function Todo() {
  const [task, setask] = useState("");
  const [tasks, setasks] = useState([]);
  const inpref = useRef();

  const saved = () => {
    if (task.trim() === "") return;
    const newtask = [...tasks, task];
    setasks(newtask);
    setask("");
    inpref.current.focus();
  };

  useEffect(() => {
    const save = JSON.parse(localStorage.getItem("tasks")) || [];
    setasks(save);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-300 via-blue-200 to-pink-200 p-6">
    <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-6 w-full max-w-md border border-white/50">
      <h1 className="text-3xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
        ✨ My Colorful To-Do List ✨
      </h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Add your task..."
          ref={inpref}
          value={task}
          onChange={(e) => setask(e.target.value)}
          className="flex-1 border border-blue-400 rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 text-gray-800 shadow-sm"
        />
        <button
          onClick={saved}
          className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-2xl px-4 py-2 transition duration-300 shadow-md hover:shadow-lg"
        >
          Save
        </button>
      </div>

      <ul className="space-y-2 mb-4">
        {tasks.length === 0 ? (
          <li className="text-gray-500 text-center italic">No tasks yet 😴</li>
        ) : (
          tasks.map((task, index) => (
            <li
              key={index}
              className="bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-2xl px-3 py-2 text-blue-800 font-medium shadow-sm hover:shadow-md transition"
            >
              {task}
            </li>
          ))
        )}
      </ul>

      <button
        onClick={() => {
          localStorage.clear();
          setasks([]);
        }}
        className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-pink-600 hover:to-red-600 text-white rounded-2xl py-2 font-semibold transition duration-300 shadow-md hover:shadow-lg"
      >
        🧹 Clear All
      </button>
    </div>
  </div>
);
;
}

export default Todo;
