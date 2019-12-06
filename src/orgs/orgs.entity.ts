import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Org {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column()
  installationId: number;

  @Column()
  lastSynced: Date;
}
