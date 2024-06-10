import { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/docs/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-interactions',
  ],

  framework: '@storybook/react-vite',

  staticDirs: ['../src/components/Icon/icons'],

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
}
export default config
