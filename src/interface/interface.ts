export interface Task {
    id: number,
    title: string,
    desc: string,
    completed: boolean
}

export interface TaskList {
    tasks: Task[],
    filter: Filter
}

export interface Filter {
    type: 'status' | 'title' | 'default',
    value: string
}