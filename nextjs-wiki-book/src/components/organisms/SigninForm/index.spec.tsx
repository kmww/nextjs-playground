import { theme } from '@/styles/themes';
import {
  RenderResult,
  act,
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import SigninForm from './';

describe('SigninForm', () => {
  let renderResult: RenderResult;
  let handleSignin: jest.Mock;

  beforeEach(() => {
    handleSignin = jest.fn();
    renderResult = render(
      <ThemeProvider theme={theme}>
        <SigninForm onSignin={handleSignin} />
      </ThemeProvider>,
    );
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('사용자명과 비밀번호를 입력후, onSignin이 호출된다.', async () => {
    await act(async () => {
      // 사용자 명
      const inputUsernameNode = screen.getByPlaceholderText(
        /사용자명/,
      ) as HTMLInputElement;
      fireEvent.change(inputUsernameNode, { target: { value: 'user' } });

      // 비밀번호
      const inputPasswordNode = screen.getByPlaceholderText(
        /비밀번호/,
      ) as HTMLInputElement;
      fireEvent.change(inputPasswordNode, { target: { value: 'password' } });

      //로그인 버튼
      fireEvent.click(screen.getByText('로그인'));
    });

    expect(handleSignin).toHaveBeenCalledTimes(1);
  });
});
