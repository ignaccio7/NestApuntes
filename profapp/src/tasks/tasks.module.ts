import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { LoggerMiddleware } from './logger/logger.middleware';
import { AuthMiddleware } from './auth/auth.middleware';

@Module({
  controllers: [TasksController],
  providers: [TasksService]
})
// export class TasksModule {}
// Implementando nuestros middlewares
export class TasksModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(LoggerMiddleware)
    //.forRoutes('tasks') // <- con esto todas las rutas ejecutan ese middleware
    // para definir solo para determinadas rutas
    .forRoutes(
      {
        path: '/tasks',
        method: RequestMethod.GET
      },
      {
        path: '/tasks/sum/:num',
        method: RequestMethod.GET
      }
    )
    .apply(AuthMiddleware)
    .forRoutes('tasks')
  }
}
