import { DynamoDBClient, QueryCommand } from '@aws-sdk/client-dynamodb'
import { unmarshall } from '@aws-sdk/util-dynamodb'

const { INDEX_TABLE } = process.env

const client = new DynamoDBClient({})

export const handler = async (event: any) => {
  console.log('event', event)

  console.time('Overall')

  switch (event.field) {
    case 'search':
      const params = {
        TableName: INDEX_TABLE,
        ExpressionAttributeNames: {
          '#type': 'type',
          '#name': 'searchName',
        },
        ExpressionAttributeValues: {
          ':type': { S: 'PAGE' },
          ':name': { S: event.arguments.q },
        },
        KeyConditionExpression: '#type = :type',
        FilterExpression: 'contains(#name, :name)',
      }

      const command = new QueryCommand(params)
      const response = await client.send(command)

      console.log('response', response)

      return response.Items?.map(item => unmarshall(item))
    case 'all':
      return 'You are searching for all'
    case 'page':
      return {}
    default:
      return {}
  }

  console.timeEnd('Overall')
}
