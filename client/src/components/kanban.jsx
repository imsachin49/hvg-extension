import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const initialColumns = {
  todo: {
    name: "To Do",
    items: [],
  },
  inProgress: {
    name: "In Progress",
    items: [],
  },
  done: {
    name: "Done",
    items: [],
  },
};

function Kanban() {
  const [columns, setColumns] = useState(initialColumns);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const storedColumns = localStorage.getItem("kanban-columns");
    if (storedColumns) {
      setColumns(JSON.parse(storedColumns));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("kanban-columns", JSON.stringify(columns));
  }, [columns]);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (
      !destination ||
      (source.droppableId === destination.droppableId &&
        source.index === destination.index)
    ) {
      return;
    }

    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      sourceItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
      });
    } else {
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    }
  };

  const addTask = () => {
    if (newTask.trim() === "") return;

    const newTaskItem = {
      id: `${Date.now()}`,
      content: newTask,
    };

    setColumns({
      ...columns,
      todo: {
        ...columns.todo,
        items: [...columns.todo.items, newTaskItem],
      },
    });

    setNewTask("");
  };

  const clearDoneTasks = () => {
    setColumns({
      ...columns,
      done: {
        ...columns.done,
        items: [],
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask();
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-10 bg-light-teal">
      <div className="mb-6">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="p-2 border rounded-md"
            placeholder="Add a new task"
          />
          <button
            onClick={addTask}
            className="ml-2 px-4 py-2 bg-[#3B656A] text-white rounded-md"
          >
            Add Task
          </button>
        </form>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex justify-center space-x-4">
          {Object.entries(columns).map(([columnId, column]) => (
            <div key={columnId} className="flex flex-col items-center w-64">
              <h2 className="mb-4 text-xl font-semibold text-white">
                {column.name}
              </h2>
              <Droppable droppableId={columnId} key={columnId}>
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={`p-4 w-full h-full rounded-lg ${
                      columnId === "todo"
                        ? "bg-light-indigo"
                        : columnId === "inProgress"
                        ? "bg-[#1c3232]"
                        : columnId === "done"
                        ? "bg-light-red"
                        : "bg-gray-200"
                    }`}
                  >
                    {column.items.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`p-4 mb-2 text-center rounded-lg bg-white shadow-md ${
                              snapshot.isDragging ? "bg-blue-200" : "bg-white"
                            }`}
                          >
                            {item.content}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              {columnId === "done" && column.items.length > 0 && (
                <button
                  onClick={clearDoneTasks}
                  className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
                >
                  Clear Done Tasks
                </button>
              )}
            </div>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}

export default Kanban;
