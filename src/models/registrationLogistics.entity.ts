import { Entity, PrimaryColumn, Column } from 'typeorm';
import { Field, ObjectType, InputType, Int } from 'type-graphql';

@ObjectType()
@InputType('RegistrationLogisticsInput')
@Entity()
export class RegistrationLogistics {
  @Field(type => Int)
  @PrimaryColumn()
  id: number;

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
