import styled from 'styled-components';
import Separator from '@/components/atoms/Sparator';
import Box from '@/components/layout/Box';
import Footer from '@/components/organisms/Footer';
import Header from '@/components/organisms/Header';

interface LayoutProps {
  children: React.ReactNode;
}

export const StyledBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

const ImageBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f6f6e5;
`;

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <StyledBox>
        <ImageBox />
      </StyledBox>
      <main>{children}</main>
      <Separator />
      <Box padding={3}>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
