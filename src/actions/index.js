import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const todoAPI = "http://localhost:9091/api/todo";

const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async () => {
        try {
            const res = await axios.get(todoAPI)
            return res.data
        } catch (e) {
            return e.message
        }
    }
)

const createTodo = createAsyncThunk(
    'todos/createTodo',
    async (data) => {
        try {
            const res = await axios.post(todoAPI, {task: data})
            return res.data
        } catch (e) {
            return e.message
        }
    }
)

const updateTodo = createAsyncThunk(
    'todos/updateTodo',
    async (data) => {
        try {
            const res = await axios
                .put(todoAPI, {
                    id: data.id,
                    task: data.task,
                    taskStatus: data.taskStatus,
                    editStatus: data.editStatus,
                })
            return res.data
        } catch (e) {
            return e.message
        }
    }
)

const deleteTodo = createAsyncThunk(
    'todos/deleteTodo',
    async (data) => {

        try {
            const res = await axios
                .delete(todoAPI, {
                    params : { id: data.id }
                })
            return res.data
        } catch (e) {
            return e.message
        }
    }
)

export {
    fetchTodos,
    createTodo,
    updateTodo,
    deleteTodo
}