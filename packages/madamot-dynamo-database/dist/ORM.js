"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ORM = void 0;
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const util_dynamodb_1 = require("@aws-sdk/util-dynamodb");
const client = new client_dynamodb_1.DynamoDBClient({});
class ORM {
    constructor(tableName) {
        this.tableName = tableName;
    }
    async create(record) { }
    async read(key) { }
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
        };
        const command = new client_dynamodb_1.QueryCommand(params);
        const response = await client.send(command);
        return response.Items?.map(item => (0, util_dynamodb_1.unmarshall)(item));
    }
    async update(key, updateExpression, expressionAttributeValues) { }
    async delete(key) { }
}
exports.ORM = ORM;
