import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { Todo } from '../model/todo';
import { validFilter } from 'src/app/filter/filter.actions';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: []
})
export class TodosListComponent implements OnInit {

  todos:Todo[] = []
  filter:validFilter
  constructor(private store:Store<AppState>) { 
    this.store.subscribe(state=>{
      this.todos = state.todos
      this.filter = state.filter
    })
  }

  ngOnInit() {
  }

}
