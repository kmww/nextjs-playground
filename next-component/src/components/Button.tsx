import { MouseEventHandler, ReactElement } from 'react';

interface ButtonProps {
  label: string;
  text: string;
  disabled: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: ButtonProps): ReactElement => {
  const { label, text, disabled, onClick } = props;

  return (
    <div className='button-container'>
      <span>{label}</span>
      <button disabled={disabled} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
