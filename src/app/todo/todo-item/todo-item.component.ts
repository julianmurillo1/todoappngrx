import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../model/todo';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input() todo:Todo;
  checkField:FormControl
  txtInput: FormControl
  editing:boolean
  constructor() { }

  ngOnInit() {

    this.checkField = new FormControl(this.todo.completed)
    this.txtInput = new FormControl(this.todo.text, Validators.required)
  
  }

}
