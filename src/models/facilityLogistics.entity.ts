import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType, InputType, ID } from 'type-graphql';

@ObjectType()
@InputType('FacilityLogisticsInput')
@Entity()
export class FacilityLogistics {
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  id?: number;

  @Field()
  @Column()
  facilitySecured: boolean;

  @Field()
  @Column()
  preferredFacilityType: string;

  @Field()
  @Column()
  facilityRequests: string;
}
