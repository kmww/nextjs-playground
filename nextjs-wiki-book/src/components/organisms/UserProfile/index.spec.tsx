import { RenderResult, render, screen } from '@testing-library/react';
import UserProfile from './';

const dummyUserData = {
  username: 'Test User',
  profileImageUrl: '/images/example/1.jpg',
  numberOfProducts: 5,
  description: '',
};

describe('UserProfile', () => {
  let renderResult: RenderResult;

  it('사용자의 게시물 작성 수를 렌더링한다.', () => {
    renderResult = render(<UserProfile {...dummyUserData} />);

    expect(screen.getByText(/제품 게시 완료/)).toHaveTextContent(
      '5개의 제품 게시 완료',
    );
  });
});
