import { S3 } from '@aws-sdk/client-s3'

export const putFile = async (bucket: string, key: string, content: File) => {
  const params = {
    Bucket: bucket,
    Key: key,
    Body: content,
    ContentType: 'text/html',
    CacheControl: 'public, max-age=10, stale-while-revalidate=60, stale-if-error=600',
  }
  const s3 = new S3()
  return await s3.putObject(params)
}

export const getFile = async (bucket: string, key: string) => {
  var params = {
    Bucket: bucket,
    Key: key,
  }
  const s3 = new S3()
  const data = await s3.getObject(params)
  return data.Body!.toString()
}
