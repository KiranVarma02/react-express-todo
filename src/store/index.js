import { configureStore} from "@reduxjs/toolkit";
import {reducer } from '../slice/index'

const store = configureStore({
    reducer: reducer
})

export default store;