import { theme } from '@/styles/themes';
import {
  RenderResult,
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Dropzone from './';

describe('Dropzone', () => {
  let renderResult: RenderResult;
  let handleDrop: jest.Mock;

  beforeEach(() => {
    handleDrop = jest.fn();
    renderResult = render(
      <ThemeProvider theme={theme}>
        <Dropzone onDrop={handleDrop} />
      </ThemeProvider>,
    );
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('파일 드롭시 onDrop 호출.', async () => {
    const element = await screen.findByTestId('dropzone');
    fireEvent.drop(element, {
      dataTransfer: {
        files: [new File(['(ㅇㅇ)'], 'test.png', { type: 'image/png' })],
      },
    });

    expect(handleDrop).toHaveBeenCalledTimes(1);
  });
});
