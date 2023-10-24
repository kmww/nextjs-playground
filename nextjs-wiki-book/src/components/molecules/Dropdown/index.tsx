import styled from 'styled-components';

const DropdownRoot = styled.div`
  position: relative;
  height: 38px;
`;

const DropdownControl = styled.div<{ hasError?: boolean }>`
  position: relative;
  overflow: hidden;
  background: #ffffff;
  border: ${({ theme, hasError }) =>
    hasError ? `1px solid ${theme.colors.danger}` : `${theme.colors.border}`};
  border-radius: 5px;
  box-sizing: border-box;
  cursor: default;
  outline: none;
  padding: 8px 52px 8px 12px;
`;

const DropdownValue = styled.div`
  color: ${({ theme }) => theme.colors.text};
`;

const DropdownPlaceholder = styled.div`
  color: #757575;
  font-size: ${({ theme }) => theme.fontSizes[1]};
  min-height: 20px;
  line-height: 20px;
`;
