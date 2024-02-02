export const TEXT_FRAGMENT = `
    fragment Text on TextRecord {
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
    }
`
