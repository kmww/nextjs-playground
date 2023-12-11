import {
  RenderResult,
  act,
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Dropdown from '.';
import { theme } from '@/styles/themes';

describe('Dropdown', () => {
  let renderResult: RenderResult;
  let handleChange: jest.Mock;

  beforeEach(() => {
    handleChange = jest.fn();
    renderResult = render(
      <ThemeProvider theme={theme}>
        <Dropdown
          options={[
            { value: 'used', label: '중고' },
            { value: 'new', label: '신품' },
          ]}
          onChange={handleChange}
        />
      </ThemeProvider>,
    );
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('드롭다운 옵션 선택시 onChange가 호출된다.', async () => {
    await act(async () => {
      // 드롭다운 옵션을 표시
      const element = await screen.findByTestId('dropdown-control');
      element && fireEvent.mouseDown(element);
    });
    // 드롭다운 옵션을 선택
    const elements = screen.getAllByTestId('dropdown-option');
    elements && fireEvent.click(elements[0]);

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
