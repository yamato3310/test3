import React, {Component} from 'react';
import Todo from './Todo';

class TodoList extends Component {

    render() {
        const todo = this.props.todos.map( todo => 
            <Todo
                key={todo.id}
                {...todo}
                setTodostatue={this.props.setTodostatue}
            />
        )

        return(
            <ul>
                {todos}
            </ul>
        );
    }
}

export default TodoList