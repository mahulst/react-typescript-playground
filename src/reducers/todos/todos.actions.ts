import { Action } from "../index";

export const ADD_TODO_TO_LIST = "[todos] Add ToDo to list";

export class AddToDoToList implements Action {
  readonly type = ADD_TODO_TO_LIST;

  constructor(public payload: { todoId: number; list: number }) {}
}

export type All = AddToDoToList;
