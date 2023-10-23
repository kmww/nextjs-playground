import { theme } from '@/styles/themes';

export type ThemeColors = keyof typeof theme.colors;

interface IconWrapperProps {
  size: number;
  cursor?: string;
  color?: ThemeColors;
  backgroundColor?: string;
}
