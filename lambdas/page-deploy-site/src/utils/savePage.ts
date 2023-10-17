const s3 = require('./s3')

export const put = async (event: any, page: File) => {
  const key = destinationPath(event)

  console.log('Saving file: ' + key)

  return s3.putFile('pages-madamot-live', key, page)
}

const destinationPath = (event: any) => {
  return event.entity.attributes.slug + (event.entity.attributes.slug ? '/' : '') + 'index.html'
}
