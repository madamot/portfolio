import { S3 } from '@aws-sdk/client-s3'

export const putFile = async (bucket: string, key: string, content: File) => {
  const params = {
    Bucket: bucket,
    Key: key,
    Body: content,
    ContentType: 'text/html',
  }
  const s3 = new S3()
  return await s3.putObject(params)
}
