import React, { component } from 'react';
import TodoList from './TodoList';
import './css/App.css'

class App extends component {
    constructor() {
        super()
        const todos = [
                    {
                    id: 1,
                    title: "Hello, React",
                    desc: "React始めました",
                    done: false
                },
                {
                    id: 2,
                    title: "Hello, Redux!",
                    desc: "Reduxも始めました",
                    done: false
                },
            ]
            this.state = {
                todos: todos,
                countTodo: todos.length + 1,
            }
        }

        handlesubmit(e) {
            e.preventDefault();
            const title = e.target.title.value;
            const desc = e.target.desc.value;
            const todos = this.state.todos.slice()
            const countTodo = this.state.countTodo

            todos.push({
                id: countTodo,
                title: title,
                desc: desc,
                done: false
            });

            this.setState({todos})
            this.setState({countTodo: countTodo + 1})

            e.target.title.value ='';
            e.target.desc.value = '';
        }

    render() {
        return ( 
        <div className = "app" >
            <hi> todoアプリを作ってみた </hi> 
            <Form handlesubmit={this.handlesubmit.bind(this)} />
            <TodoList todos = { this.state.todos }/> 
            </div>
        );
    }
}

export default App