import type { CodegenConfig } from '@graphql-codegen/cli'
import 'dotenv/config'

// const { DATOCMS_API_KEY } = process.env

const config: CodegenConfig = {
  schema: [
    {
      'https://qmv3jp3rezd5pauit6bsah2hay.appsync-api.eu-west-1.amazonaws.com/graphql': {
        headers: {
          'x-api-key': `da2-ffm6wgk3izclncsxiqouldge2u`,
        },
      },
    },
  ],
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
