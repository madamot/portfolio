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

const { AWS_ENV } = process.env

export const handler = async (event: any) => {
  let response: APIGatewayProxyResult

  console.log('event', event)

  console.time('Overall')

  console.time('Get page')
  const parsePayload = event?.Payload?.payLoad
  console.log('parsePayload', parsePayload)

  const preview = parsePayload.event_type !== 'publish'
  const page = await getPageData(
    preview,
    parsePayload.entity.attributes.location ? parsePayload.entity.id : null
  )

  console.log('Page data', JSON.stringify(page))
  console.timeEnd('Get page')

  console.time('Put json in S3 cache')
  console.log(
    `Bucket ${preview ? `page-madamot-${AWS_ENV}-preview-cache` : `page-madamot-${AWS_ENV}-cache`}`
  )

  const params = {
    Bucket: preview ? `page-madamot-${AWS_ENV}-preview-cache` : `page-madamot-${AWS_ENV}-cache`,
    Key: `${parsePayload.entity.attributes.name}/${parsePayload.entity.attributes.name}.json`,
    Body: JSON.stringify(page),
    ContentType: 'application/json',
  }
  const s3 = new S3()
  await s3.putObject(params)
  console.timeEnd('Put json in S3 cache')
  console.timeEnd('Overall')

  const returnData = {
    key: `${parsePayload.entity.attributes.name}/${parsePayload.entity.attributes.name}.json`,
    preview: preview,
  }

  console.log('returnData', returnData)

  return returnData
}
