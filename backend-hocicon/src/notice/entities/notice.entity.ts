import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

//esto seria una entidad
@Entity()
export class Notice {
  //los atributos
  @PrimaryGeneratedColumn()
  id: number;

  // tambien podriamos añadir que seria un varchar de 100 caracteres etc
  @Column({ length: 100 })
  titulo: string;

  @Column()
  imagen: string;

  @Column()
  lugar: string;

  @Column({ length: 100 })
  autor: string;

  @Column()
  contenido: string;

  @CreateDateColumn({
    name: 'creation_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  creationAt: Date;
}
