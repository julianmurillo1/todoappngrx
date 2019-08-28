import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/model/todo';
import { validFilter } from './filter.actions';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: validFilter): any {
    
    switch (filter){
      case 'Active':
        return todos.filter(todo=>!todo.completed)
      case 'Completed':
        return todos.filter(todo=>todo.completed)
      default:
        return todos;
    }

  }

}
