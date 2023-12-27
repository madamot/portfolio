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
      plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
      config: {
        strictScalars: true,
        scalars: {
          BooleanType: 'boolean',
          CustomData: 'Record<string, unknown>',
          Date: 'string',
          DateTime: 'string',
          FloatType: 'number',
          IntType: 'number',
          ItemId: 'string',
          JsonField: 'unknown',
          MetaTagAttributes: 'Record<string, string>',
          UploadId: 'string',
        },
      },
    },
    'src/generated/graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
}

export default config
