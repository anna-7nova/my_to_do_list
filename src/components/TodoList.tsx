import React from 'react';
import { TaskType } from '../App';
import { Button } from './Button';
import {TodoComponentHeader} from './TodoComponentHeader'
import { AddForm } from './AddForm';
import { FiltersButtons } from './FiltersButtons';

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>

}

export const TodoList = (props: TodoListPropsType) => {
    //условный рендеринг
    const taskList = props.tasks.length === 0
        ? <span>List is empty</span>
        : <ul>
            {
                props.tasks.map(t => {
                    return (
                        <li>
                            <input type="checkbox" checked={t.isDone} /> 
                            <span>{t.title}</span>
                        </li>
                        )
                })
            }       
        </ul> 

    return (
        <div className="todoList">
            <TodoComponentHeader title={props.title}/>
            <AddForm/>
            {taskList}
            <FiltersButtons/>
        </div>
    );
}


