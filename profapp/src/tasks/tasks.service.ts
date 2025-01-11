import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {

  private tasks: CreateTaskDto[] = [
    {
      id: 1,
      name: 'Task 1',
      status: false
    },
    {
      id: 2,
      name: 'Task 2',
      status: false
    },
    {
      id: 3,
      name: 'Task 3',
      status: false
    }
  ]

  getTasks(): CreateTaskDto[] {
    return this.tasks
  }

  getTask(id:number): CreateTaskDto {
    return this.tasks.find(t => t.id === id)
  }

  createTask(task: CreateTaskDto) {
    this.tasks.push({id: this.tasks.length + 1, ...task})
    return 'Task created'
  }

  updateTask(task: CreateTaskDto) {
    this.tasks.forEach(t => {
      if (t.name === task.name) {
        t.status = task.status
      }
    })
    return 'Task updated'
  }

  // deleteTask(name:string) {
  deleteTask() {
    // this.tasks = this.tasks.filter(t => t.name !== name)
    return 'Task deleted'
  }

}
