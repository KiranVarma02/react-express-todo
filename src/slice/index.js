import {createSlice} from "@reduxjs/toolkit";
import {createTodo, deleteTodo, fetchTodos, updateTodo} from "../actions";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.todos = action.payload.todos
            })
            .addCase(createTodo.fulfilled, (state, action) => {
                state.todos.push(action.payload)
            })
            .addCase(updateTodo.fulfilled, (state, action) => {
                const index = state.todos.findIndex(item => item.id === action.payload.id)
                if (index !== -1) {
                    state.todos[index] = action.payload
                }
            })
            .addCase(deleteTodo.fulfilled, (state, action) => {
                const index = state.todos.findIndex(item => item.id === action.payload.id)
                state.todos.splice(index,1)
            })
    },
})

export const reducer = todoSlice.reducer