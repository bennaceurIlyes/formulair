import React, { useEffect, useRef, useState } from 'react';

function Todo() {
  const [task, setask] = useState("");
  const [tasks, setasks] = useState([]);
  const inpref = useRef();

  const saved = () => {
    if (task.trim() === "") return;
    const newtask = [...tasks, task];
    setasks(newtask);
     localStorage.setItem("tasks", JSON.stringify(newtask));
    setask("");
    inpref.current.focus();
  };

  useEffect(() => {
    const save = JSON.parse(localStorage.getItem("tasks")) || [];
    setasks(save);
  }, []);

 

  return (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-400 via-purple-300 to-pink-300 p-6">
    <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-md border-2 border-white/60 transform hover:scale-[1.01] transition-all duration-300">
      <h1 className="text-4xl font-black text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 drop-shadow-sm">
        ✨ My Tasks ✨
      </h1>

      <div className="flex gap-3 mb-6">
        <input
          type="text"
          placeholder="Add your task..."
          ref={inpref}
          value={task}
          onChange={(e) => setask(e.target.value)}
          className="flex-1 border-2 border-indigo-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent placeholder-gray-400 text-gray-700 shadow-sm text-lg"
        />
        <button
          onClick={saved}
          className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-bold rounded-2xl px-6 py-3 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
        >
          Save
        </button>
      </div>

      <ul className="space-y-3 mb-6">
        {tasks.length === 0 ? (
          <li className="text-gray-500 text-center italic text-lg animate-pulse">No tasks yet 😴</li>
        ) : (
          tasks.map((task, index) => (
            <li
              key={index}
              className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-100 rounded-2xl px-4 py-3 text-indigo-900 font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
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
        className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white rounded-2xl py-3 font-bold transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
      >
        🧹 Clear All
      </button>
    </div>
  </div>
);
;
}

export default Todo;
