import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { ToggleAction, EditAction, DeleteTodo } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input() todo:Todo;
  @ViewChild('txt',{
    static:true
  }) txt: ElementRef;
  checkField:FormControl
  txtInput: FormControl
  editing:boolean
  constructor(private store:Store<AppState>) { }

  ngOnInit() {

    this.checkField = new FormControl(this.todo.completed)
    this.txtInput = new FormControl(this.todo.text, Validators.required)
    this.checkField.valueChanges.subscribe((chk)=>{
      const accion = new ToggleAction(this.todo.id)
       this.store.dispatch(accion)
    })
  }

  edit(){
    this.editing = true;
    setTimeout(() => {
          this.txt.nativeElement.select()
    }, 1);
  }

  finishEdit(){
    this.editing = false;
    if (this.txtInput.invalid || this.txtInput.value === this.todo.text) return
    const accion = new EditAction(this.todo.id, this.txtInput.value)
    this.store.dispatch(accion)
  }

  delete(){
    const accion = new DeleteTodo(this.todo.id)
    this.store.dispatch(accion)
  }
}
