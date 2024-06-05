import { S3 } from '@aws-sdk/client-s3'

const { INDEX_TABLE } = process.env

export const handler = async (event: any) => {
  console.log('event', event)

  console.time('Overall')

  console.timeEnd('Overall')
}
