export interface ToDoList {
  todos: ToDo[];
}

export interface ToDo {
  title: string;
  description: string;
  id: number;
  list: number;
}
