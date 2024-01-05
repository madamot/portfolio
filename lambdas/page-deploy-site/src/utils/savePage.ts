import { putFile } from './s3'

export const savePage = async (isPreview: boolean, cache: any, page: File) => {
  const key = destinationPath(cache, isPreview)
  const bucket = isPreview ? 'page-madamot-live-preview' : 'page-madamot-live'

  console.log(`Saving file to bucket ${bucket}`)

  return putFile(bucket, key, page, 'text/html')
}

const destinationPath = (cache: any, isPreview: boolean) => {
  return (
    (isPreview ? 'preview/' : '') +
    cache.project.location +
    (cache.project.location ? '/' : '') +
    'index.html'
  )
}
