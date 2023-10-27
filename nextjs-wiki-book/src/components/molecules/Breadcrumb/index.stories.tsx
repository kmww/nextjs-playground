import { Meta } from '@storybook/react';
import Breadcrumb from './';
import BreadcrumbItem from '@/components/atoms/BreadcrumbItem';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Molecules/Breadcrumb',
};

export default meta;

export const Standard = () => (
  <Breadcrumb>
    <BreadcrumbItem>
      <a href="#">Top</a>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <a href="#">Clothes</a>
    </BreadcrumbItem>
    <BreadcrumbItem>Item</BreadcrumbItem>
  </Breadcrumb>
);
