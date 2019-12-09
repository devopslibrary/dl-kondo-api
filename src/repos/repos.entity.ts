import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Org } from '../orgs/orgs.entity';
import { Branch } from '../branches/branches.entity';
import { Field, ObjectType, InputType, Int } from 'type-graphql';

@ObjectType()
@InputType('RepoInput')
@Entity()
export class Repo {
  @Field(type => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  fullName: string;

  @Field()
  @Column()
  lastSynced: Date;

  @Field()
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
