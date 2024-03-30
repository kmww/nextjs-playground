import React from 'react';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface MenuProps {
  children: React.ReactNode;
}

const MenuContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Menu = ({ children }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClick);
    } else {
      document.removeEventListener('mousedown', handleClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MenuContainer ref={menuRef}>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child as React.ReactElement, {
          isOpen,
          toggleMenu,
        });
      })}
    </MenuContainer>
  );
};

export default Menu;
