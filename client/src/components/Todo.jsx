import { IoAddOutline } from "react-icons/io5";
import { useState, useEffect } from "react";

export default function Todo() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (storedTasks) {
            setTasks(storedTasks);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, { text: newTask, completed: false }]);
            setNewTask('');
        }
    };

    const handleTaskChange = (index) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    const handleRemoveCompleted = () => {
        const uncompletedTasks = tasks.filter(task => !task.completed);
        setTasks(uncompletedTasks);
    };

    const hasCompletedTasks = tasks.some(task => task.completed);

    return (
        <div className='bg-[#e0f2e9] text-[#2e7d32] p-4 rounded-md w-full min-w-[350px] max-h-[300px] overflow-auto'>
            <div className="py-2 text-2xl font-semibold">My Todo</div>
            <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                    <input
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        className="border border-[#b2dfdb] bg-white px-3 py-2 rounded-md outline-none text-sm placeholder-[#4caf50]"
                        placeholder="Add Your Task"
                        type="text"
                    />
                    <button onClick={handleAddTask} className="border border-[#b2dfdb] bg-[#a5d6a7] px-3 py-2 rounded-md flex items-center">
                        <IoAddOutline className="text-[#2e7d32]" />
                    </button>
                </div>
                {tasks.length === 0 && <h1 className="text-center text-sm text-[#388e3c] py-2">No Tasks Added</h1>}
                {tasks.map((task, index) => (
                    <div key={index} className="border border-[#b2dfdb] bg-[#ffffff] flex items-center px-3 py-2 gap-2 rounded-md">
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => handleTaskChange(index)}
                            className="accent-[#2e7d32]"
                        />
                        <div className={`text-sm ${task.completed ? 'line-through text-gray-500' : ''}`}>
                            {task.text}
                        </div>
                    </div>
                ))}
                {hasCompletedTasks && (
                    <button onClick={handleRemoveCompleted} className="border border-[#b2dfdb] bg-[#a5d6a7] px-3 py-2 rounded-md text-sm mt-2">
                        Remove Completed Tasks
                    </button>
                )}
            </div>
        </div>
    );
}
