import { Module } from '@nestjs/common';
import { RequestFormService } from './request.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestForm } from '../models/requestForm.entity';
import { RequestFormResolver } from './requestForm.resolver';
import { FacilityLogistics } from '../models/facilityLogistics.entity';
import { ProgramInformation } from '../models/programInformation.entity';
import { RegistrationLogistics } from '../models/registrationLogistics.entity';
import { SiteRequirements } from '../models/siteRequirements.entity';
import { StrategyAlignment } from '../models/strategyAlignment.entity';
import { SubmissionStatus } from '../models/submissionStatus.entity';
import { TrainingSession } from '../models/trainingSession.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      RequestForm,
      FacilityLogistics,
      ProgramInformation,
      RegistrationLogistics,
      SiteRequirements,
      StrategyAlignment,
      SubmissionStatus,
      TrainingSession,
    ]),
  ],
  providers: [RequestFormService, RequestFormResolver],
  exports: [RequestFormModule],
})
export class RequestFormModule {}
