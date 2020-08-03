/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent($entityId: String!) {
    onCreateEvent(entityId: $entityId) {
      id
      name
      description
      location
      entityId
      datetime
      intervieweeId
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent($entityId: String!) {
    onUpdateEvent(entityId: $entityId) {
      id
      name
      description
      location
      entityId
      datetime
      intervieweeId
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent($entityId: String!) {
    onDeleteEvent(entityId: $entityId) {
      id
      name
      description
      location
      entityId
      datetime
      intervieweeId
      createdAt
      updatedAt
    }
  }
`;
export const onCreateEntity = /* GraphQL */ `
  subscription OnCreateEntity {
    onCreateEntity {
      id
      name
      description
      location
      userlst
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateEntity = /* GraphQL */ `
  subscription OnUpdateEntity {
    onUpdateEntity {
      id
      name
      description
      location
      userlst
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteEntity = /* GraphQL */ `
  subscription OnDeleteEntity {
    onDeleteEntity {
      id
      name
      description
      location
      userlst
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      description
      location
      usertype
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      name
      description
      location
      usertype
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      name
      description
      location
      usertype
      createdAt
      updatedAt
    }
  }
`;
