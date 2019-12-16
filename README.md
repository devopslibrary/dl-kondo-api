## Description

Cedia-API for Master Request Form

## Installation

```bash
yarn
yarn runstart:dev
```

## Create Migrations
yarn run typeorm:migrate initial-structures

## Example GraphQL queries

Samples

```graphql
# Create a new form
mutation createForm($formName: String!) {
  createForm(formName: $formName) {
    id
    name
  }
}

# Update Request Form
mutation updateForm($requestForm: RequestFormInput!) {
  updateForm(requestForm: $requestForm) {
    id
    name
  }
}

# Delete Form
mutation deleteForm($formId: Float!) {
  deleteForm(formId: $formId) {
    id
  }
}


# Get Specific Form
query getForm($formId: Float!) {
  getForm(formId: $formId) {
    id
    strategy {
      id
      mwbEducation
      mwbStandards
      goalPeopleReached
      objectives
    }
    facilityLogistics {
      id
      facilitySecured
      facilityRequests
      preferredFacilityType
    }
    trainingSessions {
      id
      instructor
      instructorBio
      trainingDates
    }
  }
}

# Return all forms
query getAllForms {
  findAllForms {
    id
    name
    strategy {
      mwbEducation
      mwbStandards
      mwbWorkforceDevelopment
    }
    trainingSessions {
      trainingDates
      id
      instructorBio
    }
  }
}

# Add new training session
mutation createTrainingSession($formId: Float!) {
  createTrainingSession(formId: $formId) {
    id
  }
}

# Update training session
mutation updateTrainingSession($trainingSessionInput: TrainingSessionInput!) {
  updateTrainingSession(trainingSession: $trainingSessionInput) {
    id
  }
}

# Delete training session
mutation deleteTrainingSession($trainingSessionId: Float!) {
  deleteTrainingSession(trainingSessionId: $trainingSessionId) {
    id
  }
}
```

# Query Variables
```json
{
	"formName": "Test",
	"formId": 8,
	"trainingSessionInput": {
		"id": 8,
		"courseTitle": "TestCourse",
		"courseDescription": "CourseDescription",
		"learningObjectives": "Objectives",
		"aptifyClassId": "XVY21312",
		"aptifyCourseId": "M501",
		"trainingDates": "Jan 5, 2020 - Jan 20, 2020",
		"startTime": "8:00AM",
		"endTime": "5:00PM",
		"instructor": "Larry Bob",
		"travelNeeded": false,
		"instructorBio": "Hits people",
		"ceusAwarded": false,
		"numberOfCeus": 0,
		"roomLayout": "Square",
		"classCapacity": 20,
		"standardMemberPrice": 0,
		"standardNonMemberPrice": 20,
		"earlyBirdMemberPrice": 0,
		"earlyBirdNonMemberPrice": 15,
		"dicountsAndBundles": "N/A",
		"additionalRequests": "Yayyy"
	},
	"requestForm": {
		"id": 12,
		"name": "Chickrm",
		"status": {
			"id": 5,
			"submittedToProgramManager": true,
			"submittedToProgramManagerInitials": "kme",
			"submittedToProgramManagerDate": "1900-01-01 00:00:00",
			"submittedToMeetingsEvents": true,
			"submittedToMeetingsEventsInitials": "ssv",
			"submittedToMeetingsEventsDate": "1900-01-01 00:00:00",
			"submittedTrainingInformation": false,
			"submittedTrainingInformationInitials": "jev",
			"submittedTrainingInformationDate": "1900-01-01 00:00:00",
			"submittedToMarketing": true,
			"submittedToMarketingInitials": "ddd",
			"submittedToMarketingDate": "1900-01-01 00:00:00",
			"additionalNotes": "Zoomzoom"
		},
		"program": {
			"id": 5,
			"eventName": "zelda",
			"dates": "Jan 10",
			"staffLead": "You",
			"department": "All",
			"location": "Indy",
			"country": "USA",
			"typeWorkforce": true,
			"typeEducation": true,
			"typeMeeting": true,
			"typeSummit": true,
			"typeTradeshow": true,
			"typeEvent": true,
			"typeReception": true,
			"typeOtherEvent": true,
			"whoShouldAttend": "everyone",
			"accountCode": "23412A",
			"budget": 200,
			"city": "zelda",
			"state": "Denver",
			"estimatedAttendance": 500,
			"eventTime": "now",
			"setupByDate": "1900-01-01 00:00:00",
			"setupByTime": "tommight",
			"summary": "Yessums"
		},
		"strategy": {
			"id": 5,
			"mwbEducation": true,
			"mwbStandards": true,
			"mwbGlobalAccessibility": true,
			"mwbEngagement": true,
			"mwbValueProposition": true,
			"mwbWorkforceDevelopment": true,
			"objectives": "All of them",
			"goalPeopleReached": 500
		},
		"facilityLogistics": {
      "id": 5,
      "facilitySecured": true,
      "preferredFacilityType": "Awesome",
      "facilityRequests": "Everything"
    },
		"registrationLogistics": {
      "id": 5,
      "registrationRequired": true,
      "invitationsRequired": true,
      "badgesRequired": true
    },
		"siteRequirements": {
      "id": 5,
      "dining": true,
      "breakfast": true,
      "lunch": true,
      "dinner": true,
      "snacks": true,
      "openbar": true,
      "cashbar": true,
      "supportStaff": true,
      "dinner": true,
      "av": true,
      "tableTents": true,
      "signage": true,
      "amenities": "AAAA",
      "additionalRequests": "PLEASE",
      "updatedAt": "1900-01-01 00:00:00"
    },
		"trainingSessions": [{
			"id": 23,
			"courseTitle": "Did",
			"courseDescription": "moo",
			"learningObjectives": "soo",
			"aptifyCourseId": "String!",
			"aptifyClassId": "String!",
			"trainingDates": "String!",
			"startTime": "8:30AM",
			"endTime": "9:30AM",
			"instructor": "Boykins",
			"travelNeeded": false,
			"instructorBio": "String!",
			"ceusAwarded": true,
			"numberOfCeus": 42,
			"roomLayout": "AAAA",
			"classCapacity": 55,
			"standardMemberPrice": 20,
			"standardNonMemberPrice": 22,
			"earlyBirdMemberPrice": 500,
			"earlyBirdNonMemberPrice": 25,
			"dicountsAndBundles": "Lamma",
			"additionalRequests": "Algebra"
    },{
			"id": 25,
			"courseTitle": "hooo",
			"courseDescription": "moo",
			"learningObjectives": "soo",
			"aptifyCourseId": "String!",
			"aptifyClassId": "String!",
			"trainingDates": "String!",
			"startTime": "8:30AM",
			"endTime": "9:30AM",
			"instructor": "Boykins",
			"travelNeeded": false,
			"instructorBio": "String!",
			"ceusAwarded": true,
			"numberOfCeus": 42,
			"roomLayout": "AAAA",
			"classCapacity": 55,
			"standardMemberPrice": 20,
			"standardNonMemberPrice": 22,
			"earlyBirdMemberPrice": 500,
			"earlyBirdNonMemberPrice": 25,
			"dicountsAndBundles": "Lamma",
			"additionalRequests": "Algebra"
		}]
	}
}
```