import type { CodegenConfig } from '@graphql-codegen/cli'
import 'dotenv/config'

const { DATOCMS_API_KEY } = process.env

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      'https://graphql.datocms.com': {
        headers: {
          Authorization: `Bearer ${DATOCMS_API_KEY}`,
          'content-type': 'application/json',
        },
      },
    },
  ],
  generates: {
    'src/generated/graphql.ts': {
      plugins: ['typescript'],
    },
    'src/generated/graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
}

export default config
