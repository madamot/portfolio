export const GET_PAGE = `query fetchPage($id: ItemId) {
    project(filter: {id: {eq: $id}}) {
      _modelApiKey
      id
      location
      name
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
        location
      }
      navigation {
        id
        title
        _modelApiKey
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
              location
              title
            }
          }
        }
      }
      content {
        _modelApiKey
        id
        title
      }
    }
  }
`

export const GET_HOMEPAGE = `
query fetchHomepage {
    project: homepage {
      _modelApiKey
      id
      location
      name
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
      navigation {
        id
        title
        _modelApiKey
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
              location
              title
            }
          }
        }
      }
      content {
        __typename
        id
        title
        _modelApiKey
      }
    }
  }
`
