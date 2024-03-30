import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import LoggedInMenu from './LoggedInMenu';
import AppLogo from '@/components/atoms/AppLogo';
import Button from '@/components/atoms/Button';
import {
  PersonIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@/components/atoms/IconButton';
import Text from '@/components/atoms/Text';
import Box from '@/components/layout/Box';
import Flex from '@/components/layout/Flex';
import { useMeQuery } from '@/generated/graphql';

const HeaderRoot = styled.header`
  height: 88px;
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
  const [accessToken, setAccessToken] = useState<string | undefined>();
  const { data } = useMeQuery({ skip: !accessToken });

  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      const token = localStorage.getItem('access_token');
      setAccessToken(token !== null ? token : undefined);
    }
  }, [data]);

  const isLoggedIn = useMemo(() => {
    if (accessToken) return data?.me?.id;
    return false;
  }, [accessToken, data?.me?.id]);

  return (
    <HeaderRoot>
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
                피규어
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
          <Link href="/cart" style={{ marginLeft: 10 }} passHref>
            <Anchor>
              <ShoppingCartIcon size={28} />
            </Anchor>
          </Link>
          <>
            {isLoggedIn ? (
              <LoggedInMenu meData={data} />
            ) : (
              <Link href="/signin" style={{ marginLeft: 10 }} passHref>
                <Anchor>
                  <PersonIcon size={30} />
                </Anchor>
              </Link>
            )}
          </>
          <NavLink>
            <Link href="sell">
              <Button>등록</Button>
            </Link>
          </NavLink>
        </Nav>
      </Flex>
    </HeaderRoot>
  );
};

export default Header;
