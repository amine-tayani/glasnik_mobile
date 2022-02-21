import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  message?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

/** the Channel type definition */
export type Channel = {
  __typename?: 'Channel';
  community: Community;
  communityId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  member_count: Scalars['Int'];
  message_count: Scalars['Int'];
  messages: Array<Message>;
  mode?: Maybe<ChannelMode>;
  owner_id?: Maybe<Scalars['String']>;
  recipients: Array<User>;
  topic: Scalars['String'];
  updateAt?: Maybe<Scalars['DateTime']>;
};

export enum ChannelMode {
  Text = 'TEXT',
  Voice = 'VOICE',
}

/** the Community type definition */
export type Community = {
  __typename?: 'Community';
  banner?: Maybe<Scalars['String']>;
  category: Scalars['String'];
  channels: Array<Maybe<Channel>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  icon: Scalars['String'];
  id: Scalars['String'];
  isOwner?: Maybe<Scalars['Boolean']>;
  member_count?: Maybe<Scalars['Int']>;
  messages: Array<Message>;
  name: Scalars['String'];
  owner_id?: Maybe<Scalars['String']>;
  type?: Maybe<CommunityType>;
  updateAt?: Maybe<Scalars['DateTime']>;
  users: Array<User>;
};

export enum CommunityType {
  Duo = 'DUO',
  Private = 'PRIVATE',
  Public = 'PUBLIC',
}

export type Message = {
  __typename?: 'Message';
  channel?: Maybe<Channel>;
  channelId?: Maybe<Scalars['String']>;
  community?: Maybe<Community>;
  communityId?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  sender: User;
  senderId: Scalars['String'];
  text: Scalars['String'];
  timestamp?: Maybe<Scalars['DateTime']>;
  updateAt?: Maybe<Scalars['DateTime']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** mutation for adding a new channel => voice OR text */
  addChannel?: Maybe<Channel>;
  /** mutation for adding a friend */
  addFriend?: Maybe<ResponseMessage>;
  /** creating account mutation */
  createAccount?: Maybe<AuthPayload>;
  /** mutation for creating a new Community */
  createCommunity?: Maybe<Community>;
  /** mutation for creating a new Message */
  createMessage?: Maybe<Message>;
  /** forgot password mutation */
  forgotPassword?: Maybe<ResponseMessage>;
  /** mutation for creating an invite to a Channel */
  joinChannel?: Maybe<ResponseMessage>;
  /** mutation for joining a Community */
  joinCommunity?: Maybe<ResponseMessage>;
  /** login to account mutation */
  loginToAccount?: Maybe<AuthPayload>;
  /** mutation for removing a friend from a list */
  removeFriend?: Maybe<ResponseMessage>;
  /** reset password mutation */
  resetPassword?: Maybe<ResetResponse>;
  /** Mutation for file uploading (avatar)  */
  uploadAvatar?: Maybe<ResponseMessage>;
};

export type MutationAddChannelArgs = {
  communityId?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<ChannelMode>;
  owner_id?: InputMaybe<Scalars['String']>;
  topic: Scalars['String'];
};

export type MutationAddFriendArgs = {
  friendId: Scalars['String'];
};

export type MutationCreateAccountArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type MutationCreateCommunityArgs = {
  category: Scalars['String'];
  icon?: InputMaybe<Scalars['Upload']>;
  name: Scalars['String'];
  type?: InputMaybe<CommunityType>;
};

export type MutationCreateMessageArgs = {
  channelId: Scalars['String'];
  communityId: Scalars['String'];
  text: Scalars['String'];
};

export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};

export type MutationJoinChannelArgs = {
  name: Scalars['String'];
};

export type MutationJoinCommunityArgs = {
  name: Scalars['String'];
};

export type MutationLoginToAccountArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationRemoveFriendArgs = {
  friendId: Scalars['String'];
};

export type MutationResetPasswordArgs = {
  confirmPassword: Scalars['String'];
  password: Scalars['String'];
  resetToken: Scalars['String'];
};

export type MutationUploadAvatarArgs = {
  avatar?: InputMaybe<Scalars['Upload']>;
};

