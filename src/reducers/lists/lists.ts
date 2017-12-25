import { Lists } from "./lists.type";

const initialState = {
    lists: [
        {
            title: "To Do",
            description: "You should really do this!",
            id: 1,
            order: 1
        },
        {
            title: "Doing",
            description: "Currently busy with this",
            id: 2,
            order: 2
        },
        {
            title: "Done",
            description: "Log of completed tasks",
            id: 3,
            order: 3
        }
    ]
};

export function listReducer(
    state: Lists = initialState,
    action: never
): Lists {
    return state;
}
