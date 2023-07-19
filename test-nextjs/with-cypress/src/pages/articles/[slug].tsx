import Image from 'next/image';
import Link from 'next/link';
import { extractArticleIdFromSlug } from '@/utils';
import { GetServerSideProps } from 'next';
import { ArticleType } from '@/types/articleType';

interface ArticlePageProps {
  article: ArticleType;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (!params) {
    return { props: {} };
  }
  const slug = params.slug;
  const articleID =
    typeof slug === 'string' ? extractArticleIdFromSlug(slug) : undefined;

  const articleReq = await fetch(
    `http://localhost:3000/api/article?id=${articleID}`
  );
  const article = await articleReq.json();

  if (articleReq.status === 404) {
    return {
      redirect: {
        permanent: false,
        destination: '/404',
      },
      props: {},
    };
  }

  return {
    props: {
      article,
    },
  };
};

const ArticlePage = ({ article }: ArticlePageProps) => {
  return (
    <div className='w-4/6 m-auto shadow-xl text-gray-800 bg-white'>
      <div className='w-full bg-blue-500 text-white px-4 py-1'>
        <Link href='/' passHref>
          Back to homepage
        </Link>
      </div>
      <div className='relative w-full h-80'>
        <Image
          src={article.image.url}
          alt={article.title}
          layout='fill'
          objectFit='cover'
        />
        <div className='absolute px-4 py-2 bg-black bg-opacity-60 text-white bottom-2 right-2'>
          Image by <span className='font-bold'>{article.image.author}</span> on
          Unsplash
        </div>
      </div>
      <div className='p-8'>
        <h1 className='font-black text-4xl'>{article.title}</h1>
        <h2> Written by {article.author.name} </h2>
        <hr className='border-gray-400 mt-6 mb-6' />
        <p>{article.body}</p>
      </div>
    </div>
  );
};

export default ArticlePage;
