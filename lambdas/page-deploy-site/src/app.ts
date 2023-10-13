import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
const savePage = require('./utils/savePage')
const Mustache = require('mustache')
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

export const handler = async (event: APIGatewayProxyEvent) => {
  let response: APIGatewayProxyResult

  console.log('event', event)
  console.time('Overall')

  const template = path.join(__dirname, 'templates', 'page-standard')

  // console.log('template', template)

  console.time('Render Page')
  const output = Mustache.render(template, JSON.parse(event?.body!))
  // console.log('output', output)

  console.timeEnd('Render Page')

  console.time('Put page in S3')
  response = await savePage.put(JSON.parse(event?.body!), output)
  console.timeEnd('Put page in S3')

  console.timeEnd('Overall')

  // response = {
  //   statusCode: 200,
  //   body: JSON.stringify(event),
  // }
  // return response
}
