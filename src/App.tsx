import React from 'react';
import './App.css';
import { TodoList } from './components/TodoList';

//CRUD
// - repeat, duplicate

function App() {
    // business logic

    const todolistTitle_1 = "Why to learn";


    //UI
    return (
        <div className="App">
            <TodoList />
            <TodoList />
        </div>
    );
}

export default App;
