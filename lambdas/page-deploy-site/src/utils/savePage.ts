const s3 = require('./s3')

export const put = async (cache: any, page: File) => {
  const key = destinationPath(cache)

  console.log('Saving file: ' + key)

  return s3.putFile('page-madamot-live', key, page)
}

const destinationPath = (cache: any) => {
  return cache.project.location + (cache.project.location ? '/' : '') + 'index.html'
}
