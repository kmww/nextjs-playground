import { ReactElement, useCallback, useState } from 'react';
import Button from './Button';

const useAlert = () => {
  const cb = useCallback((text: string) => {
    alert(text);
  }, []);

  return cb;
};

interface CountButtonProps {
  label: string;
  maximum: number;
}

const CountButton = (props: CountButtonProps): ReactElement => {
  const { label, maximum } = props;

  const displayAlert = useAlert();
  const [count, setCount] = useState(0);
  const onClick = useCallback(() => {
    const newCount = count + 1;
    setCount(newCount);

    if (newCount >= maximum) {
      displayAlert(`You've clicked ${newCount} times.`);
    }
  }, [count, displayAlert, maximum]);

  const disabled = count >= maximum;
  const text = disabled
    ? `Can't click any more`
    : `You've clickced ${count} times`;

  return (
    <Button disabled={disabled} label={label} text={text} onClick={onClick} />
  );
};

export default CountButton;
