import React from 'react';
import './App.css';
import { TodoList } from './components/TodoList';

//CRUD
// - repeat, duplicate
// - create clear structure
export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

function App() {
    // business logic

    const todolistTitle_1 = "What to learn"
    const todolistTitle_2 = 'What to watch'

    const tasks_1: Array<TaskType> = [
        {
            id: 1,
            title: "HTML&CSS",
            isDone: true
        },
        {
            id: 2,
            title: "JS",
            isDone: true
        },
        {
            id: 3,
            title: "React",
            isDone: false
        },
    ]
    const tasks_2: TaskType[] = [
        {
            id: 4,
            title: "One alone",
            isDone: true
        },
        {
            id: 5,
            title: "Grinch",
            isDone: false
        },
        {
            id: 6,
            title: "The sole",
            isDone: false
        },
    ]


    //UI
    return (
        <div className="App">
            <TodoList title={todolistTitle_1} tasks={tasks_1}/>
            <TodoList title={todolistTitle_2} tasks={tasks_2}/>
        </div>
    );
}

export default App;
