import { APIGatewayProxyEvent, APIGatewayProxyResult, SNSEvent } from 'aws-lambda'
import { savePage } from './utils/savePage'
import { render, generateMasterCSSFile } from './utils/generator'
import { getCache } from './utils/cache'
import { putFile } from './utils/s3'

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
  const page = await getCache(JSON.parse(event.Records[0].Sns.Message).Records[0].s3.object.key)

  console.log('page', page)
  console.timeEnd('Get page')

  console.time('Render Page')
  const output = await render(page)
  console.timeEnd('Render Page')

  console.time('Generate Styles')
  const styleSheet = generateMasterCSSFile()
  console.timeEnd('Generate Styles')

  console.time('Put stylesheet in S3')
  await putFile('page-madamot-live', 'index.css', styleSheet, 'text/css')
  console.timeEnd('Put page in S3')

  console.time('Put page in S3')
  await savePage(page, output)
  console.timeEnd('Put page in S3')

  console.timeEnd('Overall')

  // response = {
  //   statusCode: 200,
  //   body: JSON.stringify(event),
  // }
  // return response
}
