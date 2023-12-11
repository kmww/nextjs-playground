import { useCallback, useEffect, useState } from 'react';
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
  const [selected, SetSelected] = useState(value ?? defaultValue);

  useEffect(() => {
    SetSelected(value);
  }, [value]);

  const handleChnage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.name;
      const newSelected = e.target.checked
        ? [...selected, value]
        : selected.filter((v) => v !== value);

      SetSelected(newSelected);
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
          <Box key={index} marginTop={index === 0 ? 0 : '4px'}>
            <CheckBox
              name={name}
              label={label}
              checked={!!selected.find((e) => e === name)}
              onChange={handleChnage}
            />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default FilterGroup;
