import Text from '@/components/atoms/Text';
import Flex from '@/components/layout/Flex';
import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const DropdownRoot = styled.div`
  position: relative;
  height: 38px;
`;

const DropdownControl = styled.div<{ hasError?: boolean }>`
  position: relative;
  overflow: hidden;
  background: #ffffff;
  border: ${({ theme, hasError }) =>
    hasError ? `1px solid ${theme.colors.danger}` : `${theme.colors.border}`};
  border-radius: 5px;
  box-sizing: border-box;
  cursor: default;
  outline: none;
  padding: 8px 52px 8px 12px;
`;

const DropdownValue = styled.div`
  color: ${({ theme }) => theme.colors.text};
`;

const DropdownPlaceholder = styled.div`
  color: #757575;
  font-size: ${({ theme }) => theme.fontSizes[1]};
  min-height: 20px;
  line-height: 20px;
`;

const DropdownArrow = styled.div<{ isOpen?: boolean }>`
  border-color: ${({ isOpen }) =>
    isOpen
      ? `transparent transparent #222222`
      : `#222222 transparent trasparent`};
  border-width: ${({ isOpen }) => (isOpen ? `0 5px 5px` : `5px 5px 0`)};
  border-style: solid;
  content: ' ';
  display: block;
  height: 0;
  margin-top: -ceil(2.5);
  position: absolute;
  top: 16px;
  right: 10px;
  width: 0;
`;

const DropdownMenu = styled.div`
  background-color: #ffffff;
  border: ${({ theme }) => theme.colors.border};
  box-shadow:
    0px 5px 5px -3px rgb(0 0 0 / 20%),
    0px 8px 10px 1px rgb(0 0 0 / 10%),
    0px 3px 14px 2px rgb(0 0 0 / 12%);
  box-sizing: border-box;
  border-radius: 5px;
  margin-top: -1px;
  max-height: 200px;
  overflow-y: auto;
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 1000;
`;

const DropdownOption = styled.div`
  padding: 8px 12px 8px 12px;
  &:hover {
    background-color: #f9f9f9;
  }
`;

export interface DropdownItemType {
  value: string | number | null;
  label?: string;
}

interface DropdownItemProps {
  item: DropdownItemType;
}

const DropdownItem = (props: DropdownItemProps) => {
  const { item } = props;

  return (
    <Flex alignItems="center">
      <Text margin={0} variant="small">
        {item.label ?? item.value}
      </Text>
    </Flex>
  );
};

interface DropdownProps {
  options: DropdownItemType[];
  value?: string | number;
  name?: string;
  placeholder?: string;
  hasError?: boolean;
  onChange?: (selected?: DropdownItemType) => void;
}

const Dropdown = (props: DropdownProps) => {
  const { options, value, name, hasError, onChange } = props;
  const initialItem = options.find((option) => option.value === value);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(initialItem);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDocumentClick = useCallback(
    (e: MouseEvent | TouchEvent) => {
      // 자기 자신 선택시 동작x
      if (dropdownRef.current) {
        const elements = dropdownRef.current.querySelectorAll('*');
        for (let i = 0; i < elements.length; i += 1) {
          if (elements[i] === e.target) {
            return;
          }
        }
      }

      setIsOpen(false);
    },
    [dropdownRef],
  );

  const handleMouseDown = (e: React.SyntheticEvent) => {
    setIsOpen((isOpen) => !isOpen);
    e.stopPropagation();
  };

  const handleSelectValue = (
    e: React.FormEvent<HTMLDivElement>,
    item: DropdownItemType,
  ) => {
    e.stopPropagation();

    setSelectedItem(item);
    setIsOpen(false);
    onChange && onChange(item);
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick, false);
    document.addEventListener('touchend', handleDocumentClick, false);

    return function cleanup() {
      document.removeEventListener('click', handleDocumentClick, false);
      document.removeEventListener('touchend', handleDocumentClick, false);
    };
  }, []);

  return (
    <DropdownRoot ref={dropdownRef}>
      <DropdownControl
        hasError={hasError}
        onMouseDown={handleMouseDown}
        onTouchEnd={handleMouseDown}
        data-testid="dropdown-control"
      >
        {selectedItem && (
          <DropdownValue>
            <DropdownItem item={selectedItem} />
          </DropdownValue>
        )}
        {!selectedItem && (
          <DropdownPlaceholder>{props.placeholder}</DropdownPlaceholder>
        )}
        <input
          type="hidden"
          name={name}
          value={selectedItem?.value ?? ''}
          onChange={() => onChange && onChange(selectedItem)}
        />
        <DropdownArrow isOpen={isOpen} />
      </DropdownControl>
      {isOpen && (
        <DropdownMenu>
          {props.options.map((item, index) => (
            <DropdownOption
              key={index}
              onMouseDown={(e) => handleSelectValue(e, item)}
              onClick={(e) => handleSelectValue(e, item)}
              data-testid="dropdown-option"
            >
              <DropdownItem item={item} />
            </DropdownOption>
          ))}
        </DropdownMenu>
      )}
    </DropdownRoot>
  );
};

export default Dropdown;
