import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  tasks: [
    {
      id: "850c6604-5c47-4db4-858a-0cb5sfe5b2e71e",
      status: "pending",
      title: "asdf",
      description: "sd",
      deadline: "2024-04-16",
      priority: "Medium",
    },
    {
      id: "850c6604-5c47-4db4-858a-0cb5de5b2e71e",
      status: "pending",
      title: "asdf",
      description: "sd",
      deadline: "2024-04-16",
      priority: "Medium",
    },
    {
      id: "850c6604-5c47-4db4-858a-0cb5ecd5b2e71e",
      status: "ongoing",
      title: "asdf",
      description: "sd",
      deadline: "2024-04-16",
      priority: "Medium",
    },
    {
      id: "850c6604-5c47-4db4-858a-0cb5dae5b2e71e",
      status: "completed",
      title: "asdf",
      description: "sd",
      deadline: "2024-04-16",
      priority: "Medium",
    },
  ],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      const id = uuidv4();
      state.tasks.push({ id: id, status: "pending", ...payload });
    },
    removeTask: (state, { payload }) => {
      const result = state.tasks.filter((task) => task?.id !== payload);
      state.tasks = result;
    },
  },
});

export const { addTask, removeTask } = taskSlice.actions;

export default taskSlice.reducer;
