import * as TodoActions from './todo.actions';
import { Todo } from './model/todo';


const todo = new Todo('Test1')
const todo2 = new Todo('Test2')


const initialState: Todo[] = [todo, todo2];


export function todoReducer(state = initialState , action:TodoActions.Actions): Todo[]{
    switch (action.type){
        case TodoActions.ADD_TODO:
            const todo = new Todo(action.payload)
            return[...state, todo] 
        default: return state
    }
}