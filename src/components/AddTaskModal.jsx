/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/features/tasks/taskSlice";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  //Function for closing modal
  const onClose = () => {
    reset();
    setIsOpen(false);
  };

  // Handle add task submit button
  const onSubmit = (data) => {
    dispatch(addTask(data));
    onClose();
    // reset();
  };
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={"Add new task"}>
      <div className="mt-4">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              {...register("title")}
              className="rounded-md"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              {...register("description")}
              className="rounded-md"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="deadline">Deadline</label>
            <input
              type="date"
              id="deadline"
              {...register("deadline")}
              className="rounded-md"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="priority">Priority</label>
            <select
              type=""
              id="priority"
              {...register("priority")}
              className="rounded-md"
              required
            >
              <option value="">(Select one)</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          <div className="space-x-4">
            <button
              className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddTaskModal;
