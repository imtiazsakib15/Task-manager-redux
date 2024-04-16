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
      state.tasks.filter((task) => task?.id !== payload);
    },
  },
});

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
