import Text from '@/components/atoms/Text';
import { Category, Condition } from '@/types';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const Anchor = styled(Text)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const categoryNameDict: Record<Category, string> = {
  emoji: '이모티콘',
  figures: '피규어',
  pad: '마우스 패드',
};

const SearchPage: NextPage = () => {
  const router = useRouter();
  const slug: Category[] = Array.isArray(router.query.slug)
    ? (router.query.slug as Category[])
    : [];

  const conditions = () => {
    if (Array.isArray(router.query.condition)) {
      return router.query.conditon as Condition[];
    } else if (router.query.conditon) {
      return [router.query.conditon as Condition[]];
    } else {
      return [];
    }
  };
};
