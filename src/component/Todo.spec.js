import {render, screen} from "@testing-library/react";

import TodoApp from "../TodoApp";
import {Provider} from "react-redux";
import React from "react";
import store from "./store";


import {configureStore} from "@reduxjs/toolkit";

test('Should show input box to enter new todo task', async () => {

    const initialState = { output: 10 };
    const mockStore = configureStore();
    let store;
    store = mockStore(initialState);

    render(  <Provider store={store}>
        <TodoApp />
    </Provider>);

    const inputElement = await screen.getAllByTestId('enter-todo-id')
    console.log(inputElement)
})
