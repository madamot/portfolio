import axios from 'axios'
import { getCMSKey } from './cmsKey'
import { GET_PAGE, GET_HOMEPAGE } from '../graphql/queries'

export const getPageData = async (preview: boolean, id?: number) => {
  const key = await getCMSKey()
  const pageData = await graphqlRequest(preview, key, id)

  return pageData
}

const graphqlRequest = async (preview: boolean, key: string, id?: number) => {
  const endpoint = 'https://graphql.datocms.com'
  const headers = {
    'content-type': 'application/json',
    Authorization: `Bearer ${key}`,
    ...(preview && { 'X-Include-Drafts': true }),
  }

  let graphqlQuery

  if (id) {
    graphqlQuery = {
      operationName: 'fetchPage',
      query: GET_PAGE,
      variables: { id },
    }
  } else {
    graphqlQuery = {
      operationName: 'fetchHomepage',
      query: GET_HOMEPAGE,
    }
  }

  try {
    const response = await axios({
      url: endpoint,
      method: 'post',
      data: graphqlQuery,
      headers: headers,
    })

    return response.data.data
  } catch (err) {
    console.log('error', err)

    return console.error(err)
  }
}
