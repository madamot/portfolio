import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb'

const { INDEX_TABLE, AWS_ENV } = process.env

const client = new DynamoDBClient({})

enum IndexType {
  Page = 'PAGE',
  Recipe = 'RECIPE',
  App = 'APP',
}

export const handler = async (event: any) => {
  console.log('event', event)

  const pageCacheResult = event.pageCacheOutput

  const isRecipe = /.*\brecipes\b.*/g.test(pageCacheResult.urlPath)

  console.time('Overall')

  const input = {
    Item: {
      type: {
        S: isRecipe ? IndexType.Recipe : IndexType.Page,
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
      keywords: {
        S: pageCacheResult.keywords.join(', '),
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
