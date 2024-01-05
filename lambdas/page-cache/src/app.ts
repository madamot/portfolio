import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { S3 } from '@aws-sdk/client-s3'
import { SNSClient, PublishCommand } from '@aws-sdk/client-sns'
import { getPageData } from './utils/fetch'

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

export const handler = async (event: APIGatewayProxyEvent) => {
  let response: APIGatewayProxyResult

  console.log('event', event)

  console.time('Overall')

  console.time('Get page')
  const parsePayload = JSON.parse(event?.body!)
  const preview = parsePayload.event_type !== 'publish'
  const page = await getPageData(
    preview,
    parsePayload.entity.attributes.location ? parsePayload.entity.id : null
  )
  console.timeEnd('Get page')

  console.time('Put json in S3 cache')
  console.log(`Bucket ${preview ? 'page-madamot-live-preview-cache' : 'page-madamot-live-cache'}`)

  const params = {
    Bucket: preview ? 'page-madamot-live-preview-cache' : 'page-madamot-live-cache',
    Key: `${parsePayload.entity.attributes.name}/${parsePayload.entity.attributes.name}.json`,
    Body: JSON.stringify(page),
    ContentType: 'application/json',
  }
  const s3 = new S3()
  await s3.putObject(params)
  console.timeEnd('Put json in S3 cache')

  const snsClient = new SNSClient({})
  await snsClient.send(
    new PublishCommand({
      Message: JSON.stringify({
        key: `${parsePayload.entity.attributes.name}/${parsePayload.entity.attributes.name}.json`,
        preview: preview,
      }),
      TopicArn: process.env.TOPIC_NAME,
    })
  )

  console.timeEnd('Overall')
}
