import { DynamoDBClient, ScanCommand } from '@aws-sdk/client-dynamodb'

const { INDEX_TABLE } = process.env

const client = new DynamoDBClient({})

export const handler = async (event: any) => {
  console.log('event', event)

  console.time('Overall')

  switch (event.field) {
    case 'search':
      const params = {
        TableName: INDEX_TABLE,
      }

      const command = new ScanCommand(params)
      const response = await client.send(command)

      console.log('response', response)

      return response.Items?.map(item => ({
        url: item.Key,
      }))
    case 'all':
      return 'You are searching for all'
    case 'page':
      return {}
    default:
      return {}
  }

  console.timeEnd('Overall')
}
