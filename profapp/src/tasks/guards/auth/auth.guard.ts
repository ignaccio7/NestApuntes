import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    // Aqui validariamos si esque el usuario tiene permisos para acceder a la ruta
    // Si no lo tiene, nos devuelve false

    const request = context.switchToHttp().getRequest() as Request
    console.log(request.url);

    const token = request.headers['authorization']
    console.log(token);
    

    if(token !== 'access-token') return false
    
    return true;
  }
}
