export interface Lists {
    lists: List[];
}

export interface List {
    title: string;
    description: string;
    id: number;
    order: number;
}
