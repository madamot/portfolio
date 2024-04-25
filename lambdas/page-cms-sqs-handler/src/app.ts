import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { SNSClient, PublishCommand } from '@aws-sdk/client-sns'
import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3'
import axios from 'axios'
import { log } from 'console'

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

  const client = new S3Client({})
  const snsClient = new SNSClient({})

  console.log('event', event)

  console.time('Overall')

  console.time('Get all cache')
  const command = new ListObjectsV2Command({
    Bucket: 'page-madamot-live-cache',
  })

  console.log('topic name', process.env.TOPIC_NAME)

  try {
    const cache = await client.send(command)
    console.timeEnd('Get all cache')
    console.log('cache', cache.Contents)

    console.time('Publish notification to sns for each page cache')
    if (cache?.Contents!.length > 0) {
      cache?.Contents?.forEach(async cacheItem => {
        try {
          await snsClient.send(
            new PublishCommand({
              Message: JSON.stringify({
                key: cacheItem.Key,
              }),
              TopicArn: process.env.TOPIC_NAME,
            })
          )
        } catch (error) {
          console.error('failed to notify', error)
        }
      })
    }
  } catch (err) {
    console.error(err)
    await axios
      .post(
        'https://webhooks.datocms.com/Ju8aO4uXqB/deploy-results',
        { status: 'error' },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      )
      .then(response => {
        console.log('Alerted datoCMS of fail', response)
      })
      .catch(error => {
        console.error('failed to alert datoCMS', error)
      })
  }

  console.timeEnd('Publish notification to sns for each page cache')

  console.time('Alert DatoCMS of success')
  await axios
    .post(
      'https://webhooks.datocms.com/Ju8aO4uXqB/deploy-results',
      { status: 'success' },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    )
    .then(response => {
      console.log('Alerted datoCMS of success', response)
    })
    .catch(error => {
      console.error('failed to alert datoCMS', error)
    })
  console.timeEnd('Alert DatoCMS of success')

  console.timeEnd('Overall')
}
