import getUser from '@/services/users/get-users';
import { ApiContext } from '@/types';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';

type UserPageProps = InferGetStaticPropsType<typeof getStaticProps>;

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
