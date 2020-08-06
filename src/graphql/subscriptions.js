/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent($entity: String!, $interviewee: String!) {
    onCreateEvent(entity: $entity, interviewee: $interviewee) {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent($entity: String!, $interviewee: String!) {
    onUpdateEvent(entity: $entity, interviewee: $interviewee) {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent($entity: String!, $interviewee: String!) {
    onDeleteEvent(entity: $entity, interviewee: $interviewee) {
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
export const onCreateJobPost = /* GraphQL */ `
  subscription OnCreateJobPost($entity: String!, $name: String!) {
    onCreateJobPost(entity: $entity, name: $name) {
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
export const onUpdateJobPost = /* GraphQL */ `
  subscription OnUpdateJobPost($entity: String!, $name: String!) {
    onUpdateJobPost(entity: $entity, name: $name) {
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
export const onDeleteJobPost = /* GraphQL */ `
  subscription OnDeleteJobPost($entity: String!, $name: String!) {
    onDeleteJobPost(entity: $entity, name: $name) {
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
export const onCreateCandidateInfo = /* GraphQL */ `
  subscription OnCreateCandidateInfo($name: String!) {
    onCreateCandidateInfo(name: $name) {
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
export const onUpdateCandidateInfo = /* GraphQL */ `
  subscription OnUpdateCandidateInfo($name: String!) {
    onUpdateCandidateInfo(name: $name) {
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
export const onDeleteCandidateInfo = /* GraphQL */ `
  subscription OnDeleteCandidateInfo($name: String!) {
    onDeleteCandidateInfo(name: $name) {
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
