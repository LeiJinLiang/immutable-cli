import React from 'react';

export function Todo(props) {
    const { todo } = props;

    if(todo.isDone) {
        return <strike>{todo.text}</strike>;
    } else {
        return <span>{todo.text}</span>;
    }
}

export function TodoList(props) {
    console.log('props',props)
    const { todos, toggleTodo, addTodo } = props;

    const onSubmit = (event) => {
        const input = event.target;
        const text = input.value;
        const isEnterKey = (event.which == 13);
        const isLongEnough = text.length > 0;

        if(isEnterKey && isLongEnough) {
            input.value = '';
            addTodo(text);
        }
    };

    const toggleClick = id => event => toggleTodo(id);

    return (
        <div >
            <input type='text'
                   placeholder='Add todo'
                   onKeyDown={onSubmit} />
            <ul >
                {todos.map(t => (
                    <li key={t.get('id')}
                        onClick={toggleClick(t.get('id'))}>
                        <Todo todo={t.toJS()} />
                    </li>
                ))}
            </ul>
        </div>
    );
}