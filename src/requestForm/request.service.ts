import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RequestForm } from '../models/requestForm.entity';
import { Repository } from 'typeorm';
import { ProgramInformation } from '../models/programInformation.entity';
import { FacilityLogistics } from '../models/facilityLogistics.entity';
import { RegistrationLogistics } from '../models/registrationLogistics.entity';
import { SiteRequirements } from '../models/siteRequirements.entity';
import { StrategyAlignment } from '../models/strategyAlignment.entity';
import { SubmissionStatus } from '../models/submissionStatus.entity';
import { TrainingSession } from '../models/trainingSession.entity';

@Injectable()
export class RequestFormService {
  constructor(
    @InjectRepository(RequestForm)
    private readonly requestFormRepository: Repository<RequestForm>,
    @InjectRepository(FacilityLogistics)
    private readonly facilityLogisticsRepository: Repository<FacilityLogistics>,
    @InjectRepository(ProgramInformation)
    private readonly programInformationRepository: Repository<
      ProgramInformation
    >,
    @InjectRepository(RegistrationLogistics)
    private readonly registrationLogisticsRepository: Repository<
      RegistrationLogistics
    >,
    @InjectRepository(SiteRequirements)
    private readonly siteRequirementsRepository: Repository<SiteRequirements>,
    @InjectRepository(StrategyAlignment)
    private readonly strategyAlignmentRepository: Repository<StrategyAlignment>,
    @InjectRepository(SubmissionStatus)
    private readonly submissionStatusRepository: Repository<SubmissionStatus>,
    @InjectRepository(TrainingSession)
    private readonly trainingSessionRepository: Repository<TrainingSession>,
  ) {}

  async createForm(formName: string): Promise<RequestForm> {
    let requestForm: RequestForm = {
      name: formName,
      status: null,
      program: null,
      strategy: null,
      facilityLogistics: null,
      registrationLogistics: null,
      siteRequirements: null,
      trainingSessions: null,
    };
    requestForm = await this.requestFormRepository.save(requestForm);

    // Facility Logistics
    let _facilityLogistics = await this.facilityLogisticsRepository.findOne({
      id: requestForm.id,
    });
    if (!_facilityLogistics) {
      _facilityLogistics = {
        facilitySecured: false,
        preferredFacilityType: 'Other',
        facilityRequests: '',
      };
      requestForm.facilityLogistics = await this.facilityLogisticsRepository.save(
        _facilityLogistics,
      );
    }

    // Program Information
    let _programInformation = await this.programInformationRepository.findOne({
      id: requestForm.id,
    });
    if (!_programInformation) {
      _programInformation = {
        eventName: '',
        dates: '',
        staffLead: '',
        department: '',
        location: '',
        country: '',
        typeWorkforce: false,
        typeEducation: false,
        typeEvent: false,
        typeMeeting: false,
        typeOtherEvent: false,
        typeSummit: false,
        typeTradeshow: false,
        typeReception: false,
        whoShouldAttend: '',
        accountCode: '',
        budget: 0,
        city: '',
        state: '',
        estimatedAttendance: 0,
        eventTime: '',
        setupByDate: new Date(),
        setupByTime: '',
        summary: '',
      };
      requestForm.program = await this.programInformationRepository.save(
        _programInformation,
      );
    }

    // Registration Logistics
    let _registrationLogistics = await this.registrationLogisticsRepository.findOne(
      {
        id: requestForm.id,
      },
    );
    if (!_registrationLogistics) {
      _registrationLogistics = {
        registrationRequired: false,
        invitationsRequired: false,
        badgesRequired: false,
      };
      requestForm.registrationLogistics = await this.registrationLogisticsRepository.save(
        _registrationLogistics,
      );
    }

    // Site Requirements
    let _siteRequirements = await this.siteRequirementsRepository.findOne({
      id: requestForm.id,
    });
    if (!_siteRequirements) {
      _siteRequirements = {
        breakfast: false,
        lunch: false,
        dinner: false,
        snacks: false,
        cashbar: false,
        openbar: false,
        supportStaff: false,
        dining: false,
        av: false,
        tableTents: false,
        signage: false,
        amenities: '',
        additionalRequests: '',
        updatedAt: new Date(),
      };
      requestForm.siteRequirements = await this.siteRequirementsRepository.save(
        _siteRequirements,
      );
    }

    // Strategy Alignment
    let _strategyAlignment = await this.strategyAlignmentRepository.findOne({
      id: requestForm.id,
    });
    if (!_strategyAlignment) {
      _strategyAlignment = {
        mwbEducation: false,
        mwbEngagement: false,
        mwbGlobalAccessibility: false,
        mwbStandards: false,
        mwbValueProposition: false,
        mwbWorkforceDevelopment: false,
        objectives: '',
        goalPeopleReached: 0,
      };
      requestForm.strategy = await this.strategyAlignmentRepository.save(
        _strategyAlignment,
      );
    }

    // Submission Status
    let _submissionStatus = await this.submissionStatusRepository.findOne({
      id: requestForm.id,
    });
    if (!_submissionStatus) {
      _submissionStatus = {
        submittedToMarketing: false,
        submittedToMarketingDate: new Date(),
        submittedToMarketingInitials: '',
        submittedToMeetingsEvents: false,
        submittedToMeetingsEventsDate: new Date(),
        submittedToMeetingsEventsInitials: '',
        submittedToProgramManager: false,
        submittedToProgramManagerDate: new Date(),
        submittedToProgramManagerInitials: '',
        submittedTrainingInformation: false,
        submittedTrainingInformationDate: new Date(),
        submittedTrainingInformationInitials: '',
        additionalNotes: '',
      };
      requestForm.status = await this.submissionStatusRepository.save(
        _submissionStatus,
      );
    }

    // Training Session
    let _trainingSession = await this.trainingSessionRepository.findOne({
      id: requestForm.id,
    });
    if (!_trainingSession) {
      _trainingSession = {
        courseTitle: '',
        courseDescription: '',
        learningObjectives: '',
        aptifyClassId: '',
        aptifyCourseId: '',
        trainingDates: '',
        startTime: '',
        endTime: '',
        instructor: '',
        travelNeeded: false,
        instructorBio: '',
        ceusAwarded: false,
        numberOfCeus: 0,
        roomLayout: '',
        classCapacity: 0,
        standardMemberPrice: 0,
        standardNonMemberPrice: 0,
        earlyBirdMemberPrice: 0,
        earlyBirdNonMemberPrice: 0,
        dicountsAndBundles: '',
        additionalRequests: '',
        requestForm: requestForm,
      };
      requestForm.trainingSessions = [
        await this.trainingSessionRepository.save(_trainingSession),
      ];
    }
    return this.requestFormRepository.save(requestForm);
  }

  async findAllForms(): Promise<RequestForm[]> {
    const _requestForms = await this.requestFormRepository.find();
    let reqformArray: RequestForm[] = [];
    for (let reqform of _requestForms) {
      reqform.facilityLogistics = await this.facilityLogisticsRepository.findOne(
        { id: reqform.id },
      );
      reqform.program = await this.programInformationRepository.findOne({
        id: reqform.id,
      });
      reqform.registrationLogistics = await this.registrationLogisticsRepository.findOne(
        { id: reqform.id },
      );
      reqform.siteRequirements = await this.siteRequirementsRepository.findOne({
        id: reqform.id,
      });
      reqform.strategy = await this.strategyAlignmentRepository.findOne({
        id: reqform.id,
      });
      reqform.status = await this.submissionStatusRepository.findOne({
        id: reqform.id,
      });
      reqformArray.push(reqform);
    }
    return reqformArray;
  }
}
