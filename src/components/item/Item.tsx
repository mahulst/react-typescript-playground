import * as React from 'react';
import './Item.css';
import { Draggable } from 'react-beautiful-dnd';

export interface Item {
    title: string;
    description: string;
    id: number;
}

interface ItemProps {
    item: Item;
}

class ToDoItem extends React.Component<ItemProps> {
    render() {
        const { title, description, id} = this.props.item;
        return (
            <Draggable type="ITEM" draggableId={String(id)}>
                {(provided, snapshot) => (
                    <div>
                        <div
                            ref={provided.innerRef}
                            style={provided.draggableStyle}
                            {...provided.dragHandleProps}
                            className="Item"
                        >
                            <h4>{title}</h4>
                            <p>{description}</p>
                        </div>
                        {provided.placeholder}
                    </div>
                )}
            </Draggable>
        );
    }
}

export default ToDoItem;
