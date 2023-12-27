import { HomepageRecord, ProjectRecord } from '../generated/graphql'
import { getFile } from './s3'

export const getCache = async (
  page: string
): Promise<ProjectRecord | HomepageRecord | undefined> => {
  console.log('About to get: ', page)

  try {
    const pageContents = await getFile('page-madamot-live-cache', page)
    return JSON.parse(pageContents ?? '')
  } catch (error) {
    console.error("The page doesn't exist in the cache", error)
  }
}
