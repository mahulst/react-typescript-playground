import * as React from "react";
import * as renderer from "react-test-renderer";
import { App } from "./App";
import { DropResult } from "react-beautiful-dnd";
import { ToDo } from "./reducers/todos/todos.type";
import { List } from "./reducers/lists/lists.type";

const todos: ToDo[] = [
  { id: 1, title: "To Do", list: 1, description: "description" },
  { id: 2, title: "To Do 2", list: 1, description: "description 2" }
];

const lists: List[] = [
  { id: 1, title: "List", description: "First list", order: 1 },
  { id: 2, title: "List 2", description: "Second list", order: 2 }
];
let addToDoToListSpy: () => {};

function render() {
  addToDoToListSpy = jest.fn();
  return renderer.create(
    <App todos={todos} lists={lists} addToDoToList={addToDoToListSpy} />
  );
}

describe("onDragEnd", () => {
  it("adds the dragged item to the destination list", () => {
    const component = render();
    const tree = component.toJSON();
    if (!tree) throw new Error("App:toJSON failed.");

    const result: DropResult = {
      draggableId: "1",
      type: "ITEM",
      source: {
        droppableId: "2",
        index: 3
      },
      destination: {
        droppableId: "4",
        index: 5
      }
    };
    const componentInstance: any = component.getInstance();
    componentInstance.onDragEnd(result);

    expect(addToDoToListSpy).toHaveBeenCalledWith(1, 4);
  });

  it("should do nothing when there is no destination list", () => {
    const component = render();
    const tree = component.toJSON();
    if (!tree) throw new Error("App:toJSON failed.");

    const result: DropResult = {
      draggableId: "1",
      type: "ITEM",
      source: {
        droppableId: "2",
        index: 3
      }
    };
    const componentInstance: any = component.getInstance();
    componentInstance.onDragEnd(result);

    expect(addToDoToListSpy).not.toHaveBeenCalled();
  });
});
