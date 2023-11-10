import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { S3 } from '@aws-sdk/client-s3'
const fetch = require('./utils/fetch')

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
  const page = await fetch.page(
    parsePayload.entity.attributes.location ? parsePayload.entity.id : null
  )
  console.timeEnd('Get page')

  console.time('Put json in S3 cache')
  const params = {
    Bucket: 'page-madamot-live-cache',
    Key: `${parsePayload.entity.attributes.name}/${parsePayload.entity.attributes.name}.json`,
    Body: JSON.stringify(page),
    ContentType: 'application/json',
  }
  const s3 = new S3()
  await s3.putObject(params)
  console.timeEnd('Put json in S3 cache')

  console.timeEnd('Overall')
}
