import styled from 'styled-components';

interface MenuItemProps {
  children: React.ReactNode;
}

const StyledLi = styled.li`
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  color: black;
`;

const MenuItem = ({ children }: MenuItemProps) => {
  return <StyledLi>{children}</StyledLi>;
};

export default MenuItem;
