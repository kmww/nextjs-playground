import {
  RenderResult,
  act,
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import SigninForm from '.';
import { theme } from '@/styles/themes';

describe('SigninForm', () => {
  let renderResult: RenderResult;
  let handleSignin: jest.Mock;

  beforeEach(() => {
    handleSignin = jest.fn();
    renderResult = render(
      <ThemeProvider theme={theme}>
        <SigninForm onSignIn={handleSignin} isLoading={false} />
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
        /이메일 또는 닉네임/,
      ) as HTMLInputElement;
      fireEvent.change(inputUsernameNode, { target: { value: 'user' } });

      // 비밀번호
      const inputPasswordNode = screen.getByPlaceholderText(
        /\*{8}/,
      ) as HTMLInputElement;
      fireEvent.change(inputPasswordNode, { target: { value: 'password' } });

      //로그인 버튼
      fireEvent.click(screen.getByText('로그인'));
    });

    expect(handleSignin).toHaveBeenCalledTimes(1);
  });

  it('비밀번호 미입력시 onSignin이 호출되지 않는다.', async () => {
    await act(async () => {
      const inputUsernameNode = screen.getByPlaceholderText(
        /이메일 또는 닉네임/,
      ) as HTMLInputElement;
      fireEvent.change(inputUsernameNode, { target: { value: 'user' } });

      fireEvent.click(screen.getByText('로그인'));
    });

    expect(handleSignin).toHaveBeenCalledTimes(0);
  });

  it('사용자명 미입력시 onSignin이 호출되지 않는다.', async () => {
    await act(async () => {
      const inputPasswordNode = screen.getByPlaceholderText(
        /\*{8}/,
      ) as HTMLInputElement;
      fireEvent.change(inputPasswordNode, { target: { value: 'password' } });

      fireEvent.click(screen.getByText('로그인'));

      expect(handleSignin).toHaveBeenCalledTimes(0);
    });
  });
});
