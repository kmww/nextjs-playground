import styled from 'styled-components';

export interface CheckBoxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'defaultValue'> {
  label?: string;
}

const CheckBoxElement = styled.input`
  display: none;
`;

const Label = styled.label`
  cursor: pointer;
  margin-left: 6px;
  user-select: none;
`;
