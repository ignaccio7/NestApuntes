import { Controller, 
  Delete, Get, Post, Put,
  NotFoundException, Param,Body,
  UsePipes,  
  ValidationPipe,
  HttpCode,
  ParseIntPipe,
  Query,
  UseGuards} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { ValidateGreeetingPipe } from './pipes/validate-greeeting/validate-greeeting.pipe';
import { AuthGuard } from './guards/auth/auth.guard';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('tasks')
export class TasksController {

  tasksService:TasksService

  constructor(tasksService:TasksService){
    this.tasksService = tasksService
  }

  // este apitags es para dar etiquetas en swagger
  @ApiTags('tasks')
  @ApiOperation({ summary: 'Get all tasks' })
  @ApiResponse({ status: 200, description: 'OK', type: CreateTaskDto })
  @Get('/')
  getTasks() {
    return this.tasksService.getTasks()
  }

  @ApiTags('tasks')
  // Para usar un pipe personalizado
  @Get('/greet')
  // Para usar un Guard que pide una cabecera en la peticion con el token access-token
  @UseGuards(AuthGuard)
  // greet(@Query() query: { name: string, age: number }) {
  greet(@Query(ValidateGreeetingPipe) query: { name: string, age: number }) {
    console.log(typeof query.name);
    console.log(typeof query.age);
    
    return `Hello ${query.name}, you are ${query.age + 10} years old`
  }

  @ApiTags('tasks')
  @Get('/:id')
  getTask(@Param('id') id:string){
    const taskFound = this.tasksService.getTask(+id)

    if(!taskFound) {
      return new NotFoundException(`Task ${id} not found`)
    }

    return taskFound
  }  

  @Post()
  @HttpCode(201)
  @UsePipes(new ValidationPipe({
    whitelist: true // Para que no acepte mas campos si le mandamos
  }))
  createTask(@Body() body:CreateTaskDto) {
    console.log(body)
    return this.tasksService.createTask(body)
  }

  @Put()
  updateTask(@Body() body:CreateTaskDto) {
    console.log(body)
    return this.tasksService.updateTask(body)
  }

  @Delete()
  deleteTask() {
    return this.tasksService.deleteTask()
  }

  // Que pasa si tuvieramos otra funcion que en el parametro recibe string pero queremos un number
  // con ParseIntPipe podemos hacer que el parametro sea un int ya que sin este es string
  // tambien existe el ParseBoolPipe o ParseFloatPipe etc
  @Get('/sum/:num')
  sum(@Param('num', ParseIntPipe) num:string) {
    return num + 10
  }
}
