import {
  BANNER_FRAGMENT,
  BILLBOARD_FRAGMENT,
  BUTTONGROUP_FRAGMENT,
  TEXT_FRAGMENT,
  PROMOCARD_FRAGMENT,
  IMAGE_FRAGMENT,
  SIDEBAR_FRAGMENT,
} from './fragments'

export const GET_PAGE = `
  ${BANNER_FRAGMENT}
  ${BILLBOARD_FRAGMENT}
  ${BUTTONGROUP_FRAGMENT}
  ${TEXT_FRAGMENT}
  ${PROMOCARD_FRAGMENT}
  ${IMAGE_FRAGMENT}
  ${SIDEBAR_FRAGMENT}

  query fetchPage($id: ItemId) {
    project(filter: {id: {eq: $id}}) {
      _createdAt
      _isValid
      _modelApiKey
      _seoMetaTags {
        tag
      }
      _status
      _updatedAt
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
        ...Banner
        ...BillBoard
        ...ButtonGroup
        ...Text
        ...PromoCard
        ...Image
      }
      sidebar {
        ...Sidebar
      }
      sidebarRight {
        ...Sidebar
      }
    }
  }
`

export const GET_HOMEPAGE = `
  ${BANNER_FRAGMENT}
  ${BILLBOARD_FRAGMENT}
  ${BUTTONGROUP_FRAGMENT}
  ${TEXT_FRAGMENT}
  ${PROMOCARD_FRAGMENT}
  ${IMAGE_FRAGMENT}
  ${SIDEBAR_FRAGMENT}

  query fetchHomepage {
    project: homepage {
      _createdAt
      _isValid
      _modelApiKey
      _seoMetaTags {
        tag
      }
      _status
      _updatedAt
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
        ...Banner
        ...BillBoard
        ...ButtonGroup
        ...Text
        ...PromoCard
        ...Image
      }
      sidebar {
        ...Sidebar
      }
    }
  }
`
