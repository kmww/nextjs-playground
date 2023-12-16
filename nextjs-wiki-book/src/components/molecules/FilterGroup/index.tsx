import { useCallback, useState } from 'react';
import uuid from 'react-uuid';
import Text from '@/components/atoms/Text';
import Box from '@/components/layout/Box';
import CheckBox from '@/components/molecules/CheckBox';

interface Item {
  label: string;
  name: string;
}

interface FilterGroupProps {
  title: string;
  items: Item[];
  value?: string[];
  defaultValue?: string[];
  onChange?: (values: string[]) => void;
}

const FilterGroup = ({
  title,
  items,
  value = [],
  defaultValue = [],
  onChange,
}: FilterGroupProps) => {
  const [selected, setSelected] = useState(value ?? defaultValue);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.name;
      const newSelected = e.target.checked
        ? [...selected, value]
        : selected.filter((v) => v !== value);

      setSelected(newSelected);
      onChange && onChange(newSelected);
    },
    [onChange, selected],
  );

  return (
    <>
      <Text fontWeight="bold" variant="mediumLarge">
        {title}
      </Text>
      <Box marginTop={2}>
        {items.map(({ label, name }, index) => (
          <Box key={uuid()} marginTop={index === 0 ? 0 : '4px'}>
            <CheckBox
              name={name}
              label={label}
              checked={!!selected.find((e) => e === name)}
              onChange={handleChange}
            />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default FilterGroup;
