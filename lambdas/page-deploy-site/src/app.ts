import { APIGatewayProxyEvent, APIGatewayProxyResult, SNSEvent } from 'aws-lambda'
const savePage = require('./utils/savePage')
const generator = require('./utils/generator')
const fetch = require('./utils/fetch')
const cache = require('./utils/cache')
const path = require('path')

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

export const handler = async (event: SNSEvent) => {
  let response: APIGatewayProxyResult

  console.log('event', event)
  console.time('Overall')

  console.time('Get page')
  console.log('sns payload', event.Records[0].Sns)
  const page = await cache.get(JSON.parse(event.Records[0].Sns.Message))
  // const page = await fetch.page(JSON.parse(event?.body!).entity.id)
  console.log('page', page)

  console.timeEnd('Get page')

  console.time('Render Page')
  // const output = await generator.render(page)

  console.timeEnd('Render Page')

  console.time('Put page in S3')
  // response = await savePage.put(JSON.parse(event?.body!), output)
  console.timeEnd('Put page in S3')

  console.timeEnd('Overall')

  // response = {
  //   statusCode: 200,
  //   body: JSON.stringify(event),
  // }
  // return response
}
