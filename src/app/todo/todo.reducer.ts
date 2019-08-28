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
        case TodoActions.TOGGLE_TODO:
            return state.map(todoEdit =>{
                if(todoEdit.id === action.payload){
                    return{
                        ...todoEdit,
                        completed : !todoEdit.completed
                    }
                }else {
                    return todoEdit
                }
            });
        case TodoActions.EDIT_TODO:
            return state.map(todoEdit=>{
                if(todoEdit.id === action.id){
                    return {
                        ...todoEdit,
                        text : action.text
                    }
                } else return todoEdit
            })
        case TodoActions.DELETE_TODO:
            return state.filter((todo)=>todo.id !== action.id)
        case TodoActions.TOGGLE_ALL_TODO:
            return state.map((todo)=>{
                return {
                    ...todo,
                    completed: action.completed
                }
            })
        case TodoActions.CLEAR_COMPLETED:
            return state.filter(todo=>!todo.completed)
        default: return state
    }
}