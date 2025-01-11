import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { TasksService } from '../services/tasks.service';

// aqui es donde hariamos los metodos de captura
//el controler nos va dar la ruta principal
// @Controller('tasks')
@Controller('api/tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  //@Get('/aquitambienpodriamosdefinirlaruta')
  @Get()
  getAll() {
    // return [ 1,2,3 ]
    return this.taskService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    // return id
    return this.taskService.findOne(id);
  }

  @Post()
  create(@Body() body: any) {
    // return body
    return this.taskService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    // return body
    return this.taskService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    // return true
    return this.taskService.delete(id);
  }
}
