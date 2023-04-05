import { createSlice, nanoid } from '@reduxjs/toolkit';
import { fetchTasks } from './operations';

const tasksInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksInitialState,
  extraReducers: {
    [fetchTasks.pending](state) {
      state.isLoading = true;
    },
    [fetchTasks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchTasks.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  // reducers: {
  //   fetchingInProgress(state) {
  //     state.isLoading = true;
  //   },
  //   fetchingSuccess(state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = action.payload;
  //   },
  //   fetchingError(state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },

  // addTask: {
  //   reducer(state, action) {
  //     state.push(action.payload);
  //   },
  //   prepare(text) {
  //     return {
  //       payload: {
  //         text,
  //         id: nanoid(),
  //         completed: false,
  //       },
  //     };
  //   },
  // },
  // deleteTask(state, action) {
  //   const index = state.findIndex(task => task.id === action.payload);
  //   state.splice(index, 1);
  // },
  // toggleCompleted(state, action) {
  //   for (const task of state) {
  //     if (task.id === action.payload) {
  //       task.completed = !task.completed;
  //       break;
  //     }
  //   }
  // },
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
