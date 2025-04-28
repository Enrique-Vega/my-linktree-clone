/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  username: string,
  profileImage?: string | null,
  bio?: string | null,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  profileImage?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  username: string,
  profileImage?: string | null,
  bio?: string | null,
  links?: ModelLinkConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelLinkConnection = {
  __typename: "ModelLinkConnection",
  items:  Array<Link | null >,
  nextToken?: string | null,
};

export type Link = {
  __typename: "Link",
  id: string,
  title: string,
  url: string,
  userID: string,
  createdAt: string,
  updatedAt: string,
  userLinksId?: string | null,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  profileImage?: string | null,
  bio?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateLinkInput = {
  id?: string | null,
  title: string,
  url: string,
  userID: string,
  userLinksId?: string | null,
};

export type ModelLinkConditionInput = {
  title?: ModelStringInput | null,
  url?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelLinkConditionInput | null > | null,
  or?: Array< ModelLinkConditionInput | null > | null,
  not?: ModelLinkConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userLinksId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateLinkInput = {
  id: string,
  title?: string | null,
  url?: string | null,
  userID?: string | null,
  userLinksId?: string | null,
};

export type DeleteLinkInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  profileImage?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelLinkFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  url?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelLinkFilterInput | null > | null,
  or?: Array< ModelLinkFilterInput | null > | null,
  not?: ModelLinkFilterInput | null,
  userLinksId?: ModelIDInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionStringInput | null,
  profileImage?: ModelSubscriptionStringInput | null,
  bio?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  userLinksId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionLinkFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  url?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionLinkFilterInput | null > | null,
  or?: Array< ModelSubscriptionLinkFilterInput | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username: string,
    profileImage?: string | null,
    bio?: string | null,
    links?:  {
      __typename: "ModelLinkConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    profileImage?: string | null,
    bio?: string | null,
    links?:  {
      __typename: "ModelLinkConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    profileImage?: string | null,
    bio?: string | null,
    links?:  {
      __typename: "ModelLinkConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLinkMutationVariables = {
  input: CreateLinkInput,
  condition?: ModelLinkConditionInput | null,
};

export type CreateLinkMutation = {
  createLink?:  {
    __typename: "Link",
    id: string,
    title: string,
    url: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    userLinksId?: string | null,
  } | null,
};

export type UpdateLinkMutationVariables = {
  input: UpdateLinkInput,
  condition?: ModelLinkConditionInput | null,
};

export type UpdateLinkMutation = {
  updateLink?:  {
    __typename: "Link",
    id: string,
    title: string,
    url: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    userLinksId?: string | null,
  } | null,
};

export type DeleteLinkMutationVariables = {
  input: DeleteLinkInput,
  condition?: ModelLinkConditionInput | null,
};

export type DeleteLinkMutation = {
  deleteLink?:  {
    __typename: "Link",
    id: string,
    title: string,
    url: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    userLinksId?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username: string,
    profileImage?: string | null,
    bio?: string | null,
    links?:  {
      __typename: "ModelLinkConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      profileImage?: string | null,
      bio?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLinkQueryVariables = {
  id: string,
};

export type GetLinkQuery = {
  getLink?:  {
    __typename: "Link",
    id: string,
    title: string,
    url: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    userLinksId?: string | null,
  } | null,
};

export type ListLinksQueryVariables = {
  filter?: ModelLinkFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLinksQuery = {
  listLinks?:  {
    __typename: "ModelLinkConnection",
    items:  Array< {
      __typename: "Link",
      id: string,
      title: string,
      url: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
      userLinksId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserByUsernameQueryVariables = {
  username: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserByUsernameQuery = {
  userByUsername?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      profileImage?: string | null,
      bio?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type LinksByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLinkFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LinksByUserIDQuery = {
  linksByUserID?:  {
    __typename: "ModelLinkConnection",
    items:  Array< {
      __typename: "Link",
      id: string,
      title: string,
      url: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
      userLinksId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    profileImage?: string | null,
    bio?: string | null,
    links?:  {
      __typename: "ModelLinkConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    profileImage?: string | null,
    bio?: string | null,
    links?:  {
      __typename: "ModelLinkConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    profileImage?: string | null,
    bio?: string | null,
    links?:  {
      __typename: "ModelLinkConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLinkSubscriptionVariables = {
  filter?: ModelSubscriptionLinkFilterInput | null,
};

export type OnCreateLinkSubscription = {
  onCreateLink?:  {
    __typename: "Link",
    id: string,
    title: string,
    url: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    userLinksId?: string | null,
  } | null,
};

export type OnUpdateLinkSubscriptionVariables = {
  filter?: ModelSubscriptionLinkFilterInput | null,
};

export type OnUpdateLinkSubscription = {
  onUpdateLink?:  {
    __typename: "Link",
    id: string,
    title: string,
    url: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    userLinksId?: string | null,
  } | null,
};

export type OnDeleteLinkSubscriptionVariables = {
  filter?: ModelSubscriptionLinkFilterInput | null,
};

export type OnDeleteLinkSubscription = {
  onDeleteLink?:  {
    __typename: "Link",
    id: string,
    title: string,
    url: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    userLinksId?: string | null,
  } | null,
};
