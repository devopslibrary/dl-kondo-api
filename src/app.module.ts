import { DynamicModule, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestFormModule } from './requestForm/requestForm.module';
import { ConfigModule } from './config/config.module';
import { Connection } from 'typeorm';
import * as ormconfig from './ormconfig';
import { TrainingSessionModule } from './trainingSession/trainingSession.module';
export function DatabaseOrmModule(): DynamicModule {
  return TypeOrmModule.forRoot(ormconfig);
}

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    RequestFormModule,
    TrainingSessionModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      context: ({ req }) => ({ req }),
    }),
  ],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
