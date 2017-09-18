import { List, Map } from 'immutable'
import { combineReducers } from 'redux'

const init = List([])

 const reducer = (todos = init, action) => {
   switch (action.type) {
       case  'ADD_TODO':
            return todos.push(Map(action.payload))
       case  'TOGGLE_TODO':
           return todos.map( t=> {
               if(t.get('id') === action.payload) {
                   return t.update('isDone', isDone => !isDone)
               }else{
                   return t
               }
           })
       default:
           return todos
   }
}

 const reducer2 = (todos = init, action) => {
    switch (action.type) {
        case  'ADD_TODO':
            return todos.push(Map(action.payload))
        case  'TOGGLE_TODO':
            return todos.map( t=> {
                if(t.get('id') === action.payload) {
                    return t.update('isDone', isDone => !isDone)
                }else{
                    return t
                }
            })
        default:
            return todos
    }
}

const rootReducer = combineReducers({ reducer, reducer2})

export default rootReducer