import BreadcrumbItem from '@/components/atoms/BreadcrumbItem';
import Text from '@/components/atoms/Text';
import Box from '@/components/layout/Box';
import Flex from '@/components/layout/Flex';
import Breadcrumb from '@/components/molecules/Breadcrumb';
import FilterGroup from '@/components/molecules/FilterGroup';
import Layout from '@/components/templates/Layout';
import { Category, Condition } from '@/types';
import { NextPage } from 'next';
import Link from 'next/link';
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
      return [router.query.conditon as Condition];
    } else {
      return [];
    }
  };

  const handleChange = (selected: string[]) => {
    router.push({
      pathname: router.pathname,
      query: {
        slug,
        conditions: selected,
      },
    });
  };

  return (
    <Layout>
      <Box
        paddingLeft={{ base: 2, md: 3 }}
        paddingRight={{ base: 2, md: 3 }}
        paddingTop={2}
        paddingBottom={2}
      >
        <Box marginBottom={1}>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link href="/">홈</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link href="/serach">검색</Link>
            </BreadcrumbItem>
            {slug.slice(0, slug.length - 1).map((category, index) => (
              <BreadcrumbItem key={index}>
                <Link href={`/search/${slug.slice(0, index + 1).join('/')}`}>
                  {categoryNameDict[category] ?? 'Unknown'}
                </Link>
              </BreadcrumbItem>
            ))}
            {slug.length === 0 && <BreadcrumbItem>모두</BreadcrumbItem>}
            {slug.length > 0 && (
              <BreadcrumbItem>
                {categoryNameDict[slug[slug.length - 1]] ?? 'Unknown'}
              </BreadcrumbItem>
            )}
          </Breadcrumb>
        </Box>
        <Flex flexDirection={{ base: 'column', md: 'row' }}>
          <Box as="aside" minWidth="200px" marginBottom={{ base: 2, md: 0 }}>
            <FilterGroup
              title="상품 상태"
              items={[
                { label: '새 상품', name: 'new' },
                { label: '중고 상품', name: 'used' },
              ]}
              value={conditions()}
              onChange={handleChange}
            />
            <Box paddingTop={1}>
              <Text as="h2" fontWeight="bold" variant="mediumLarge">
                카테고리
              </Text>
              <Box>
                <Link href="/search/">
                  <Anchor>모두</Anchor>
                </Link>
              </Box>
              {Object.keys(categoryNameDict).map(
                (category: string, index: number) => (
                  <Box key={index} marginTop={1}>
                    <Link href={`/search/${category}`} passHref>
                      <Anchor>{categoryNameDict[category as Category]}</Anchor>
                    </Link>
                  </Box>
                ),
              )}
            </Box>
          </Box>
          <Box>
            <Text
              as="h2"
              display={{ base: 'block', md: 'none' }}
              fontWeight="bold"
              variant="mediumLarge"
            >
              상품 목록
            </Text>
            {/* <ProductCardlistContainer /> */}
          </Box>
        </Flex>
      </Box>
    </Layout>
  );
};

export default SearchPage;
