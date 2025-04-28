/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateLink = /* GraphQL */ `subscription OnCreateLink($filter: ModelSubscriptionLinkFilterInput) {
  onCreateLink(filter: $filter) {
    id
    title
    url
    userID
    createdAt
    updatedAt
    userLinksId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateLinkSubscriptionVariables,
  APITypes.OnCreateLinkSubscription
>;
export const onUpdateLink = /* GraphQL */ `subscription OnUpdateLink($filter: ModelSubscriptionLinkFilterInput) {
  onUpdateLink(filter: $filter) {
    id
    title
    url
    userID
    createdAt
    updatedAt
    userLinksId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateLinkSubscriptionVariables,
  APITypes.OnUpdateLinkSubscription
>;
export const onDeleteLink = /* GraphQL */ `subscription OnDeleteLink($filter: ModelSubscriptionLinkFilterInput) {
  onDeleteLink(filter: $filter) {
    id
    title
    url
    userID
    createdAt
    updatedAt
    userLinksId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteLinkSubscriptionVariables,
  APITypes.OnDeleteLinkSubscription
>;
