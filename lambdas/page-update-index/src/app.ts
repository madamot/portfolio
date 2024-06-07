import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb'

const { INDEX_TABLE, AWS_ENV } = process.env

const client = new DynamoDBClient({})

enum IndexType {
  Page = 'PAGE',
  App = 'APP',
}

export const handler = async (event: any) => {
  console.log('event', event)

  const pageCacheResult = event.pageCacheOutput

  console.time('Overall')

  const input = {
    Item: {
      type: {
        S: IndexType.Page,
      },
      createdAt: {
        S: pageCacheResult.createdAt,
      },
      url: {
        S: `https://${AWS_ENV}.adamhorne.co.uk/${pageCacheResult.urlPath}`,
      },
      name: {
        S: pageCacheResult.name,
      },
      searchName: {
        S: pageCacheResult.name.toLowerCase(),
      },
      updatedAt: {
        S: new Date().toJSON(),
      },
    },
    TableName: INDEX_TABLE,
  }
  const command = new PutItemCommand(input)
  const response = await client.send(command)

  console.log('res', response)

  console.timeEnd('Overall')
}
