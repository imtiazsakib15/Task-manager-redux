/* eslint-disable react/prop-types */
import { MdOutlineDeleteOutline } from "react-icons/md";

const TaskCard = ({ task }) => {
  return (
    <div className="border rounded p-3">
      <h4 className="font-semibold text-xl">{task?.title}</h4>
      <p>Deadline: {task?.deadline}</p>
      <p>Priority: {task?.priority}</p>
      <p>{task?.description}</p>
      <div className="flex justify-end gap-3 text-xl">
        <MdOutlineDeleteOutline className="text-red-600 cursor-pointer" />
      </div>
    </div>
  );
};

export default TaskCard;
