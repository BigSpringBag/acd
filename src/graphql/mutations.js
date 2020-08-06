/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
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
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
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
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
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
export const createJobPost = /* GraphQL */ `
  mutation CreateJobPost(
    $input: CreateJobPostInput!
    $condition: ModelJobPostConditionInput
  ) {
    createJobPost(input: $input, condition: $condition) {
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
export const updateJobPost = /* GraphQL */ `
  mutation UpdateJobPost(
    $input: UpdateJobPostInput!
    $condition: ModelJobPostConditionInput
  ) {
    updateJobPost(input: $input, condition: $condition) {
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
export const deleteJobPost = /* GraphQL */ `
  mutation DeleteJobPost(
    $input: DeleteJobPostInput!
    $condition: ModelJobPostConditionInput
  ) {
    deleteJobPost(input: $input, condition: $condition) {
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
export const createCandidateInfo = /* GraphQL */ `
  mutation CreateCandidateInfo(
    $input: CreateCandidateInfoInput!
    $condition: ModelCandidateInfoConditionInput
  ) {
    createCandidateInfo(input: $input, condition: $condition) {
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
export const updateCandidateInfo = /* GraphQL */ `
  mutation UpdateCandidateInfo(
    $input: UpdateCandidateInfoInput!
    $condition: ModelCandidateInfoConditionInput
  ) {
    updateCandidateInfo(input: $input, condition: $condition) {
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
export const deleteCandidateInfo = /* GraphQL */ `
  mutation DeleteCandidateInfo(
    $input: DeleteCandidateInfoInput!
    $condition: ModelCandidateInfoConditionInput
  ) {
    deleteCandidateInfo(input: $input, condition: $condition) {
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
