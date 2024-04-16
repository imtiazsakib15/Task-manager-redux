import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  tasks: [],
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
    updateTask: (state, { payload }) => {
      const target = state.tasks.find((task) => task?.id === payload?.id);
      const updatedStatus =
        payload?.status === "pending" ? "ongoing" : "completed";
      target.status = updatedStatus;
    },
  },
});

export const { addTask, removeTask, updateTask } = taskSlice.actions;

export default taskSlice.reducer;
