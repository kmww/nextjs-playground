/* eslint-disable */
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
};

/** 필드 에러 타입 */
export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

/** 로그인 인풋 데이터 */
export type LoginInput = {
  emailOrDisplayName: Scalars['String'];
  password: Scalars['String'];
};

/** 로그인 반환 데이터 */
export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<UserData>;
};

export type Mutation = {
  __typename?: 'Mutation';
  login: LoginResponse;
  refreshAccessToken?: Maybe<RefreshAccessTokenResponse>;
  signUp: UserData;
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationSignUpArgs = {
  signUpInput: SignUpInput;
};

export type Product = {
  __typename?: 'Product';
  /** blurDataUrl */
  blurDataUrl?: Maybe<Scalars['String']>;
  /** 카테고리 */
  category: Scalars['String'];
  /** 제품 상태 */
  condition: Scalars['String'];
  /** 제품 설명 */
  description: Scalars['String'];
  /** 제품 아이디 */
  id: Scalars['Int'];
  /** 제품 이미지 */
  imageUrl: Scalars['String'];
  /** 소유자 */
  owner: User;
  /** 제품 가격, 원 */
  price: Scalars['Float'];
  /** 제품 이름 */
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<UserData>;
  product?: Maybe<Product>;
  products: Array<Product>;
  searchProducts: Array<Product>;
};


export type QueryProductArgs = {
  productId: Scalars['Int'];
};


export type QuerySearchProductsArgs = {
  category?: InputMaybe<Scalars['String']>;
  conditions?: InputMaybe<Array<Scalars['String']>>;
};

/** 액세스 토큰 새로고침 반환 데이터 */
export type RefreshAccessTokenResponse = {
  __typename?: 'RefreshAccessTokenResponse';
  accessToken: Scalars['String'];
};

export type SignUpInput = {
  displayName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  /** 유저 소개 */
  description: Scalars['String'];
  /** 유저 닉네임 */
  displayName: Scalars['String'];
  /** 이메일 */
  email: Scalars['String'];
  /** 유저 아이디 */
  id: Scalars['Int'];
  /** 프로필 사진 */
  profileImageUrl?: Maybe<Scalars['String']>;
  /** 유저 이름 */
  username: Scalars['String'];
};

export type UserData = {
  __typename?: 'UserData';
  /** 생성 일자 */
  createdAt: Scalars['String'];
  /** 유저 소개 */
  description?: Maybe<Scalars['String']>;
  /** 유저 닉네임 */
  displayName: Scalars['String'];
  /** 이메일 */
  email: Scalars['String'];
  id: Scalars['Int'];
  /** 프로필 사진 경로 */
  profileImageUrl?: Maybe<Scalars['String']>;
  /** 업데이트 일자 */
  updatedAt: Scalars['String'];
  /** 유저 이름 */
  username: Scalars['String'];
};

export type RefreshAccessTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshAccessTokenMutation = { __typename?: 'Mutation', refreshAccessToken?: { __typename?: 'RefreshAccessTokenResponse', accessToken: string } | null };

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', accessToken?: string | null, user?: { __typename?: 'UserData', id: number, username: string, displayName: string, email: string } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type SignUpMutationVariables = Exact<{
  signUpInput: SignUpInput;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp: { __typename?: 'UserData', id: number, email: string, username: string, displayName: string, createdAt: string, updatedAt: string } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'UserData', id: number, username: string, email: string, displayName: string, profileImageUrl?: string | null, description?: string | null, createdAt: string, updatedAt: string } | null };

export type ProductQueryVariables = Exact<{
  productId: Scalars['Int'];
}>;


export type ProductQuery = { __typename?: 'Query', product?: { __typename?: 'Product', id: number, category: string, title: string, description: string, imageUrl: string, blurDataUrl?: string | null, price: number, condition: string, owner: { __typename?: 'User', id: number, username: string, displayName: string, email: string, profileImageUrl?: string | null, description: string } } | null };

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', id: number, category: string, title: string, description: string, imageUrl: string, blurDataUrl?: string | null, price: number, condition: string, owner: { __typename?: 'User', id: number, username: string, displayName: string, email: string, profileImageUrl?: string | null, description: string } }> };

export type SearchProductsQueryVariables = Exact<{
  conditions?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
}>;


export type SearchProductsQuery = { __typename?: 'Query', searchProducts: Array<{ __typename?: 'Product', id: number, category: string, title: string, description: string, imageUrl: string, blurDataUrl?: string | null, price: number, condition: string, owner: { __typename?: 'User', id: number, username: string, displayName: string, email: string, profileImageUrl?: string | null, description: string } }> };


