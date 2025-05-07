/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from '../API';
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    id
    username
    profileImage
    bio
    links {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;

export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id
    username
    profileImage
    bio
    links {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;

export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
    id
    username
    profileImage
    bio
    links {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;

export const createLink = /* GraphQL */ `mutation CreateLink(
  $input: CreateLinkInput!
  $condition: ModelLinkConditionInput
) {
  createLink(input: $input, condition: $condition) {
    id
    title
    url
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateLinkMutationVariables,
  APITypes.CreateLinkMutation
>;

export const updateLink = /* GraphQL */ `mutation UpdateLink(
  $input: UpdateLinkInput!
  $condition: ModelLinkConditionInput
) {
  updateLink(input: $input, condition: $condition) {
    id
    title
    url
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateLinkMutationVariables,
  APITypes.UpdateLinkMutation
>;

export const deleteLink = /* GraphQL */ `mutation DeleteLink(
  $input: DeleteLinkInput!
  $condition: ModelLinkConditionInput
) {
  deleteLink(input: $input, condition: $condition) {
    id
    title
    url
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteLinkMutationVariables,
  APITypes.DeleteLinkMutation
>;
