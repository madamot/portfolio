import type { CodegenConfig } from '@graphql-codegen/cli'
const { DATOCMS_API_KEY } = process.env

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      'https://graphql.datocms.com': {
        headers: {
          Authorization: 'Bearer ade3d32b08d067f90eb42e0a0ae316',
          'content-type': 'application/json',
        },
      },
    },
  ],
  generates: {
    'src/generated/graphql.ts': {
      plugins: ['typescript'],
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
}

export default config
