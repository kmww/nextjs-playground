import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const BlogPage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      router.push('/');
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div>
      <Link
        href={{
          pathname: '/blog/[date]/[title]',
          query: { date: '2023-01-01', title: 'new year' },
        }}>
        Read First Post
      </Link>
      <br />
      <Link href='/blog/2023-03-15/deadline'>Read Second Post</Link>
    </div>
  );
};

export default BlogPage;
