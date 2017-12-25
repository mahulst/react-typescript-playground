import * as React from "react";
import "./Column.css";
import { Item, default as ToDoItem } from "../item/Item";
import { Droppable } from "react-beautiful-dnd";

interface ColumnProps {
  id: number;
  title: string;
  items: Item[];
}

class Column extends React.Component<ColumnProps> {
  render() {
    const { id, title, items = [] } = this.props;

    return (
      <Droppable droppableId={id.toString()} type="ITEM">
        {(provided, snapshot) => (
          <div ref={provided.innerRef} className="column">
            <h3>{title}</h3>
            {items.map((item: Item) => <ToDoItem key={item.id} item={item} />)}
          </div>
        )}
      </Droppable>
    );
  }
}

export default Column;
