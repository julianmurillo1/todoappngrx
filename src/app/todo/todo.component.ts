import { Component, OnInit } from '@angular/core';
import { ToogleAllAction } from './todo.actions';
import { AppState } from '../app.reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  completed:boolean = false;
  constructor(private store:Store<AppState>) { }

  ngOnInit() {
  }
  all(){
    this.completed = !this.completed
    const accion = new ToogleAllAction(this.completed)
    this.store.dispatch(accion)
   }
}
