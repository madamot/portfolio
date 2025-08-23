// import { ORM } from '@madamot/madamot-dynamo-database'
import { DynamoDBClient, QueryCommand } from '@aws-sdk/client-dynamodb'
import { unmarshall } from '@aws-sdk/util-dynamodb'

// import { Index, IndexType } from '../types/graphql.js'
// import { Index as IndexTable } from '../types/tables.js'
// import { Maybe } from 'graphql/jsutils/Maybe.js'

export interface IPagesService {
  all(table: string, argument: string): any
}

const client = new DynamoDBClient({})

export class PageService implements IPagesService {
  // Public declarations

  constructor() // private readonly indexTable: Readonly<ORM<IndexTable>>
  {}

  async all(table: string, argument: string) {
    const params = {
      TableName: table,
      ExpressionAttributeNames: {
        '#type': 'type',
        '#name': 'searchName',
        '#keywords': 'keywords',
      },
      ExpressionAttributeValues: {
        ':type': { S: 'PAGE' },
        ':searchTerm': { S: argument },
      },
      KeyConditionExpression: '#type = :type',
      FilterExpression: 'contains(#name, :searchTerm) OR contains(#keywords, :searchTerm)',
    }

    const command = new QueryCommand(params)
    const response = await client.send(command)

    return response?.Items?.map(item => unmarshall(item))
  }
}
