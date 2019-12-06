import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Setting {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nukeStaleBranches: boolean;

  @Column()
  nukeStalePRs: boolean;
}
