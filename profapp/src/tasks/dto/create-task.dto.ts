import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  MinLength
} from 'class-validator'

export class CreateTaskDto {
  @IsOptional()
  @IsNumber()
  id?: number
  @IsString()
  @MinLength(1)
  name?: string
  @IsBoolean()
  status?: boolean
}