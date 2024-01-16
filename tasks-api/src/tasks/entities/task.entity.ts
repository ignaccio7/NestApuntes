import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

//esto seria una entidad
@Entity()
export class Task {
  //los atributos
  @PrimaryGeneratedColumn()
  id: number;

  // tambien podriamos añadir que seria un varchar de 100 caracteres etc
  @Column({ length: 100 })
  name: string;

  @Column({ default: false })
  completed: boolean;

  // que pasa si quisieramos añadir 2 columnas mas
  @CreateDateColumn({
    name: 'creation_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  creationAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
