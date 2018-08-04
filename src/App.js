import React, { component } from 'react';
import TodoList from './TodoList';
import './css/App.css'

class App extends component {
    constructor() {
        super()
        this.state = {
            todo: [{
                    id: 1,
                    title: "Hello, React",
                    desc: "React始めました",
                    done: folse
                },
                {
                    id: 2,
                    title: "Hello, Redux!",
                    desc: "Reduxも始めました",
                    done: false
                },
            ]
        }
    }

    render() {
        return ( 
        <div className = "app" >
            <hi> todoアプリを作ってみた </hi> 
            <TodoList todos = { this.state.todos }
            /> 
            </div>
        );
    }
}

export default App