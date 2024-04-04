import styled from 'styled-components';

type SeparatorProps = {
  children?: React.ReactNode;
};

const getMargin = ({ children }: SeparatorProps) =>
  children ? '.50em' : '0em';

const Separator = styled.div<SeparatorProps>`
  height: 22px;
  color: ${({ theme }) => theme.colors.seperate};
  display: flex;
  align-items: center;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid ${({ theme }) => theme.colors.seperate};
  }

  &::before {
    margin-right: ${getMargin};
  }

  &::after {
    margin-left: ${getMargin};
  }
`;

export default Separator;
