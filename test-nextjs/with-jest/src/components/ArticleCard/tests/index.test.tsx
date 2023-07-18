import { render, screen } from '@testing-library/react';
import ArticleCard from '../';
import { article } from './mock';

describe('ArticleCard', () => {
  test('Generated link should be in the correct format', () => {
    const component = render(<ArticleCard {...article} />);
    const link = component.getByRole('link').getAttribute('href');
    expect(link).toBe('/articles/healthy-summer-meloncarrot-soup-u12w3o0d');
  });
});
