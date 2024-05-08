import { SQSEvent } from 'aws-lambda'
import { SFNClient, StartExecutionCommand } from '@aws-sdk/client-sfn'

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

const stepFunctionClient = new SFNClient({ region: 'eu-west-1' })

export const handler = async (event: SQSEvent) => {
  console.log('event', event)

  console.time('Execute deployment journey')
  try {
    if (!event.Records || !event.Records.length) return
    console.info('Records:', event.Records)

    // iSite sometimes sends only one message with multiple publishes from different projects
    for (let record of event.Records) {
      const payLoad = JSON.parse(record.body)
      const preview = payLoad.event_type !== 'publish'

      const stateMachineData = {
        payLoad,
        preview,
      }

      const stepFunctionExecutionCommand = new StartExecutionCommand({
        stateMachineArn: process.env.PAGE_DEPLOYMENT_STATE_MACHINE,
        input: JSON.stringify(stateMachineData),
      })
      await stepFunctionClient.send(stepFunctionExecutionCommand)
    }
  } catch (err) {
    console.error(err)
  }
  console.timeEnd('Execute deployment journey')
}
