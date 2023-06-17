//Importando Nest Validator
import { IsIn, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator"
import { Task, TaskStatus } from "../task.entity"

export class CreateTaskDTO {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title: string;

    @IsString()
    @IsNotEmpty()
    description: string;
}

export class TaskUpdatedDTO {
    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsOptional()
    @IsIn([TaskStatus.CLOSED, TaskStatus.OPEN, TaskStatus.PENDING, TaskStatus.STOPPED])
    status?: TaskStatus;
}