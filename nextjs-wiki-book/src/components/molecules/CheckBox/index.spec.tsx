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
  });
});
