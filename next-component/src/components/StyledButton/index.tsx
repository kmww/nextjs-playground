import styled, { css } from 'styled-components';

export const variants = {
  primary: {
    color: '#ffffff',
    backgroundColor: '#1D3461',
    border: 'none',
  },
  success: {
    color: '#ffffff',
    backgroundColor: '#5AB203',
    border: 'none',
  },
  transparent: {
    color: '#111111',
    backgroundColor: 'transparent',
    border: '`px solid black',
  },
} as const;

interface StyledButtonProps {
  variant: keyof typeof variants;
}

const StyledButton = styled.button<StyledButtonProps>`
  ${({ variant }) => {
    const style = variants[variant];

    return css`
      color: ${style.color};
      background-color: ${style.backgroundColor};
      border: ${style.border};
    `;
  }}

  border-radius: 12px;
  font-size: 14px;
  height: 38px;
  line-height: 22px;
  letter-spacing: 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export default StyledButton;
