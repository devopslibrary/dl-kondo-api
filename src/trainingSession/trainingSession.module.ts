import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrainingSession } from '../models/trainingSession.entity';
import { RequestForm } from '../models/requestForm.entity';
import { TrainingSesssionService } from './trainingSession.service';
import { TrainingSessionResolver } from './trainingSession.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([TrainingSession, RequestForm])],
  providers: [TrainingSesssionService, TrainingSessionResolver],
  exports: [TrainingSessionModule],
})
export class TrainingSessionModule {}
