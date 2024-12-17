import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice" //todoReducer is todoSlice.reducer exported default

export const store = configureStore({
    reducer: todoReducer
})