import colors from './colors';
import fontSizes from './fontSizes';
import letterSpacings from './letterSpacings';
import lineHeights from './lineHeights';
import space from './space';
import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  space,
  fontSizes,
  letterSpacings,
  lineHeights,
  colors,
} as const;
