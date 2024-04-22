/* eslint-disable react/prop-types */
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeTask, updateTask } from "../redux/features/tasks/taskSlice";
import { FaArrowRight } from "react-icons/fa";
const TaskCard = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className="border rounded p-3">
      <h4 className="font-semibold text-xl">{task?.title}</h4>
      <p>Deadline: {task?.deadline}</p>
      <p>Priority: {task?.priority}</p>
      <p>{task?.description}</p>
      <div className="flex justify-end gap-3">
        <MdOutlineDeleteOutline
          onClick={() => dispatch(removeTask(task?.id))}
          className="text-red-600 cursor-pointer text-xl"
        />
        <FaArrowRight
          onClick={() =>
            dispatch(updateTask({ id: task?.id, status: task?.status }))
          }
          className="text-red-600 cursor-pointer text-lg"
        />
      </div>
    </div>
  );
};

export default TaskCard;
