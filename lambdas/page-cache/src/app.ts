import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
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

  console.time('Overall')

  console.time('Get page')
  const parsePayload = JSON.parse(event?.body!)
  const page = await fetch.page(parsePayload.entity.attributes.slug ? null : parsePayload.entity.id)

  console.timeEnd('Get page')

  console.time('Put json in S3 cache')

  console.timeEnd('Put json in S3 cache')

  console.timeEnd('Overall')
}
