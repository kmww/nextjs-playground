import { gql } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';
import { Meta } from '@storybook/react';
import Header from './';

const meta: Meta<typeof Header> = {
  title: 'Organisms/Header',
};

export default meta;

export const NoLogin = () => {
  const mock = [
    {
      request: {
        query: gql`
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
        `,
      },
      result: {
        data: null,
      },
    },
  ];
  return (
    <MockedProvider mocks={mock}>
      <Header />
    </MockedProvider>
  );
};
