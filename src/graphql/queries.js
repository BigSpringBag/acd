/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      name
      description
      location
      entity
      datetime
      interviewee {
        id
        name
        description
        location
        resume
        createdAt
        updatedAt
      }
      jobPost
      createdAt
      updatedAt
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        location
        entity
        datetime
        interviewee {
          id
          name
          description
          location
          resume
          createdAt
          updatedAt
        }
        jobPost
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getJobPost = /* GraphQL */ `
  query GetJobPost($id: ID!) {
    getJobPost(id: $id) {
      id
      name
      description
      location
      entity
      createdAt
      updatedAt
    }
  }
`;
export const listJobPosts = /* GraphQL */ `
  query ListJobPosts(
    $filter: ModelJobPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJobPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        location
        entity
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCandidateInfo = /* GraphQL */ `
  query GetCandidateInfo($id: ID!) {
    getCandidateInfo(id: $id) {
      id
      name
      description
      location
      resume
      createdAt
      updatedAt
    }
  }
`;
export const listCandidateInfos = /* GraphQL */ `
  query ListCandidateInfos(
    $filter: ModelCandidateInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCandidateInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        location
        resume
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listEventsByEntity = /* GraphQL */ `
  query ListEventsByEntity(
    $entity: ID
    $datetime: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventsByEntity(
      entity: $entity
      datetime: $datetime
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        location
        entity
        datetime
        interviewee {
          id
          name
          description
          location
          resume
          createdAt
          updatedAt
        }
        jobPost
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listJobPostsByEntity = /* GraphQL */ `
  query ListJobPostsByEntity(
    $entity: ID
    $sortDirection: ModelSortDirection
    $filter: ModelJobPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJobPostsByEntity(
      entity: $entity
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        location
        entity
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
