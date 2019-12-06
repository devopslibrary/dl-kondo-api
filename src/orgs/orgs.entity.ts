import {
  Entity,
  PrimaryColumn,
  Column,
  OneToMany,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Repo } from '../repos/repos.entity';
import { Setting } from '../settings/settings.entity';
import { User } from '../users/users.entity';
import { Field, ID, ObjectType, InputType, Int } from 'type-graphql';

@ObjectType()
@InputType('OrgInput')
@Entity()
export class Org {
  @Field(type => Int)
  @PrimaryColumn()
  id: number;

  @Field()
  @Column({ length: 50 })
  name: string;

  @Field()
  @Column()
  installationId: number;

  @Field()
  @Column()
  lastSynced: Date;

  @OneToMany(
    type => Repo,
    repo => repo.org,
  )
  repos: Repo[];

  @ManyToOne(
    type => User,
    user => user.orgs,
  )
  user: User;

  @OneToOne(type => Setting)
  @JoinColumn()
  setting: Setting;
}
