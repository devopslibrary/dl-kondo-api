import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType, InputType, ID } from 'type-graphql';

@ObjectType()
@InputType('ProgramInformationInput')
@Entity()
export class ProgramInformation {
  @Field(type => Number)
  @PrimaryGeneratedColumn()
  id?: number;

  // Overall Program Information
  @Field()
  @Column()
  eventName: string;

  @Field()
  @Column()
  dates: string;

  @Field()
  @Column()
  staffLead: string;

  @Field()
  @Column()
  department: string;

  @Field()
  @Column()
  location: string;

  @Field()
  @Column()
  country: string;

  @Field()
  @Column()
  typeWorkforce: boolean;

  @Field()
  @Column()
  typeEducation: boolean;

  @Field()
  @Column()
  typeMeeting: boolean;

  @Field()
  @Column()
  typeSummit: boolean;

  @Field()
  @Column()
  typeTradeshow: boolean;

  @Field()
  @Column()
  typeEvent: boolean;

  @Field()
  @Column()
  typeReception: boolean;

  @Field()
  @Column()
  typeOtherEvent: boolean;

  @Field()
  @Column()
  whoShouldAttend: string;

  @Field()
  @Column()
  accountCode: string;

  @Field()
  @Column()
  budget: number;

  @Field()
  @Column()
  city: string;

  @Field()
  @Column()
  state: string;

  @Field()
  @Column()
  estimatedAttendance: number;

  @Field()
  @Column()
  eventTime: string;

  @Field()
  @Column()
  setupByDate: Date;

  @Field()
  @Column()
  setupByTime: string;

  @Field()
  @Column()
  summary: string;
}
