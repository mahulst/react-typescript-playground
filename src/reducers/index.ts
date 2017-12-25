import { combineReducers } from "redux";
import { toDoReducer } from "./todos/todos";
import { listReducer } from "./lists/lists";
import { ToDoList } from "./todos/todos.type";
import { Lists } from "./lists/lists.type";

export interface AppState {
    todos: ToDoList;
    lists: Lists;
}

export interface Action {
    readonly type: string;
}

const todoApp = combineReducers({
  todos: toDoReducer,
  lists: listReducer
});

export default todoApp;
