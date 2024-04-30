import { SQSEvent } from 'aws-lambda'
import { SNSClient, PublishCommand } from '@aws-sdk/client-sns'
import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3'
import axios from 'axios'

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

export const handler = async (event: SQSEvent) => {
  console.log('event', event)

  // try {

  // } catch (error) {

  // }
}
