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

# Return all forms
query getAllForms {
  findAllForms {
    id
    name
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
  "formId": 4,
  "trainingSessionInput": {
    "id": 5,
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
  "trainingSessionId": 10
}
```