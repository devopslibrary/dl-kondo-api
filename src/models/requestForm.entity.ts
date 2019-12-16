import {
  Entity,
  Column,
  OneToMany,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Field, ObjectType, InputType, Int } from 'type-graphql';
import { PrimaryGeneratedColumn } from 'typeorm';
import { SubmissionStatus } from './submissionStatus.entity';
import { ProgramInformation } from './programInformation.entity';
import { StrategyAlignment } from './strategyAlignment.entity';
import { FacilityLogistics } from './facilityLogistics.entity';
import { RegistrationLogistics } from './registrationLogistics.entity';
import { SiteRequirements } from './siteRequirements.entity';

@ObjectType()
@InputType('RequestFormInput')
@Entity()
export class RequestForm {
  @Field(type => Int, { nullable: true })
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ length: 50 })
  name: string;

  @Field(type => SubmissionStatus, { nullable: true })
  @OneToOne(type => SubmissionStatus, { cascade: ['insert', 'update'] })
  @JoinColumn()
  status: SubmissionStatus;

  @Field(type => ProgramInformation, { nullable: true })
  @OneToOne(type => ProgramInformation, { cascade: ['insert', 'update'] })
  @JoinColumn()
  program: ProgramInformation;

  @Field(type => StrategyAlignment, { nullable: true })
  @OneToOne(type => StrategyAlignment, { cascade: ['insert', 'update'] })
  @JoinColumn()
  strategy: StrategyAlignment;

  @Field(type => FacilityLogistics, { nullable: true })
  @OneToOne(type => FacilityLogistics, { cascade: ['insert', 'update'] })
  @JoinColumn()
  facilityLogistics: FacilityLogistics;

  @Field(type => RegistrationLogistics, { nullable: true })
  @OneToOne(type => RegistrationLogistics, { cascade: ['insert', 'update'] })
  @JoinColumn()
  registrationLogistics: RegistrationLogistics;

  @Field(type => SiteRequirements, { nullable: true })
  @OneToOne(type => SiteRequirements, { cascade: ['insert', 'update'] })
  @JoinColumn()
  siteRequirements: SiteRequirements;
}
