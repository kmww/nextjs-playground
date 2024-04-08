import { MouseEventHandler, useEffect, useState } from 'react';
import styled from 'styled-components';
import Box from '@/components/layout/Box';
import { Responsive } from '@/types';

const Overlay = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DialogBox = styled(Box)<{ open: boolean; width: Responsive<string> }>`
  background-color: white;
  width: ${({ width }) => width};
  padding: 20px;
  border-radius: 8px;
  position: fixed;
  bottom: ${({ open }) => (open ? '50%' : '-100%')};
  left: 50%;
  transform: translate(-50%, ${({ open }) => (open ? '-50%' : '0%')});
  transition:
    bottom 0.3s ease-in-out,
    transform 0.3s ease-in-out;
`;

const Title = styled.h2`
  margin-top: 0;
`;

interface DialogProps {
  open: boolean;
  onClose: MouseEventHandler<HTMLDivElement>;
  title?: string;
  children: React.ReactNode;
}

const Dialog = ({ open, onClose, title, children }: DialogProps) => {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    if (open) {
      setIsOpen(true);
    } else {
      setTimeout(() => {
        setIsOpen(false);
      }, 300);
    }
  }, [open]);

  if (!open) return null;

  return (
    <Overlay onClick={onClose}>
      <DialogBox
        width={{ base: '300px', md: '500px' }}
        open={isOpen}
        onClick={(e) => e.stopPropagation()}
      >
        {title && <Title>{title}</Title>}
        {children}
      </DialogBox>
    </Overlay>
  );
};

export default Dialog;
