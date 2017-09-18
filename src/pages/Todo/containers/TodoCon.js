import { connect } from 'react-redux'
import {TodoList} from '../components/Todo'
import { addTodo, toggleTodo } from "../actions"

const mapStateToProps = (state) => {
    console.log('state',state)
    return (
        { todos : state.rootReducer.reducer}
    )
}

const mapDispatchToProps = (dispatch) => (
    {
        addTodo : text => dispatch(addTodo(text)),
        toggleTodo : id => dispatch(toggleTodo(id))
    }
)


module.exports = connect(mapStateToProps, mapDispatchToProps)(TodoList)