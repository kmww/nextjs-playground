import Flex from '@/components/layout/Flex';
import React from 'react';
import styled from 'styled-components';

const BreadcrumbRoot = styled(Flex)`
  list-style: none;
  padding: 0px;
  margin: 0px;
`;

interface BreadcrumbProps {
  children?: React.ReactNode;
}
