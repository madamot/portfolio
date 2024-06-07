"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const { INDEX_TABLE, AWS_ENV } = process.env;
const client = new client_dynamodb_1.DynamoDBClient({});
var IndexType;
(function (IndexType) {
    IndexType["Page"] = "PAGE";
    IndexType["App"] = "APP";
})(IndexType || (IndexType = {}));
const handler = async (event) => {
    console.log('event', event);
    const pageCacheResult = event.pageCacheOutput;
    console.time('Overall');
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
    };
    const command = new client_dynamodb_1.PutItemCommand(input);
    const response = await client.send(command);
    console.log('res', response);
    console.timeEnd('Overall');
};
exports.handler = handler;
