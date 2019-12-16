import { Entity, Column, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { Field, ObjectType, InputType, ID } from 'type-graphql';
import { PrimaryGeneratedColumn } from 'typeorm';
import { SubmissionStatus } from './submissionStatus.entity';
import { ProgramInformation } from './programInformation.entity';
import { StrategyAlignment } from './strategyAlignment.entity';
import { FacilityLogistics } from './facilityLogistics.entity';
import { RegistrationLogistics } from './registrationLogistics.entity';
import { SiteRequirements } from './siteRequirements.entity';
import { TrainingSession } from './trainingSession.entity';

@ObjectType()
@InputType('RequestFormInput')
@Entity()
export class RequestForm {
  @Field(type => Number)
  @PrimaryGeneratedColumn()
  id?: number;

  @Field()
  @Column({ length: 50 })
  name: string;

  @Field(type => SubmissionStatus)
  @OneToOne(type => SubmissionStatus, { cascade: ['insert', 'update'] })
  @JoinColumn()
  status: SubmissionStatus;

  @Field(type => ProgramInformation)
  @OneToOne(type => ProgramInformation, { cascade: ['insert', 'update'] })
  @JoinColumn()
  program: ProgramInformation;

  @Field(type => StrategyAlignment)
  @OneToOne(type => StrategyAlignment, { cascade: ['insert', 'update'] })
  @JoinColumn()
  strategy: StrategyAlignment;

  @Field(type => FacilityLogistics)
  @OneToOne(type => FacilityLogistics, { cascade: ['insert', 'update'] })
  @JoinColumn()
  facilityLogistics: FacilityLogistics;

  @Field(type => RegistrationLogistics)
  @OneToOne(type => RegistrationLogistics, { cascade: ['insert', 'update'] })
  @JoinColumn()
  registrationLogistics: RegistrationLogistics;

  @Field(type => SiteRequirements)
  @OneToOne(type => SiteRequirements, { cascade: ['insert', 'update'] })
  @JoinColumn()
  siteRequirements: SiteRequirements;

  @Field(type => TrainingSession)
  @JoinColumn()
  @OneToMany(
    type => TrainingSession,
    trainingSession => trainingSession.requestForm,
    { cascade: ['insert', 'update'] },
  )
  trainingSessions: TrainingSession[];
}
