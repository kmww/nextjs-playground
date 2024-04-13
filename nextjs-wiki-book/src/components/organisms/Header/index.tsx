import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import LoggedInMenu from './LoggedInMenu';
import AppLogo from '@/components/atoms/AppLogo';
import Button from '@/components/atoms/Button';
import { SearchIcon, ShoppingCartIcon } from '@/components/atoms/IconButton';
import Text from '@/components/atoms/Text';
import Box from '@/components/layout/Box';
import Flex from '@/components/layout/Flex';
import {
  isLoggedInState,
  profileImageUrlState,
  userData,
} from '@/contexts/Auth/auth';
import { UseAuth } from '@/utils/hooks/useAuth';

const HeaderRoot = styled.header`
  height: 88px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.space[2]} 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Nav = styled(Flex)`
  & > span:not(:first-child) {
    margin-left: ${({ theme }) => theme.space[2]};
  }
`;

export const NavLink = styled.span`
  display: inline;
`;

export const Anchor = styled(Text)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  const [ssrComplete, setSsrComplete] = useState(false);
  const { data } = UseAuth();
  const [isLoggedIn] = useRecoilState(isLoggedInState);
  const [meData, setMeData] = useRecoilState(userData);
  const setProfileImageUrl = useSetRecoilState(profileImageUrlState);

  useEffect(() => setSsrComplete(true), []);

  useEffect(() => {
    if (data) {
      setMeData(data);
      setProfileImageUrl(data.me?.profileImageUrl);
    }
  }, [data, meData, setMeData, setProfileImageUrl]);

  return (
    <HeaderRoot>
      {ssrComplete && (
        <Flex paddingLeft={3} paddingRight={3} justifyContent="space-between">
          <Nav as="nav" height="56px" alignItems="center">
            <NavLink>
              <Link href="/" passHref>
                <Anchor>
                  <AppLogo />
                </Anchor>
              </Link>
            </NavLink>
            <NavLink>
              <Box display={{ base: 'none', md: 'block' }}>
                <Link href="/search" passHref>
                  <Anchor>모두</Anchor>
                </Link>
              </Box>
            </NavLink>
            <NavLink>
              <Box display={{ base: 'none', md: 'block' }}>
                <Link href="/search/emoji" passHref>
                  <Anchor>이모티콘</Anchor>
                </Link>
              </Box>
            </NavLink>
            <NavLink>
              <Box display={{ base: 'none', md: 'block' }}>
                <Link href="/search/figures" passHref>
                  <Anchor>피규어</Anchor>
                </Link>
              </Box>
            </NavLink>
            <NavLink>
              <Box display={{ base: 'none', md: 'block' }}>
                <Link href="/search/pad" passHref>
                  <Anchor>마우스 패드</Anchor>
                </Link>
              </Box>
            </NavLink>
          </Nav>
          <Nav as="nav" height="56px" alignItems="center">
            <Box display={{ base: 'block', md: 'none' }}>
              <Link href="/search" passHref>
                <Anchor>
                  <SearchIcon size={30} />
                </Anchor>
              </Link>
            </Box>
            <>
              {isLoggedIn ? (
                <>
                  <Link href="/cart" style={{ marginLeft: 10 }} passHref>
                    <Anchor>
                      <ShoppingCartIcon size={28} color="primaryDark" />
                    </Anchor>
                  </Link>
                  <LoggedInMenu meData={meData} />
                  <NavLink>
                    <Link href="/sell">
                      <Button>등록</Button>
                    </Link>
                  </NavLink>
                </>
              ) : (
                <Link href="/signin" style={{ marginLeft: 10 }} passHref>
                  <Anchor>
                    <Button>로그인</Button>
                  </Anchor>
                </Link>
              )}
            </>
          </Nav>
        </Flex>
      )}
    </HeaderRoot>
  );
};

export default Header;
