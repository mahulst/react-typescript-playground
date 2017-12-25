import { toDoReducer } from "./todos";
import { ToDoList } from "./todos.type";
import { AddToDoToList } from "./todos.actions";

it("should change the list id to the new list", () => {
    const state: ToDoList = {
        todos: [
            { id: 1, list: 1, title: "Test", description: "Do this" }
        ]
    };
    const action = new AddToDoToList({ todoId: 1, list: 2 });
    const result = toDoReducer(state, action);

    const expectedResult: ToDoList = {
      todos: [
          { id: 1, list: 2, title: "Test", description: "Do this" }
      ]
    };
    expect(result).toEqual(expectedResult);

});
