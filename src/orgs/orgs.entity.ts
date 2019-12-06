import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Repo } from '../repos/repos.entity';
import { Setting } from '../settings/settings.entity';
import { User } from '../users/users.entity';

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
