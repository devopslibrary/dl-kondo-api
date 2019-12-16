import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType, InputType, ID } from 'type-graphql';

@ObjectType()
@InputType('StrategyAlignmentInput')
@Entity()
export class StrategyAlignment {
  @Field(type => Number)
  @PrimaryGeneratedColumn()
  id?: number;

  // Must win battle information
  @Field()
  @Column()
  mwbEducation: boolean;

  @Field()
  @Column()
  mwbStandards: boolean;

  @Field()
  @Column()
  mwbGlobalAccessibility: boolean;

  @Field()
  @Column()
  mwbEngagement: boolean;

  @Field()
  @Column()
  mwbValueProposition: boolean;

  @Field()
  @Column()
  mwbWorkforceDevelopment: boolean;

  // Strategic Objectives/Goals (# Attendees, Revenue, etc.):
  @Field()
  @Column()
  objectives: string;

  // Goal for # of People Reached
  @Field()
  @Column()
  goalPeopleReached: number;
}
