import { Meta } from '@storybook/react';
import Menu from './';
import MenuButton from '@/components/atoms/MenuButton/indext';
import ShapeImage from '@/components/atoms/ShapeImage';
import MenuItem from '@/components/molecules/MenuItem';
import MenuList from '@/components/molecules/MenuList.tsx';

const meta: Meta<typeof Menu> = {
  title: 'Organisms/Menu',
};

export default meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ProfileMenu = (args: any) => {
  return (
    <Menu>
      <MenuButton>
        <ShapeImage
          src="/images/sample/1.jpg"
          alt="images"
          shape="circle"
          width={60}
          height={60}
        />
      </MenuButton>
      <MenuList isOpen={false} direction={args.direction}>
        <MenuItem>로그인</MenuItem>
        <MenuItem>로그아웃</MenuItem>
        <MenuItem>설정</MenuItem>
      </MenuList>
    </Menu>
  );
};

ProfileMenu.argTypes = {
  direction: {
    options: ['left', 'right', 'top', 'bottom'],
    control: { type: 'radio' },
    description: 'MenuList 방향 설정',
  },
};
