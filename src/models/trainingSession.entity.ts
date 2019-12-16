import { Entity, PrimaryColumn, Column } from 'typeorm';
import { Field, ObjectType, InputType, Int } from 'type-graphql';

@ObjectType()
@InputType('TrainingSessionInput')
@Entity()
export class TrainingSession {
  @Field(type => Int)
  @PrimaryColumn()
  id: number;

  @Field()
  @Column()
  requestId: number;

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
