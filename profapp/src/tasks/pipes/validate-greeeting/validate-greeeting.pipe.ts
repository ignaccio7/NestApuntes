import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateGreeetingPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value);
    // aqui parsearemos los datos que se recibe del cliente
    const ageNumber = parseInt(value.age);
    if (isNaN(ageNumber)) {
      throw new HttpException('Age must be a number', HttpStatus.BAD_REQUEST)
    }
    return {...value, age: ageNumber};
  }
}
