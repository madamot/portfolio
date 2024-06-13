import { DynamoDBClient, QueryCommand } from '@aws-sdk/client-dynamodb'

export class ORM {
  constructor(parameters) {}

  async create(record) {}

  async read(key) {}

  async update(key, updateExpression, expressionAttributeValues) {}

  async delete(key) {}
}
