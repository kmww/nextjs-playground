import React from 'react';
import styled from 'styled-components';
import Button from '@/components/atoms/Button';

const StyledButton = styled(Button)`
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 4px;
  &:hover {
    background-color: transparent;
  }
`;

interface MenuButtonProps {
  toggleMenu?: () => void;
  children?: React.ReactNode;
}

const MenuButton = ({ toggleMenu, children }: MenuButtonProps) => {
  return <StyledButton onClick={toggleMenu}>{children}</StyledButton>;
};

export default MenuButton;
