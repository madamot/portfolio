export const BUTTONGROUP_FRAGMENT = `
    fragment ButtonGroup on ButtonGroupRecord {
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
    }
`
