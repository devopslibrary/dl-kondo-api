import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Org } from '../orgs/orgs.entity';
import { Branch } from '../branches/branches.entity';

@Entity()
export class Repo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  fullName: string;

  @Column()
  lastSynced: Date;

  @Column()
  defaultBranch: string;

  @ManyToOne(
    type => Org,
    org => org.repos,
  )
  org: Org;

  @OneToMany(
    type => Branch,
    branch => branch.repo,
  )
  branches: Branch[];
}
