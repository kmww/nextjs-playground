import styled from 'styled-components';

interface MenuListProps {
  isOpen: boolean;
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'top' | 'bottom';
}

const StyledList = styled.ul<MenuListProps>`
  min-width: 300px;
  list-style-type: none;
  padding: 0;
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  ${({ direction }) => {
    switch (direction) {
      case 'left':
        return 'left: 0;';
      case 'top':
        return 'top: 0;';
      case 'bottom':
        return 'bottom: 0;';
      default:
        return 'right: 0';
    }
  }};
`;

const MenuList = ({ isOpen, children, direction }: MenuListProps) => {
  return (
    <StyledList isOpen={isOpen} direction={direction}>
      {children}
    </StyledList>
  );
};

export default MenuList;
