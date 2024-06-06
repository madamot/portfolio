import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb'

const { INDEX_TABLE } = process.env

const client = new DynamoDBClient({})

export const handler = async (event: any) => {
  console.log('event', event)

  const pageCacheResult = event.pageCacheOutput

  console.time('Overall')

  const input = {
    Item: {
      Type: {
        S: 'Page',
      },
      Key: {
        S: pageCacheResult.urlPath,
      },
    },
    TableName: INDEX_TABLE,
  }
  const command = new PutItemCommand(input)
  const response = await client.send(command)

  console.log('res', response)

  console.timeEnd('Overall')
}
