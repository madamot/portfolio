import type { Meta, StoryObj } from '@storybook/react'

import Icon from '../../components/Icon'

const meta: Meta<typeof Icon> = {
  component: Icon,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    color: {
      control: { type: 'color' },
    },
  },
}

export default meta
type Story = StoryObj<typeof Icon>

export const Search: Story = {
  args: {
    type: 'Search',
  },
}
