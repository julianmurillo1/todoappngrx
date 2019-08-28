import { Todo } from './todo/model/todo';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todo/todo.reducer';


import * as fromTodo from './todo/todo.reducer'
import * as fromFilter from './filter/filter.reducer'

import {validFilter} from './filter/filter.actions'

 import { from } from 'rxjs';

export interface AppState{
    todos:Todo[]
    filter: validFilter
}


export const reducers:ActionReducerMap<AppState> = {
    todos: fromTodo.todoReducer,
    filter:fromFilter.filterReducer
}