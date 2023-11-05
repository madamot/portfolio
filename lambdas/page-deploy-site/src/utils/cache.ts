import { SNSEvent } from 'aws-lambda'
const s3 = require('./s3')

export const get = async (event: SNSEvent) => {
  console.log('About to get: ', event)
}

const getPage = (event: any) => {
  return event.entity.attributes.slug + (event.entity.attributes.slug ? '/' : '') + 'index.html'
}
