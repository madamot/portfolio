import { putFile } from './s3'

export const savePage = async (cache: any, page: File) => {
  const key = destinationPath(cache)

  console.log('Saving file: ' + key)

  return putFile('page-madamot-live', key, page, 'text/html')
}

const destinationPath = (cache: any) => {
  return cache.project.location + (cache.project.location ? '/' : '') + 'index.html'
}
