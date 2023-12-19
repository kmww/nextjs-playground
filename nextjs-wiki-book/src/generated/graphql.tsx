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

export type Mutation = {
  __typename?: 'Mutation';
  signUp: UserData;
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
  /** 유저 닉네임 */
  displayName: Scalars['String'];
  /** 이메일 */
  email: Scalars['String'];
  id: Scalars['Int'];
  /** 업데이트 일자 */
  updatedAt: Scalars['String'];
  /** 유저 이름 */
  username: Scalars['String'];
};

export type SignUpMutationVariables = Exact<{
  signUpInput: SignUpInput;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp: { __typename?: 'UserData', id: number, email: string, username: string, displayName: string, createdAt: string, updatedAt: string } };

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