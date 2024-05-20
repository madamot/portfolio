import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { S3 } from '@aws-sdk/client-s3'

const { AWS_ENV } = process.env

export const handler = async (event: any) => {
  const s3 = new S3()

  console.log('event', event)

  console.time('Overall')
  const payload = event?.Payload?.payLoad

  console.time('Get page')

  console.timeEnd('Get page')

  console.time('Delete cache')

  await s3.deleteObject({
    Bucket: `page-${AWS_ENV}-cache`,
    Key: `${payload.entity.attributes.name}/${payload.entity.attributes.name}.json`,
  })

  await s3.deleteObject({
    Bucket: `page-${AWS_ENV}-preview-cache`,
    Key: `${payload.entity.attributes.name}/${payload.entity.attributes.name}.json`,
  })

  console.timeEnd('Delete cache')

  console.time('Delete page')

  await s3.deleteObject({
    Bucket: `page-madamot-${AWS_ENV}`,
    Key: `${payload.entity.attributes.location}/index.html`,
  })

  await s3.deleteObject({
    Bucket: `page-madamot-${AWS_ENV}-preview`,
    Key: `preview/${payload.entity.attributes.location}/index.html`,
  })

  console.timeEnd('Delete page')

  console.timeEnd('Overall')
}
