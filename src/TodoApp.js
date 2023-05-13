import React from "react";
import TodoList from "./component/TodoList";
import "./styles.css";
import { motion } from "framer-motion";

export default function TodoApp() {
    return (
        <div className="App">
            <motion.h1
                initial={{y: -200}}
                animate={{y: 0}}
                transition={{type: "spring", duration: 0.5}}
                whileHover={{scale: 1.1}}
            >
                Todo List
            </motion.h1>
            <TodoList/>
        </div>
    );
}