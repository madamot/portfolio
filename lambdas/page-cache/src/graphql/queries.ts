import {
  ACCORDIONGROUP_FRAGMENT,
  BANNER_FRAGMENT,
  BILLBOARD_FRAGMENT,
  BUTTONGROUP_FRAGMENT,
  TEXT_FRAGMENT,
  PROMOCARD_FRAGMENT,
  IMAGE_FRAGMENT,
  SIDEBAR_FRAGMENT,
  HEADER_FRAGMENT,
  LIST_FRAGMENT,
  CONTENTBOX_FRAGMENT,
} from './fragments'

const page = `
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
    title
    twitterCard
    noIndex
    image {
      responsiveImage(imgixParams: {w: "1200", h: "630", fit: crop, ar: "1.91:1"}) {
        width
        height
        webpSrcSet
        src
      }
    }
    description
  }
  keywords {
    keyword
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
  header {
    ...Header
  }
  content {
    ...AccordionGroup
    ...Banner
    ...BillBoard
    ...ButtonGroup
    ...Text
    ...PromoCard
    ...Image
    ...ContentBox
    ...List
  }
  sidebarLeft {
    ...Sidebar
  }
  sidebarRight {
    ...Sidebar
  }
`

export const GET_PAGE = `
  ${ACCORDIONGROUP_FRAGMENT}
  ${BANNER_FRAGMENT}
  ${BILLBOARD_FRAGMENT}
  ${BUTTONGROUP_FRAGMENT}
  ${TEXT_FRAGMENT}
  ${PROMOCARD_FRAGMENT}
  ${IMAGE_FRAGMENT}
  ${SIDEBAR_FRAGMENT}
  ${HEADER_FRAGMENT}
  ${CONTENTBOX_FRAGMENT}
  ${LIST_FRAGMENT}

  query fetchPage($id: ItemId) {
    project(filter: {id: {eq: $id}}) {
      ${page}
    }
  }
`

export const GET_HOMEPAGE = `
  ${ACCORDIONGROUP_FRAGMENT}
  ${BANNER_FRAGMENT}
  ${BILLBOARD_FRAGMENT}
  ${BUTTONGROUP_FRAGMENT}
  ${TEXT_FRAGMENT}
  ${PROMOCARD_FRAGMENT}
  ${IMAGE_FRAGMENT}
  ${SIDEBAR_FRAGMENT}
  ${HEADER_FRAGMENT}
  ${CONTENTBOX_FRAGMENT}
  ${LIST_FRAGMENT}

  query fetchHomepage {
    project: homepage {
      ${page}
    }
  }
`
