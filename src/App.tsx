import * as React from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { connect } from "react-redux";
import { AddToDoToList } from "./reducers/todos/todos.actions";
import { ToDo } from "./reducers/todos/todos.type";
import Column from "./components/column/Column";
import { List } from "./reducers/lists/lists.type";

import "./App.css";
import { Action } from "redux";
import { AppState } from "./reducers/index";

interface AppProps {
  addToDoToList: (todoList: number, list: number) => void;
  todos: ToDo[];
  lists: List[];
}

export class App extends React.Component<AppProps> {
  onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }
    this.props.addToDoToList(
      parseInt(result.draggableId, 10),
      parseInt(result.destination.droppableId, 10)
    );
  };

  render() {
    const { todos, lists } = this.props;
    const sortedLists = lists.sort((a, b) => a.order - b.order);
    return (
      <div className="App">
        <DragDropContext onDragEnd={this.onDragEnd}>
          {sortedLists.map((list: List) => {
            const listToDos = todos.filter((l: ToDo) => l.list === list.id);
            return (
              <Column
                key={list.id}
                title={list.title}
                items={listToDos}
                id={list.id}
              />
            );
          })}
        </DragDropContext>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    todos: state.todos.todos,
    lists: state.lists.lists
  };
};

const mapDispatchToProps = (dispatch: (action: Action) => void) => {
  return {
    addToDoToList: (todoId: number, list: number) => {
      dispatch(new AddToDoToList({ todoId, list }));
    }
  };
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;
