import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Repo } from '../repos/repos.entity';

@Entity()
export class Branch {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  fullName: string;

  @Column()
  lastCommitDate: Date;

  @Column()
  lastSynced: Date;

  @Column()
  protected: boolean;

  @ManyToOne(
    type => Repo,
    repo => repo.branches,
  )
  repo: Repo;
}
