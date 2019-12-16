import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType, InputType, ID } from 'type-graphql';

@ObjectType()
@InputType('SubmissionStatusInput')
@Entity()
export class SubmissionStatus {
  @Field(type => Number)
  @PrimaryGeneratedColumn()
  id?: number;

  // Submission to Program Manager
  @Field()
  @Column()
  submittedToProgramManager: boolean;

  @Field()
  @Column()
  submittedToProgramManagerInitials: string;

  @Field()
  @Column()
  submittedToProgramManagerDate: Date;

  // Submission to Meetings & Events
  @Field()
  @Column()
  submittedToMeetingsEvents: boolean;

  @Field()
  @Column()
  submittedToMeetingsEventsInitials: string;

  @Field()
  @Column()
  submittedToMeetingsEventsDate: Date;

  // Submission to Training
  @Field()
  @Column()
  submittedTrainingInformation: boolean;

  @Field()
  @Column()
  submittedTrainingInformationInitials: string;

  @Field()
  @Column()
  submittedTrainingInformationDate: Date;

  // Submission to Marketing
  @Field()
  @Column()
  submittedToMarketing: boolean;

  @Field()
  @Column()
  submittedToMarketingInitials: string;

  @Field()
  @Column()
  submittedToMarketingDate: Date;

  // Additional Notes
  @Field()
  @Column()
  additionalNotes: string;
}
