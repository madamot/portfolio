// import { DynamoDBClient, QueryCommand } from '@aws-sdk/client-dynamodb'
// import { unmarshall } from '@aws-sdk/util-dynamodb'

import { IndexService } from './services/IndexService.js'

const { INDEX_TABLE } = process.env as { INDEX_TABLE: string }

// const pageIndexTableORM = new ORM(INDEX_TABLE as string)

const indexService = new IndexService()

export const handler = async (event: any) => {
  console.log('event', event)

  console.time('Overall')

  switch (event.field) {
    case 'search':
      return await indexService.pageService.all(INDEX_TABLE, event.arguments.q)
    case 'all':
      return 'You are searching for all'
    case 'page':
      return {}
    default:
      return {}
  }

  console.timeEnd('Overall')
}
