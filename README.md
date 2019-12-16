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

Create Form

```graphql
mutation createForm($formName: String!) {
  createForm(formName: $formName) {
    id
    name
  }
}
```

Query Variables

```json
{
  "formName": "Test"
}
```

Example retrieval

```graphql
query getAllOrgs {
  findAllOrgs {
    id
    name
    setting {
      id
      nukeStaleBranches
      nukeStalePRs
    }
  }
}
```
