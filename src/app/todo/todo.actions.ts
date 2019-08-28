import { Action } from '@ngrx/store'
 


export const ADD_TODO = '[TODO] Agregar  todo'
export const TOGGLE_TODO  = '[TODO] Cambiar estado'
export const EDIT_TODO  = '[TODO] Editar todo'
export const DELETE_TODO  = '[TODO] Borrar Todo'
export const TOGGLE_ALL_TODO ='[TODO] Cambiar estado de todos'
export const CLEAR_COMPLETED ='[TODO] Eliminar completados'

export class AddTodoAction implements Action{
    readonly type = ADD_TODO
     constructor(public payload: string){}
}


export class ToggleAction implements Action{
    readonly type = TOGGLE_TODO
    constructor(public payload: number){}
}


export class EditAction implements Action{
    readonly type = EDIT_TODO
    constructor(public id:number, public text:string){

    }
}


export class DeleteTodo implements Action{
    readonly type = DELETE_TODO
    constructor(public id:number){

    }
}

export class ToogleAllAction implements Action{
       readonly type = TOGGLE_ALL_TODO
    constructor(public completed:boolean){
    }
}


export class ClearCompletedAction implements Action{
    readonly type = CLEAR_COMPLETED
}

export type Actions =  AddTodoAction | ToggleAction | EditAction | DeleteTodo | ToogleAllAction |ClearCompleted