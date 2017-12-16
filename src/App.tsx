import * as React from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import './App.css';
import Column from './components/column/Column';
import { Item } from './components/item/Item';

interface AppProps {
}

interface AppState {
    items1: Item[];
    items2: Item[];
    items3: Item[];
}

export type Lists = 'To Do' | 'Doing' | 'Done';

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            items1: [
                { title: 'Do thing', description: 'You should really do this!', id: 1 },
                { title: 'Do second thing', description: 'You should really do this!', id: 2 },
                { title: 'Do one more', description: 'You should really do this!', id: 3 },
            ],
            items2: [
                { title: 'Don\'t forget', description: 'You should really do this!', id: 4 },
            ],
            items3: [
                { title: 'This one is already done', description: 'You should really do this!', id: 5 },
            ]
        };
    }

    onDragStart = () => {
        /*...*/
    }

    getList = (list: Lists) => {
        switch (list) {
            case 'To Do':
                return this.state.items1;
            case 'Doing':
                return this.state.items2;
            case 'Done':
                return this.state.items3;
            default:
                return [];
        }
    }

    setList = (list: Lists, arr: Item[]) => {
        switch (list) {
            case 'To Do':
                this.setState({ ...this.state, items1: arr });
                break;
            case 'Doing':
                this.setState({ ...this.state, items2: arr });
                break;
            case 'Done':
                this.setState({ ...this.state, items3: arr });
                break;
            default:
                break;
        }
    }

    onDragEnd = (result: DropResult) => {
        if (!result.destination) {
            return;
        }

        const source = this.getList(result.source.droppableId as Lists);
        const destination =
            this.getList(result.destination.droppableId as Lists)
                .filter(item => String(item.id) !== result.draggableId);

        const beforeIndex = destination.slice(0, result.destination.index);
        const afterIndex = destination.slice(result.destination.index);
        const newDestination = [ ...beforeIndex, source[ result.source.index ], ...afterIndex ];
        const newSource = source.filter(item => String(item.id) !== result.draggableId);

        this.setList(result.source.droppableId as Lists, newSource);
        this.setList(result.destination.droppableId as Lists, newDestination);
    }

    render() {
        const { items1, items2, items3 } = this.state;
        return (
            <div className="App">
                <DragDropContext onDragEnd={this.onDragEnd} onDragStart={this.onDragStart}>
                    <Column title="To Do" items={items1}/>
                    <Column title="Doing" items={items2}/>
                    <Column title="Done" items={items3}/>
                </DragDropContext>
            </div>
        );
    }
}

export default App;
