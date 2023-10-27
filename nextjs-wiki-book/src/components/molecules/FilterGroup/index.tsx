import { useCallback, useEffect, useState } from 'react';

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
};
