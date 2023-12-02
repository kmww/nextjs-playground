import {
  RenderResult,
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import CheckBox from './';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/themes';

describe('CheckBox', () => {
  let renderResult: RenderResult;
  let handleChange: jest.Mock;

  it('클릭시 onChange가 호출된다.', () => {
    handleChange = jest.fn();
    renderResult = render(
      <ThemeProvider theme={theme}>
        <CheckBox onChange={handleChange} />
      </ThemeProvider>,
    );

    fireEvent.click(screen.getByTestId('checkbox-wrapper'));
    expect(handleChange).toHaveBeenCalledTimes(1);

    renderResult.unmount();
  });

  it('토글 버튼 클릭시 체크 상태가 변경된다.', () => {
    renderResult = render(
      <ThemeProvider theme={theme}>
        <CheckBox />,
      </ThemeProvider>,
    );

    const element = screen.getByTestId('checkbox-wrapper') as HTMLInputElement;

    expect(element.checked).toBe(false);
    fireEvent.click(element);
    expect(element.checked).toBe(true);

    renderResult.unmount();
  });
});
