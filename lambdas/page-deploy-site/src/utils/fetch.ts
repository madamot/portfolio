const { DATOCMS_API_KEY } = process.env

const axios = require('axios')
const cmsKey = require('./cmsKey')

export const page = async (id: number) => {
  const key = await cmsKey.get()
  const pageData = await graphqlRequest(id, key)

  return pageData
}

const graphqlRequest = async (id: number, key: string) => {
  const endpoint = 'https://graphql.datocms.com'
  const headers = {
    'content-type': 'application/json',
    Authorization: `Bearer ${key}`,
  }
  const graphqlQuery = {
    operationName: 'fetchPage',
    query: `query fetchPage($id: ItemId) {
          project(filter: {id: {eq: $id}}) {
            id
            slug
            title
            seo {
              description
              image {
                id
                width
                height
                title
              }
              title
              twitterCard
            }
            parent {
              id
              title
              slug
            }
            navigation {
              id
              title
              menu {
                id
                displayText
                href
                target
                linkType
                link {
                  __typename
                  ... on ProjectRecord {
                    id
                    slug
                    title
                  }
                }
              }
            }
            content {
              __typename
              id
              title
            }
          }
        }`,
    variables: { id },
  }

  try {
    const response = axios({
      url: endpoint,
      method: 'post',
      data: graphqlQuery,
      headers: headers,
    })

    return response.data
  } catch (err) {
    console.log('error', err)

    return console.error(err)
  }
}
