import { useCallback, useRef, useState } from 'react';
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

const CheckBox = (props: CheckBoxProps) => {
  const { id, label, checked, onChange, ...rest } = props;
  const [isChecked, setIsChecked] = useState(checked);
  const ref = useRef<HTMLInputElement>(null);

  const onClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      ref.current?.click();
      setIsChecked((isChecked) => !isChecked);
    },
    [ref, setIsChecked],
  );
};
