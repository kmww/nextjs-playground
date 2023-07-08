import { NextPage } from 'next';
import Link from 'next/link';

const BlogPage: NextPage = () => {
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
