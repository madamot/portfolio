const axios = require('axios')
const cmsKey = require('./cmsKey')
const queries = require('../graphql/queries')

export const getPageData = async (preview: boolean, id?: number) => {
  const key = await cmsKey.get()
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
      query: queries.GET_PAGE,
      variables: { id },
    }
  } else {
    graphqlQuery = {
      operationName: 'fetchHomepage',
      query: queries.GET_HOMEPAGE,
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
