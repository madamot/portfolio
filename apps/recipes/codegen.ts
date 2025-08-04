import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: `https://services.stage.adamhorne.co.uk/graphql`,
  generates: {
    'src/generated/': {
      preset: 'client',
      documents: ['src/graphql/queries.ts'],
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
      config: {
        scalars: {
          AWSDateTime: 'Date',
          AWSEmail: 'string',
          AWSJSON: 'string',
          AWSURL: 'string',
          AWSTimestamp: 'string',
        },
      },
    },
  },
  ignoreNoDocuments: true,
}

export default config
