import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { TouchSequence } from 'selenium-webdriver';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { AddTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {

  txtInput: FormControl;

  constructor(private store:Store<AppState>) { 

    
  }

  ngOnInit() {
      this.txtInput = new FormControl('', Validators.required)
  }


  addTodo(){
    if(this.txtInput.invalid) return;
    const accion = new AddTodoAction(this.txtInput.value)
    this.store.dispatch(accion)
    this.txtInput.setValue('')
  }

}
