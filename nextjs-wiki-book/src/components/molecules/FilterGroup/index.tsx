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
