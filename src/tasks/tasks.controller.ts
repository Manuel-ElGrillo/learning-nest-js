import { Controller, Get, Post, Body, Delete, Param, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDTO, TaskUpdatedDTO } from './dto/task.dto';

@Controller('tasks')
export class TasksController {

    constructor(private taskService: TasksService) {}

    //Peticion a /task
    @Get()
    getAllTasks() {
        return this.taskService.getAllTasks();
    }

    //Peticion a /task
    @Post()
    createTask(@Body() newTask: CreateTaskDTO) { //Recibiendo los datos desde el FE o probando en Postman
        return this.taskService.createTask(newTask.title, newTask.description);
    }

    //Peticion a /task/id
    @Delete(':id')
    deleteTask(@Param('id') id:string) {
        return {
            message: "Tarea eliminada",
            task: this.taskService.deleteTask(id)
        }
    }

    @Patch(':id') //Actualizacion parcial de los datos
    updateTask(@Param('id') id: string, @Body() updatedData: TaskUpdatedDTO) {
        return {
            message: 'Tarea actualizada',
            task: this.taskService.updateTask(id, updatedData)
        }
        
    }

}
