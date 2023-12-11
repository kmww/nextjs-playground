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
  products: Array<Product>;
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

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', id: number, category: string, title: string, description: string, imageUrl: string, blurDataUrl?: string | null, price: number, condition: string, owner: { __typename?: 'User', id: number, username: string, displayName: string, email: string, profileImageUrl?: string | null, description: string } }> };


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