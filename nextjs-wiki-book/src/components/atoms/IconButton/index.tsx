import { theme } from '@/styles/themes';
import styled from 'styled-components';

export type ThemeColors = keyof typeof theme.colors;

interface IconWrapperProps {
  size: number;
  cursor?: string;
  color?: ThemeColors;
  backgroundColor?: string;
}

const IconWrapper = styled.div<IconWrapperProps>`
  display: inline-block;
  font-size: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  cursor: ${({ cursor }) => cursor ?? 'pointer'};
  color: ${({ theme, color }) => {
    if (color) {
      return theme.colors[color];
    }

    return theme.colors.icon;
  }};
  svg {
    display: block;
  }
`;

export interface IconButtonProps {
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  colors?: ThemeColors;
  className?: string;
  backgroundColor?: string;
  size?: number;
}
