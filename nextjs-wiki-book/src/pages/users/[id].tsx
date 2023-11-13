import BreadcrumbItem from '@/components/atoms/BreadcrumbItem';
import Separator from '@/components/atoms/Sparator';
import UserProductCardListContainer from '@/components/containers/UserProductCardListContainer';
import UserProfileContainer from '@/components/containers/UserProfileContainer';
import Box from '@/components/layout/Box';
import Flex from '@/components/layout/Flex';
import Breadcrumb from '@/components/molecules/Breadcrumb';
import Layout from '@/components/templates/Layout';
import getAllProducts from '@/services/products/get-all-products';
import getUser from '@/services/users/get-users';
import { ApiContext } from '@/types';
import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

type UserPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const UserPage: NextPage<UserPageProps> = ({
  id,
  user,
  products,
}: UserPageProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <Flex
        paddingTop={2}
        paddingRight={{ base: 2, md: 0 }}
        paddingBottom={2}
        paddingLeft={{ base: 2, md: 0 }}
        justifyContent="center"
      >
        <Box width="1180px">
          <Box marginBottom={2}>
            <Breadcrumb>
              <BreadcrumbItem>
                <Link href="/">홈</Link>
              </BreadcrumbItem>
              {user && <BreadcrumbItem>{user.username}</BreadcrumbItem>}
            </Breadcrumb>
          </Box>
        </Box>
        <Box>
          <Box marginBottom={1}>
            <UserProfileContainer userId={id} user={user} />
          </Box>
          <Box marginBottom={1}>
            <Separator />
          </Box>
          <UserProductCardListContainer userId={id} products={products} />
        </Box>
      </Flex>
    </Layout>
  );
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const context: ApiContext = {
    apiRootUrl: process.env.API_BASE_URL || 'http://localhost:5000',
  };

  if (!params) {
    throw new Error('params is undefined');
  }

  const userId = Number(params.id);
  const [user, products] = await Promise.all([
    getUser(context, { id: userId }),
    getAllProducts(context, { userId }),
  ]);

  return {
    props: {
      id: userId,
      user,
      products: products ?? [],
    },
  };
};

export default UserPage;
