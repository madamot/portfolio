export const GET_PAGE = `query fetchPage($id: ItemId) {
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
        ... on BillboardRecord {
          _modelApiKey
          id
          title
          subtitle
          excerpt
          linkType
          link {
            id
            location
            title
            _createdAt
            _isValid
            _modelApiKey
            _seoMetaTags {
              tag
            }
            _status
            _updatedAt
          }
          automaticColour
          backgroundColour {
            hex
            alpha
            blue
            cssRgb
            green
            red
          }
          textColour
          image {
            url
            _createdAt
            _updatedAt
            basename
            colors {
              alpha
              blue
              cssRgb
              green
              hex
              red
            }
            customData
            exifInfo
            filename
            format
            md5
            mimeType
            size
            smartTags
            tags
            id
          }
          href
          _createdAt
          _isValid
          _seoMetaTags {
            tag
          }
          _status
          _updatedAt
        }
        ... on ButtonGroupRecord {
          id
          _createdAt
          _isValid
          _modelApiKey
          _seoMetaTags {
            tag
          }
          _status
          _updatedAt
          buttons {
            _createdAt
            _isValid
            _modelApiKey
            _seoMetaTags {
              tag
            }
            _status
            _updatedAt
            id
            displayText
            role
            href
            target
            linkType
            link {
              ... on ProjectRecord {
                id
                name
                location
                title
              }
            }
          }
        }
        ... on TextRecord {
          id
          _createdAt
          _isValid
          _modelApiKey
          _seoMetaTags {
            tag
          }
          _status
          _updatedAt
          text
        }
        ... on PromoCardRecord {
          id
          _modelApiKey
          title
          description
          linkType
          href
          link {
            id
            location
            title
            name
          }
          cards {
            id
            title
            excerpt
            image {
              url
            }
            linkType
            link {
              id
              location
              title
              name
            }
          }
          _createdAt
          _isValid
          _seoMetaTags {
            tag
          }
          _status
          _updatedAt
        }
      }
    }
  }
`

export const GET_HOMEPAGE = `
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
      ... on BillboardRecord {
        _modelApiKey
        id
        title
        subtitle
        excerpt
        linkType
        link {
          id
          location
          title
          _createdAt
          _isValid
          _modelApiKey
          _seoMetaTags {
            tag
          }
          _status
          _updatedAt
        }
        automaticColour
        backgroundColour {
          hex
          alpha
          blue
          cssRgb
          green
          red
        }
        textColour
        image {
          url
          _createdAt
          _updatedAt
          basename
          colors {
            alpha
            blue
            cssRgb
            green
            hex
            red
          }
          customData
          exifInfo
          filename
          format
          md5
          mimeType
          size
          smartTags
          tags
          id
        }
        href
        _createdAt
        _isValid
        _seoMetaTags {
          tag
        }
        _status
        _updatedAt
      }
      ... on ButtonGroupRecord {
        id
        _createdAt
        _isValid
        _modelApiKey
        _seoMetaTags {
          tag
        }
        _status
        _updatedAt
        buttons {
          _createdAt
          _isValid
          _modelApiKey
          _seoMetaTags {
            tag
          }
          _status
          _updatedAt
          id
          displayText
          role
          href
          target
          linkType
          link {
            ... on ProjectRecord {
              id
              name
              location
              title
            }
          }
        }
      }
      ... on TextRecord {
        id
        _createdAt
        _isValid
        _modelApiKey
        _seoMetaTags {
          tag
        }
        _status
        _updatedAt
        text
      }
      ... on PromoCardRecord {
        id
        _modelApiKey
        title
        description
        linkType
        href
        link {
          id
          location
          title
          name
        }
        cards {
          id
          title
          excerpt
          image {
            url
          }
          linkType
          link {
            id
            location
            title
            name
          }
        }
        _createdAt
        _isValid
        _seoMetaTags {
          tag
        }
        _status
        _updatedAt
      }
    }
  }
  }
`
