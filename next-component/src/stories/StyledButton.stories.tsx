import { ComponentMeta } from '@storybook/react';
import StyledButton from '../components/StyledButton';
import { action } from '@storybook/addon-actions';
import { useState } from 'react';

export default {
  title: 'StyledButton',
  component: StyledButton,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof StyledButton>;

const incrementAction = action('increment');

export const Primary = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  const [count, setCount] = useState(0);
  const onClick = (e: React.MouseEvent) => {
    incrementAction(e, count);
    setCount((num) => num + 1);
  };

  return (
    <StyledButton {...props} variant='primary' onClick={onClick}>
      Count: {count}
    </StyledButton>
  );
};

export const Success = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return (
    <StyledButton {...props} variant='success'>
      Success
    </StyledButton>
  );
};

export const Transparent = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return (
    <StyledButton {...props} variant='transparent'>
      Transparent
    </StyledButton>
  );
};
