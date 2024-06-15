import { DynamoDBClient, QueryCommand } from '@aws-sdk/client-dynamodb'
import { unmarshall } from '@aws-sdk/util-dynamodb'

import { FindManyProps, RowType } from './types'

export interface IORM<RowObj extends RowType> {
  findMany(args: FindManyProps<RowObj>)
}

const client = new DynamoDBClient({})
export class ORM<RowObj extends RowType> implements IORM<RowObj> {
  constructor(private readonly tableName: string) {}

  async create(record) {}

  async read(key) {}

  async findMany({ key, where }) {
    const params = {
      TableName: this.tableName,
      ExpressionAttributeNames: {
        '#type': 'type',
        '#name': 'searchName',
        '#keywords': 'keywords',
      },
      ExpressionAttributeValues: {
        ':type': { S: 'PAGE' },
        ':searchTerm': { S: where },
      },
      KeyConditionExpression: '#type = :type',
      FilterExpression: 'contains(#name, :searchTerm) OR contains(#keywords, :searchTerm)',
    }

    const command = new QueryCommand(params)
    const response = await client.send(command)

    return response.Items?.map(item => unmarshall(item))
  }

  async update(key, updateExpression, expressionAttributeValues) {}

  async delete(key) {}
}
