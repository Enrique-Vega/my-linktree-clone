/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from '../API';
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
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
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      profileImage
      bio
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getLink = /* GraphQL */ `query GetLink($id: ID!) {
  getLink(id: $id) {
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
` as GeneratedQuery<APITypes.GetLinkQueryVariables, APITypes.GetLinkQuery>;
export const listLinks = /* GraphQL */ `query ListLinks(
  $filter: ModelLinkFilterInput
  $limit: Int
  $nextToken: String
) {
  listLinks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      url
      userID
      createdAt
      updatedAt
      userLinksId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListLinksQueryVariables, APITypes.ListLinksQuery>;
export const userByUsername = /* GraphQL */ `
  query UserByUsername($username: String!) {
      userByUsername(username: $username) {
        items {
          id
          username
          profileImage
          bio
          links {
            items {
              id
              title
              url
              userID
            }
          }
        }
      }
    }
` as GeneratedQuery<
  APITypes.UserByUsernameQueryVariables,
  APITypes.UserByUsernameQuery
>;
export const linksByUserID = /* GraphQL */ `query LinksByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelLinkFilterInput
  $limit: Int
  $nextToken: String
) {
  linksByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      url
      userID
      createdAt
      updatedAt
      userLinksId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.LinksByUserIDQueryVariables,
  APITypes.LinksByUserIDQuery
>;
