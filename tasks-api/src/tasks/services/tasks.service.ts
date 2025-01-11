import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Task } from '../entities/task.entity';

@Injectable()
export class TasksService {
  constructor(@InjectRepository(Task) private tasksRepo: Repository<Task>) {}

  findAll() {
    // hara un select *
    return this.tasksRepo.find();
  }

  findOne(id: number) {
    return this.tasksRepo.findOne({
      where: {
        id,
      },
    });
  }

  // aqui deberia ser una interfaz o un DTO
  create(body: any) {
    /*const newTask = new Task();
        newTask.name = body.name*/
    // si esque tuvieramos multiples campos hay un metodo que creara la instancia
    // const newTask = this.tasksRepo.create({
    //     todoslosatributosqueharanmatch
    // })
    const newTask = this.tasksRepo.create(body);
    return this.tasksRepo.save(newTask);
  }

  async update(id: number, body: any) {
    const task = await this.tasksRepo.findOne({
      where: {
        id,
      },
    });
    this.tasksRepo.merge(task, body);
    return this.tasksRepo.save(task);
  }

  async delete(id: number) {
    await this.tasksRepo.delete(id);
    return true;
  }
}
