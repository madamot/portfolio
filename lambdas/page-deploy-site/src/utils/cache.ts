const s3 = require('./s3')

export const get = async (page: string) => {
  console.log('About to get: ', page)

  try {
    const pageContents = await s3.getFile('page-madamot-live-cache', page)
    return JSON.parse(pageContents)
  } catch (error) {
    return console.log("The page doesn't exist in the cache", error)
  }
}
