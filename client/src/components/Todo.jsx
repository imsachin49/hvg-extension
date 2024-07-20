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
        <div className='text-black bg-white p-2 rounded-md w-full min-w-[350px] max-h-[300px] overflow-auto'>
            <div className="py-1 text-xl text-gray-900">My Todo</div>
            <div className="flex flex-col justify-between gap-1">
                <div className="w-full flex gap-2">
                    <input
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        className="border w-full px-[10px] py-[5px] rounded-md outline-none text-sm placeholder-gray-500"
                        placeholder="Add Your Task"
                        type="text"
                    />
                    <button onClick={handleAddTask} className="border px-2 rounded-md"><IoAddOutline /></button>
                </div>
                {tasks.length === 0 && <h1 className="text-center text-sm text-indigo-600 py-1">No Tasks Added</h1>}
                {tasks.map((task, index) => (
                    <div key={index} className="border flex items-center px-2 gap-1">
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => handleTaskChange(index)}
                        />
                        <div className={`rounded-md p-[5px] text-sm inline-flex ${task.completed ? 'line-through text-gray-500' : ''}`}>
                            {task.text}
                        </div>
                    </div>
                ))}
                {hasCompletedTasks && (
                    <button onClick={handleRemoveCompleted} className="border px-2 py-1 rounded-md text-sm mt-2">Remove Completed Tasks</button>
                )}
            </div>
        </div>
    );
}