## Description

[Kondo](https://kondo.io) backend API repository, built with NestJS

## Installation

```bash
yarn
yarn runstart:dev
```

## Example GraphQL queries

Create Org Mutation

```graphql
mutation createOrg($org: OrgInput!) {
  upsertOrg(org: $org) {
    id
    name
    installationId
    lastSynced
  }
}
```

Query Variables

```json
{
  "org": {
    "id": 111,
    "name": "TestKen",
    "installationId": 444,
    "lastSynced": 1575645951
  }
}
```
