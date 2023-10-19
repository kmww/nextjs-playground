import { Meta, StoryObj } from '@storybook/react';
import Text from './';

const meta: Meta<typeof Text> = {
  title: 'Atoms/Text',
  argTypes: {
    variant: {
      options: [
        'extraSmall',
        'small',
        'medium',
        'mediumLarge',
        'large',
        'extraLarge',
      ],
      control: { type: 'select' },
      defaultValue: 'medium',
      description: '텍스트 변형',
      table: {
        type: {
          summary: 'extraSmall, small, medium, mediumLarge, large, extraLarge',
        },
        defaultValue: { summary: 'medium' },
      },
    },
    children: {
      control: { type: 'text' },
      description: '텍스트',
      table: {
        type: { summary: 'string' },
      },
    },
    fontWeight: {
      control: { type: 'text' },
      description: '폰트 굵기',
      table: {
        type: { summary: 'string' },
      },
    },
    lineHeight: {
      control: { type: 'text' },
      description: '행 높이',
      table: {
        type: { summary: 'string' },
      },
    },
    color: {
      control: { type: 'color' },
      description: '텍스트 색상',
      table: {
        type: { summary: 'string' },
      },
    },
    backgroundColor: {
      control: { type: 'color' },
      description: '배경 색상',
      table: {
        type: { summary: 'string' },
      },
    },
    m: {
      control: { type: 'number' },
      description: '마진',
      table: {
        type: { summary: 'number' },
      },
    },
    mt: {
      control: { type: 'number' },
      description: '위쪽 마진',
      table: {
        type: { summary: 'number' },
      },
    },
    mr: {
      control: { type: 'number' },
      description: '오른쪽 마진',
      table: {
        type: { summary: 'number' },
      },
    },
    mb: {
      control: { type: 'number' },
      description: '아래쪽 마진',
      table: {
        type: { summary: 'number' },
      },
    },
    ml: {
      control: { type: 'number' },
      description: '왼쪽 마진',
      table: {
        type: { summary: 'number' },
      },
    },
    p: {
      control: { type: 'number' },
      description: '패딩',
      table: {
        type: { summary: 'number' },
      },
    },
    pt: {
      control: { type: 'number' },
      description: '위쪽 패딩',
      table: {
        type: { summary: 'number' },
      },
    },
    pr: {
      control: { type: 'number' },
      description: '오른쪽 패딩',
      table: {
        type: { summary: 'number' },
      },
    },
    pb: {
      control: { type: 'number' },
      description: '아래쪽 패딩',
      table: {
        type: { summary: 'number' },
      },
    },
    pl: {
      control: { type: 'number' },
      description: '왼쪽 마진',
      table: {
        type: { summary: 'number' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

const Template: Story = {
  render: (args) => <Text {...args} />,
};

const longText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
when an unknown printer took a galley of type and scrambled it to make a type specimen book.
It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
Contrary to popular belief, Lorem Ipsum is not simply random text.
It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`;

export const ExtraSmall = {
  ...Template,
  args: {
    variant: 'extraSmall',
    children: longText,
  },
};

export const Small = {
  ...Template,
  args: {
    variant: 'small',
    children: longText,
  },
};

export const Medium = {
  ...Template,
  args: {
    variant: 'medium',
    children: longText,
  },
};

export const MediumLarge = {
  ...Template,
  args: {
    variant: 'mediumLarge',
    children: longText,
  },
};

export const Large = {
  ...Template,
  args: {
    variant: 'large',
    children: longText,
  },
};

export const ExtraLarge = {
  ...Template,
  args: {
    variant: 'extraLarge',
    children: longText,
  },
};
