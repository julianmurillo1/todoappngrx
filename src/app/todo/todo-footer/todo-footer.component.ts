import { Component, OnInit } from '@angular/core';

import * as filterActions from '../../filter/filter.actions'
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../model/todo';
 import {  ClearCompletedAction } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  validFilters:filterActions.validFilter[] = ['All', 'Active', 'Completed']
  activeFilter: filterActions.validFilter;
  itemLeft:number;
  constructor(private store:Store<AppState>) { 
    this.store.subscribe((state)=>{
        this.itemLeft = this.countItemLeft(state.todos)
        this.activeFilter = state.filter;
    })
  }

  ngOnInit() {
  }
  changeFilter(newFilter:filterActions.validFilter){
      const action = new filterActions.SetFilterAction(newFilter);
      this.store.dispatch(action)
  }

  countItemLeft(todos:Todo[]):number{
    return todos.filter(todo=>!todo.completed).length
  }

  clearCompleted(){
    const accion = new ClearCompletedAction()
    this.store.dispatch(accion);
  }

}
