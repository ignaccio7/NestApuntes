
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

//esto seria una entidad
@Entity()
export class Task {
 //los atributos
 @PrimaryGeneratedColumn()
 id:number;

 // tambien podriamos añadir que seria un varchar de 100 caracteres etc
 @Column({ length:100 })
 name:string;

 @Column({ default: false })
 completed: boolean

}
