import { HomepageRecord, ProjectRecord } from '../generated/graphql'
import { getFile } from './s3'

export const getCache = async (
  page: string,
  isPreview: boolean
): Promise<ProjectRecord | HomepageRecord | undefined> => {
  const bucket = isPreview ? 'page-madamot-live-preview-cache' : 'page-madamot-live-cache'

  console.log(`About to get page ${page} from bucket ${bucket}`)

  try {
    const pageContents = await getFile(bucket, page)
    return JSON.parse(pageContents ?? '')
  } catch (error) {
    console.error("The page doesn't exist in the cache", error)
  }
}
