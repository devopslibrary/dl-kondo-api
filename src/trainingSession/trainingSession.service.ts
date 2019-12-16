import { Injectable, HttpException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RequestForm } from '../models/requestForm.entity';
import { Repository } from 'typeorm';
import { TrainingSession } from '../models/trainingSession.entity';

@Injectable()
export class TrainingSesssionService {
  constructor(
    @InjectRepository(RequestForm)
    private readonly requestFormRepository: Repository<RequestForm>,
    @InjectRepository(TrainingSession)
    private readonly trainingSessionRepository: Repository<TrainingSession>,
  ) {}

  async createTrainingSession(formId: number): Promise<TrainingSession> {
    const _requestForm = await this.requestFormRepository.findOne({
      id: formId,
    });
    if (!_requestForm) {
      throw new HttpException(
        {
          status: NotFoundException,
          error: 'Request form with ID ' + formId + ' does not exist!',
        },
        403,
      );
    }
    return this.trainingSessionRepository.save({
      requestForm: _requestForm,
      courseTitle: '',
      courseDescription: '',
      ceusAwarded: false,
      numberOfCeus: 0,
      learningObjectives: '',
      aptifyClassId: '',
      aptifyCourseId: '',
      trainingDates: '',
      startTime: '',
      endTime: '',
      instructor: '',
      instructorBio: '',
      travelNeeded: false,
      roomLayout: '',
      classCapacity: 0,
      standardMemberPrice: 0,
      standardNonMemberPrice: 0,
      earlyBirdMemberPrice: 0,
      earlyBirdNonMemberPrice: 0,
      dicountsAndBundles: '',
      additionalRequests: '',
    });
  }

  async findAllTrainingSessionsForRequestForm(
    formId: number,
  ): Promise<TrainingSession[]> {
    const _requestForm = await this.requestFormRepository.findOne({
      id: formId,
    });
    if (!_requestForm) {
      console.log('Request form with ID ' + formId + ' does not exist!  ERROR');
    }
    return this.trainingSessionRepository.find({
      where: { requestFormId: formId },
    });
  }

  async updateTrainingSession(
    trainingSession: TrainingSession,
  ): Promise<TrainingSession> {
    const _trainingSession = await this.trainingSessionRepository.findOne({
      id: trainingSession.id,
    });
    if (!_trainingSession) {
      throw new HttpException(
        {
          status: NotFoundException,
          error:
            'Training Session with ID ' +
            trainingSession.id +
            ' does not exist!',
        },
        403,
      );
    }
    await this.trainingSessionRepository.update(
      trainingSession.id,
      trainingSession,
    );
    return this.trainingSessionRepository.findOne(trainingSession.id);
  }

  async deleteTrainingSession(trainingSessionId: number) {
    const _trainingSession = await this.trainingSessionRepository.findOne({
      id: trainingSessionId,
    });
    if (!_trainingSession) {
      throw new HttpException(
        {
          status: NotFoundException,
          error:
            'Training Session with ID ' +
            trainingSessionId +
            ' does not exist!',
        },
        403,
      );
    }
    await this.trainingSessionRepository.delete(trainingSessionId);
    return _trainingSession;
  }
}
