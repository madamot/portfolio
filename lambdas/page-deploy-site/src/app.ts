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

const { AWS_ENV } = process.env

export const handler = async (event: SNSEvent) => {
  let response: APIGatewayProxyResult

  console.log('event', event)

  console.time('Overall')

  const snsMessage = JSON.parse(event.Records[0].Sns.Message)

  const isPreview: boolean = snsMessage.preview
  const bucket = snsMessage.preview ? `page-madamot-${AWS_ENV}-preview` : `page-madamot-${AWS_ENV}`

  console.time('Get page cache')
  const pageCache = await getCache(snsMessage.key, isPreview)

  console.log('page cache', pageCache)
  console.timeEnd('Get page cache')

  console.time('Render Page')
  const renderedPage = pageCache && (await render(pageCache))
  console.timeEnd('Render Page')

  console.time('Generate Styles')
  const styleSheet = generateMasterCSSFile()
  console.timeEnd('Generate Styles')

  console.time('Put stylesheet in S3')
  await putFile(bucket, 'index.css', styleSheet, 'text/css')
  console.timeEnd('Put stylesheet in S3')

  console.time('Put page in S3')
  if (renderedPage) {
    await savePage(isPreview, pageCache, renderedPage)
  } else {
    console.error('The file failed to save to s3 due to nothing being rendered')
  }
  console.timeEnd('Put page in S3')

  console.timeEnd('Overall')

  // response = {
  //   statusCode: 200,
  //   body: JSON.stringify(event),
  // }
  // return response
}
