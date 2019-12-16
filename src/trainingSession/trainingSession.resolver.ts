import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TrainingSession } from '../models/trainingSession.entity';
import { TrainingSesssionService } from './trainingSession.service';
import { DeleteResult } from 'typeorm';

@Resolver('TrainingSession')
export class TrainingSessionResolver {
  constructor(
    private readonly trainingSessionService: TrainingSesssionService,
  ) {}

  @Mutation(returns => TrainingSession)
  async createTrainingSession(
    @Args('formId') formId: number,
  ): Promise<TrainingSession> {
    return this.trainingSessionService.createTrainingSession(formId);
  }

  @Query(returns => [TrainingSession])
  async findAllTrainingSessionsForRequestForm(
    @Args('formId') formId: number,
  ): Promise<TrainingSession[]> {
    return this.trainingSessionService.findAllTrainingSessionsForRequestForm(
      formId,
    );
  }

  @Mutation(returns => TrainingSession)
  async updateTrainingSession(
    @Args('trainingSession') trainingSession: TrainingSession,
  ): Promise<TrainingSession> {
    return this.trainingSessionService.updateTrainingSession(trainingSession);
  }

  @Mutation(returns => TrainingSession)
  async deleteTrainingSession(
    @Args('trainingSessionId') trainingSessionId: number,
  ) {
    return this.trainingSessionService.deleteTrainingSession(trainingSessionId);
  }
}
