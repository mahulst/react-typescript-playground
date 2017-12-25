import { ToDo, ToDoList } from "./todos.type";
import * as ToDoActions from "./todos.actions";

const initialState = {
  todos: [
    {
      title: "Do thing",
      description: "You should really do this!",
      id: 1,
      list: 1
    },
    {
      title: "Do second thing",
      description: "You should really do this!",
      id: 2,
      list: 1
    },
    {
      title: "Do one more",
      description: "You should really do this!",
      id: 3,
      list: 2
    },
    {
      title: "Don't forget",
      description: "You should really do this!",
      id: 4,
      list: 2
    },
    {
      title: "This one is already done",
      description: "You should really do this!",
      id: 5,
      list: 3
    }
  ]
};

export function toDoReducer(
  state: ToDoList = initialState,
  action: ToDoActions.All
): ToDoList {
  switch (action.type) {
    case ToDoActions.ADD_TODO_TO_LIST:
        const listAfterRemove = state.todos.filter((t: ToDo) => t.id !== action.payload.todoId);
        const removedToDo = state.todos.filter((t: ToDo) => t.id === action.payload.todoId).pop();

        if (removedToDo !== undefined) {
            removedToDo.list = action.payload.list;
            return  { todos: [...listAfterRemove, { ...removedToDo }] };
        }
        return state;

    default:
        return state;
  }
}
