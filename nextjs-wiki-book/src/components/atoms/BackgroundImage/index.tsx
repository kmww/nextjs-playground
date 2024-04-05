import styled from 'styled-components';
import { Responsive } from '@/types';
import { toPropValue } from '@/utils/styles';

export type BackgroundImage = React.HTMLAttributes<HTMLDivElement> & {
  imageUrl: string;
  width?: Responsive<string>;
  height?: Responsive<string>;
  top?: Responsive<string>;
  bottom?: Responsive<string>;
  right?: Responsive<string>;
  left?: Responsive<string>;
};

const StyledBackground = styled.div<BackgroundImage>`
  position: absolute;
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  z-index: -1;
  background: url(${(props) => props.imageUrl});
  ${(props) => toPropValue('width', props.width, props.theme)}
  ${(props) => toPropValue('height', props.height, props.theme)}
  ${(props) => toPropValue('top', props.top, props.theme)}
  ${(props) => toPropValue('bottom', props.bottom, props.theme)}
  ${(props) => toPropValue('right', props.right, props.theme)}
  ${(props) => toPropValue('left', props.left, props.theme)}
`;

const BackgroundImage = (props: BackgroundImage) => {
  const { imageUrl, ...rest } = props;
  return <StyledBackground imageUrl={imageUrl} {...rest} />;
};

export default BackgroundImage;