export type Query = {
  __typename?: 'Query';
  /** get a informations about all communities  */
  communities?: Maybe<Array<Maybe<Community>>>;
  /** get a informations about a single community by id  */
  community?: Maybe<Community>;
  /** get a informations about all messages in a community  */
  getChannelMessages?: Maybe<Array<Maybe<Message>>>;
  /** Get a single message */
  getMessage?: Maybe<Message>;
  /** get a informations about all messages in a community  */
  getMessages?: Maybe<Array<Maybe<Message>>>;
  me?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type QueryCommunityArgs = {
  communityId: Scalars['String'];
};

export type QueryGetChannelMessagesArgs = {
  channelId: Scalars['String'];
};

export type QueryGetMessageArgs = {
  id: Scalars['String'];
};

export type QueryGetMessagesArgs = {
  communityId: Scalars['String'];
};

export type ResetResponse = {
  __typename?: 'ResetResponse';
  message?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type ResponseMessage = {
  __typename?: 'ResponseMessage';
  message?: Maybe<Scalars['String']>;
};

export enum Role {
  Bot = 'BOT',
  Mod = 'MOD',
  User = 'USER',
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type Subscription = {
  __typename?: 'Subscription';
  newUserLoggedIn?: Maybe<User>;
  /** subscription that listen for new messages */
  onMessage?: Maybe<Message>;
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']>;
  banner?: Maybe<Scalars['String']>;
  channel?: Maybe<Channel>;
  channelId?: Maybe<Scalars['String']>;
  communities?: Maybe<Array<Maybe<Community>>>;
  communityId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  friendOf?: Maybe<Array<Maybe<User>>>;
  friends?: Maybe<Array<Maybe<User>>>;
  id: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
  isBlocked?: Maybe<Scalars['Boolean']>;
  messages?: Maybe<Array<Maybe<Message>>>;
  password: Scalars['String'];
  resetToken?: Maybe<Scalars['String']>;
  resetTokenExpiry?: Maybe<Scalars['DateTime']>;
  role?: Maybe<Role>;
  updateAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
  verified?: Maybe<Scalars['Boolean']>;
};

export type CreateAccountMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;

export type CreateAccountMutation = {
  __typename?: 'Mutation';
  createAccount?: {
    __typename?: 'AuthPayload';
    token?: string | null;
    user?: { __typename?: 'User'; id: string } | null;
  } | null;
};

export type LoginToAccountMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;

export type LoginToAccountMutation = {
  __typename?: 'Mutation';
  loginToAccount?: {
    __typename?: 'AuthPayload';
    token?: string | null;
    user?: { __typename?: 'User'; id: string; username: string; email: string } | null;
  } | null;
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetUsersQuery = {
  __typename?: 'Query';
  users?: Array<{
    __typename: 'User';
    id: string;
    username: string;
    email: string;
    avatar?: string | null;
  } | null> | null;
};

export const CreateAccountDocument = gql`
  mutation createAccount($username: String!, $email: String!, $password: String!) {
    createAccount(username: $username, email: $email, password: $password) {
      user {
        id
      }
      token
    }
  }
`;
export type CreateAccountMutationFn = Apollo.MutationFunction<
  CreateAccountMutation,
  CreateAccountMutationVariables
>;

/**
 * __useCreateAccountMutation__
 *
 * To run a mutation, you first call `useCreateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAccountMutation, { data, loading, error }] = useCreateAccountMutation({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCreateAccountMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateAccountMutation, CreateAccountMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateAccountMutation, CreateAccountMutationVariables>(
    CreateAccountDocument,
    options,
  );
}
export type CreateAccountMutationHookResult = ReturnType<typeof useCreateAccountMutation>;
export type CreateAccountMutationResult = Apollo.MutationResult<CreateAccountMutation>;
export type CreateAccountMutationOptions = Apollo.BaseMutationOptions<
  CreateAccountMutation,
  CreateAccountMutationVariables
>;
export const LoginToAccountDocument = gql`
  mutation loginToAccount($email: String!, $password: String!) {
    loginToAccount(email: $email, password: $password) {
      user {
        id
        username
        email
      }
      token
    }
  }
`;
export type LoginToAccountMutationFn = Apollo.MutationFunction<
  LoginToAccountMutation,
  LoginToAccountMutationVariables
>;

/**
 * __useLoginToAccountMutation__
 *
 * To run a mutation, you first call `useLoginToAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginToAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginToAccountMutation, { data, loading, error }] = useLoginToAccountMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginToAccountMutation(
  baseOptions?: Apollo.MutationHookOptions<LoginToAccountMutation, LoginToAccountMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginToAccountMutation, LoginToAccountMutationVariables>(
    LoginToAccountDocument,
    options,
  );
}
export type LoginToAccountMutationHookResult = ReturnType<typeof useLoginToAccountMutation>;
export type LoginToAccountMutationResult = Apollo.MutationResult<LoginToAccountMutation>;
export type LoginToAccountMutationOptions = Apollo.BaseMutationOptions<
  LoginToAccountMutation,
  LoginToAccountMutationVariables
>;
export const GetUsersDocument = gql`
  query getUsers {
    users {
      __typename
      id
      username
      email
      avatar
    }
  }
`;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
}
export function useGetUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
}
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
