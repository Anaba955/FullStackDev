import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: []
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => { //state gives access to initialState and action has payload object through which data passed can be accessed
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo)
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if(todo.id === action.payload)
                    todo.text = action.payload
            })
        }
    }
})


//always export functionality and reducer
export const {addTodo, removeTodo, updateTodo} = todoSlice.actions //access of todoSlice reducer

export default todoSlice.reducer