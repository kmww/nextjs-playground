import styled from 'styled-components';
import Flex, { FlexProps } from '@/components/layout/Flex';
import { toPropValue } from '@/utils/styles';

const Wrapper = styled(Flex)<FlexProps>`
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
  border-radius: 10px;
  ${(props) => toPropValue('width', props.width, props.theme)}
  ${(props) => toPropValue('height', props.height, props.theme)}
  ${(props) =>
    toPropValue('background-color', props.backgroundColor, props.theme)}
`;

export default Wrapper;
