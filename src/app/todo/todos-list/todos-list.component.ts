import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: []
})
export class TodosListComponent implements OnInit {

  todos:Todo[] = []
  constructor(private store:Store<AppState>) { 
    this.store.select('todos').subscribe(todos=>this.todos = todos)
  }

  ngOnInit() {
  }

}
