import AppLogo from '@/components/atoms/AppLogo';
import {
  PersonIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@/components/atoms/IconButton';
import ShapeImage from '@/components/atoms/ShapeImage';
import Spinner from '@/components/atoms/Spinner';
import Text from '@/components/atoms/Text';
import Box from '@/components/layout/Box';
import Flex from '@/components/layout/Flex';
import BadgeIconButton from '@/components/molecules/BadgeIconButton';
import { useAuthContext } from '@/contexts/AuthContext';
import { useShoppingCartContext } from '@/contexts/ShoppingCartContext';
import Link from 'next/link';
import styled from 'styled-components';

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

const NavLink = styled.span`
  display: inline;
`;

const Anchor = styled(Text)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  const { cart } = useShoppingCartContext();
  const { authUser, isLoading } = useAuthContext();

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
              <Link href="/search/clothes" passHref>
                <Anchor>의류</Anchor>
              </Link>
            </Box>
          </NavLink>
          <NavLink>
            <Box display={{ base: 'none', md: 'block' }}>
              <Link href="/search/figure" passHref>
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
          <NavLink>
            <Box display={{ base: 'none', md: 'none' }}>
              <Link href="/search" passHref>
                <Anchor>
                  <SearchIcon />
                </Anchor>
              </Link>
            </Box>
          </NavLink>
          <NavLink>
            <Link href="/cart" passHref>
              <Anchor>
                <BadgeIconButton
                  icon={<ShoppingCartIcon size={24} />}
                  size="24px"
                  badgeContent={cart.length === 0 ? undefined : cart.length}
                  badgeBackgroundColor="#ed9f28"
                />
              </Anchor>
            </Link>
          </NavLink>
          <NavLink>
            {(() => {
              if (authUser) {
                return (
                  <Link href={`/users/${authUser.id}`} passHref>
                    <Anchor>
                      <ShapeImage
                        shape="circle"
                        src={authUser.profileImageUrl}
                        width={24}
                        height={24}
                        data-testid="profile-shape-image"
                        alt={authUser.username}
                      />
                    </Anchor>
                  </Link>
                );
              } else if (isLoading) {
                return <Spinner size={20} strokeWidth={2} />;
              } else {
                return (
                  <Link href="/signin" passHref>
                    <Anchor>
                      <PersonIcon size={24} />
                    </Anchor>
                  </Link>
                );
              }
            })()}
          </NavLink>
        </Nav>
      </Flex>
    </HeaderRoot>
  );
};

export default Header;
