//Las entidades en NEST funciona de forma similar a un modelo

export enum TaskStatus {
    OPEN = 'OPEN',
    CLOSED = 'CLOSED',
    PENDING = 'PENDING',
    STOPPED = 'STOPPED'
}

export class Task {
    id: string
    title: string
    description: string
    status: TaskStatus
}