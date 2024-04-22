import { useState } from "react";
import AddTaskModal from "./AddTaskModal";

const Tasks = () => {
  let [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">Tasks</h2>
        <button
          onClick={openModal}
          className="bg-green-700 hover:bg-green-800 rounded-md px-4 py-2 text-white"
        >
          Add Task
        </button>

        <AddTaskModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
        <div>
          <h4 className="bg-blue-300 font-medium p-2">Pending</h4>
        </div>
        <div>
          <h4 className="bg-blue-300 font-medium p-2">Ongoing</h4>
        </div>
        <div>
          <h4 className="bg-blue-300 font-medium p-2">Completed</h4>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
