import { Action } from '@ngrx/store';

export const SET_FILTER = '[Filter] Set filter'

export type validFilter = 'All' | 'Completed' | 'Active'

export class SetFilterAction implements Action{
    readonly type: string = SET_FILTER;
    constructor(public filter:validFilter){}
}

export type Actions = SetFilterAction