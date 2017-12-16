import * as React from 'react';
import './Column.css';
import { Item, default as ToDoItem } from '../item/Item';
import { Droppable } from 'react-beautiful-dnd';
import { Lists } from '../../App';

interface ColumnProps {
    title: Lists;
    items: Item[];
}

class Column extends React.Component<ColumnProps> {
    render() {
        const { title, items = [] } = this.props;
        return (
            <Droppable droppableId={title} type="ITEM">
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        className="column"
                    >
                        <h3>{title}</h3>
                        {items.map((item: Item) => <ToDoItem key={item.id} item={item} /> )}
                    </div>
                )}
            </Droppable>
        );
    }
}

export default Column;
