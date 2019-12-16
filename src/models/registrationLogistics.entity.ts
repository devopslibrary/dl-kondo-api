import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType, InputType, ID } from 'type-graphql';

@ObjectType()
@InputType('RegistrationLogisticsInput')
@Entity()
export class RegistrationLogistics {
  @Field(type => Number)
  @PrimaryGeneratedColumn()
  id?: number;

  @Field()
  @Column()
  registrationRequired: boolean;

  @Field()
  @Column()
  invitationsRequired: boolean;

  @Field()
  @Column()
  badgesRequired: boolean;
}
