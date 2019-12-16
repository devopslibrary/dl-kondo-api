import { Entity, PrimaryColumn, Column } from 'typeorm';
import { Field, ObjectType, InputType, Int } from 'type-graphql';

@ObjectType()
@InputType('FacilityLogisticsInput')
@Entity()
export class FacilityLogistics {
  @Field(type => Int)
  @PrimaryColumn()
  id: number;

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
