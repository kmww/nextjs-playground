import { Select } from '@chakra-ui/react';
import { ReactElement } from 'react';

const SelectQuantitiy = (props: any): ReactElement => {
  const quantity = [...Array.from({ length: 10 })];

  return (
    <Select
      placeholder='Quantity'
      onChange={(event) => props.onChange(event.target.value)}>
      {quantity.map((_, i) => (
        <option key={i + 1} value={i + 1}>
          {i + 1}
        </option>
      ))}
    </Select>
  );
};

export default SelectQuantitiy;
