const uid = () => Math.random().toString(34).slice(2)

export const addTodo = (text) => (
    {
        type : 'ADD_TODO',
        payload : {
            id : uid(),
            isDone : false,
            text : text
        }
    }
)

export const toggleTodo = (id) => (
    {
        type : 'TOGGLE_TODO',
        payload: id
    }
)