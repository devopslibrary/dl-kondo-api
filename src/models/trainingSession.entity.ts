import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType, InputType, ID } from 'type-graphql';
import { RequestForm } from './requestForm.entity';

@ObjectType()
@InputType('TrainingSessionInput')
@Entity()
export class TrainingSession {
  @Field(type => Number)
  @PrimaryGeneratedColumn()
  id?: number;

  @ManyToOne(
    type => RequestForm,
    requestForm => requestForm.trainingSessions,
    { onDelete: 'CASCADE' },
  )
  requestForm: RequestForm;

  @Field()
  @Column()
  courseTitle: string;

  @Field()
  @Column()
  courseDescription: string;

  @Field()
  @Column()
  learningObjectives: string;

  @Field()
  @Column()
  aptifyCourseId: string;

  @Field()
  @Column()
  aptifyClassId: string;

  @Field()
  @Column()
  trainingDates: string;

  @Field()
  @Column()
  startTime: string;

  @Field()
  @Column()
  endTime: string;

  @Field()
  @Column()
  instructor: string;

  @Field()
  @Column()
  travelNeeded: boolean;

  @Field()
  @Column()
  instructorBio: string;

  @Field()
  @Column()
  ceusAwarded: boolean;

  @Field()
  @Column()
  numberOfCeus: number;

  @Field()
  @Column()
  roomLayout: string;

  @Field()
  @Column()
  classCapacity: number;

  @Field()
  @Column()
  standardMemberPrice: number;

  @Field()
  @Column()
  standardNonMemberPrice: number;

  @Field()
  @Column()
  earlyBirdMemberPrice: number;

  @Field()
  @Column()
  earlyBirdNonMemberPrice: number;

  @Field()
  @Column()
  dicountsAndBundles: string;

  @Field()
  @Column()
  additionalRequests: string;
}
