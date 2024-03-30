import React from 'react';
import styled from 'styled-components';
import Button, { ButtonProps } from '@/components/atoms/Button';
import { toPropValue } from '@/utils/styles';

interface MenuButtonProps extends ButtonProps {
  toggleMenu?: () => void;
  children?: React.ReactNode;
}

const StyledButton = styled(Button)<ButtonProps>`
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: transparent;
  }
  ${(props) => toPropValue('font-size', props.fontSize, props.theme)}
  ${(props) => toPropValue('letter-spacing', props.letterSpacing, props.theme)}
  ${(props) => toPropValue('line-height', props.lineHeight, props.theme)}
  ${(props) => toPropValue('color', props.color, props.theme)}
  ${(props) => toPropValue('width', props.width, props.theme)}
  ${(props) => toPropValue('height', props.height, props.theme)}
  ${(props) => toPropValue('min-width', props.minWidth, props.theme)}
  ${(props) => toPropValue('min-height', props.minHeight, props.theme)}
  ${(props) => toPropValue('display', props.display, props.theme)}
  ${(props) => toPropValue('overflow', props.overflow, props.theme)}
  ${(props) => toPropValue('margin', props.margin, props.theme)}
  ${(props) => toPropValue('margin-top', props.marginTop, props.theme)}
  ${(props) => toPropValue('margin-right', props.marginRight, props.theme)}
  ${(props) => toPropValue('margin-bottom', props.marginBottom, props.theme)}
  ${(props) => toPropValue('margin-left', props.marginLeft, props.theme)}
  ${(props) => toPropValue('padding', props.padding, props.theme)}
  ${(props) => toPropValue('padding-top', props.paddingTop, props.theme)}
  ${(props) => toPropValue('padding-right', props.paddingRight, props.theme)}
  ${(props) => toPropValue('padding-bottom', props.paddingBottom, props.theme)}
  ${(props) => toPropValue('padding-left', props.paddingLeft, props.theme)}
  &:hover {
    ${(props) =>
      toPropValue(
        'background-color',
        props.pseudoClass?.hover?.backgroundColor,
      )}
  }
  &:disabled {
    ${(props) =>
      toPropValue(
        'background-color',
        props.pseudoClass?.disabled?.backgroundColor,
      )}
  }
`;

const MenuButton = ({ toggleMenu, children, ...rest }: MenuButtonProps) => {
  return (
    <StyledButton onClick={toggleMenu} {...rest}>
      {children}
    </StyledButton>
  );
};

export default MenuButton;
