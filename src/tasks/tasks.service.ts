import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import  generateRandomId  from "../helpers/id-generator"
import { TaskUpdatedDTO } from './dto/task.dto';

@Injectable()
export class TasksService {

    private tasksList: Task[] = [ //Esta propiedad simula una BBDD
        {
            id: "001",
            title: "Tarea numero 1",
            description: "descripción de la tarea  1",
            status: TaskStatus.OPEN
        },
        {
            id: "002",
            title: "Tarea numero 2",
            description: "descripción de la tarea  2",
            status: TaskStatus.CLOSED
        },
        {
            id: "003",
            title: "Tarea numero 3",
            description: "descripción de la tarea  3",
            status: TaskStatus.PENDING
        },
        {
            id: "004",
            title: "Tarea numero 4",
            description: "descripción de la tarea  4",
            status: TaskStatus.OPEN
        },
    ];

    // Methods

    getAllTasks() {
        return this.tasksList;
    }

    createTask(title: string, description: string) {

        let newTask = {
            id: generateRandomId(),
            title,
            description,
            status: TaskStatus.OPEN
        }

        this.tasksList.push(newTask);

        return newTask;

    }

    findTask( id: string ): Task {
        return this.tasksList.find( task => task.id === id );
    }

    updateTask( id: string, updatedData: TaskUpdatedDTO ): Task {
        const taskToUpdate = this.findTask(id);
        const taskUpdated = Object.assign( taskToUpdate, updatedData );
        this.tasksList = this.tasksList.map( task => task.id === id ? taskUpdated : task );
        return taskUpdated;
    }

    deleteTask( id:string ) {
        this.tasksList = this.tasksList.filter( task => task.id !== id );
    }



}
