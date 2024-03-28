import { gql } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';
import { RenderResult, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Header from './';
import { theme } from '@/styles/themes';

const mocks = [
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
      data: {
        me: {
          id: 1,
          username: 'mock',
          email: 'mock',
          displayName: 'mock',
          profileImageUrl: '/images/sample/1.jpg',
          description: '',
          createdAt: '',
          updatedAt: '',
        },
      },
    },
  },
];

describe('Header', () => {
  let renderResult: RenderResult;

  it('비 로그인', async () => {
    renderResult = render(
      <ThemeProvider theme={theme}>
        <MockedProvider mocks={mocks}>
          <Header />
        </MockedProvider>
      </ThemeProvider>,
    );

    // 유저 이미지 없음
    expect(screen.queryByTestId('profile-shape-image')).toBeNull();

    // 카트가 비어있음
    expect(screen.queryByTestId('badge-wrapper')).toBeNull();

    renderResult.unmount();
  });
});
