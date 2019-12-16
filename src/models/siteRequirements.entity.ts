import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType, InputType, ID } from 'type-graphql';

@ObjectType()
@InputType('SiteRequirementsInput')
@Entity()
export class SiteRequirements {
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  id?: number;

  @Field()
  @Column()
  breakfast: boolean;

  @Field()
  @Column()
  lunch: boolean;

  @Field()
  @Column()
  dinner: boolean;

  @Field()
  @Column()
  snacks: boolean;

  @Field()
  @Column()
  openbar: boolean;

  @Field()
  @Column()
  cashbar: boolean;

  @Field()
  @Column()
  supportStaff: boolean;

  @Field()
  @Column()
  dining: boolean;

  @Field()
  @Column()
  av: boolean;

  @Field()
  @Column()
  tableTents: boolean;

  @Field()
  @Column()
  signage: boolean;

  @Field()
  @Column()
  amenities: string;

  @Field()
  @Column()
  additionalRequests: string;

  @Field()
  @Column()
  updatedAt: Date;
}