export const RefreshAccessTokenDocument = gql`
    mutation refreshAccessToken {
  refreshAccessToken {
    accessToken
  }
}
    `;
export type RefreshAccessTokenMutationFn = Apollo.MutationFunction<RefreshAccessTokenMutation, RefreshAccessTokenMutationVariables>;

/**
 * __useRefreshAccessTokenMutation__
 *
 * To run a mutation, you first call `useRefreshAccessTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshAccessTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshAccessTokenMutation, { data, loading, error }] = useRefreshAccessTokenMutation({
 *   variables: {
 *   },
 * });
 */
export function useRefreshAccessTokenMutation(baseOptions?: Apollo.MutationHookOptions<RefreshAccessTokenMutation, RefreshAccessTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefreshAccessTokenMutation, RefreshAccessTokenMutationVariables>(RefreshAccessTokenDocument, options);
      }
export type RefreshAccessTokenMutationHookResult = ReturnType<typeof useRefreshAccessTokenMutation>;
export type RefreshAccessTokenMutationResult = Apollo.MutationResult<RefreshAccessTokenMutation>;
export type RefreshAccessTokenMutationOptions = Apollo.BaseMutationOptions<RefreshAccessTokenMutation, RefreshAccessTokenMutationVariables>;
export const LoginDocument = gql`
    mutation login($loginInput: LoginInput!) {
  login(loginInput: $loginInput) {
    user {
      id
      username
      displayName
      email
    }
    errors {
      field
      message
    }
    accessToken
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      loginInput: // value for 'loginInput'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const SignUpDocument = gql`
    mutation signUp($signUpInput: SignUpInput!) {
  signUp(signUpInput: $signUpInput) {
    id
    email
    username
    displayName
    createdAt
    updatedAt
  }
}
    `;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      signUpInput: // value for 'signUpInput'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const MeDocument = gql`
    query me {
  me {
    id
    username
    email
    displayName
    profileImageUrl
    description
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const ProductDocument = gql`
    query product($productId: Int!) {
  product(productId: $productId) {
    id
    category
    title
    description
    imageUrl
    blurDataUrl
    price
    condition
    owner {
      id
      username
      displayName
      email
      profileImageUrl
      description
    }
  }
}
    `;

/**
 * __useProductQuery__
 *
 * To run a query within a React component, call `useProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useProductQuery(baseOptions: Apollo.QueryHookOptions<ProductQuery, ProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
      }
export function useProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductQuery, ProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
        }
export type ProductQueryHookResult = ReturnType<typeof useProductQuery>;
export type ProductLazyQueryHookResult = ReturnType<typeof useProductLazyQuery>;
export type ProductQueryResult = Apollo.QueryResult<ProductQuery, ProductQueryVariables>;
export const ProductsDocument = gql`
    query Products {
  products {
    id
    category
    title
    description
    imageUrl
    blurDataUrl
    price
    condition
    owner {
      id
      username
      displayName
      email
      profileImageUrl
      description
    }
  }
}
    `;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductsQuery(baseOptions?: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;
export const SearchProductsDocument = gql`
    query SearchProducts($conditions: [String!], $category: String) {
  searchProducts(conditions: $conditions, category: $category) {
    id
    category
    title
    description
    imageUrl
    blurDataUrl
    price
    condition
    owner {
      id
      username
      displayName
      email
      profileImageUrl
      description
    }
  }
}
    `;

/**
 * __useSearchProductsQuery__
 *
 * To run a query within a React component, call `useSearchProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchProductsQuery({
 *   variables: {
 *      conditions: // value for 'conditions'
 *      category: // value for 'category'
 *   },
 * });
 */
export function useSearchProductsQuery(baseOptions?: Apollo.QueryHookOptions<SearchProductsQuery, SearchProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchProductsQuery, SearchProductsQueryVariables>(SearchProductsDocument, options);
      }
export function useSearchProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchProductsQuery, SearchProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchProductsQuery, SearchProductsQueryVariables>(SearchProductsDocument, options);
        }
export type SearchProductsQueryHookResult = ReturnType<typeof useSearchProductsQuery>;
export type SearchProductsLazyQueryHookResult = ReturnType<typeof useSearchProductsLazyQuery>;
export type SearchProductsQueryResult = Apollo.QueryResult<SearchProductsQuery, SearchProductsQueryVariables>;