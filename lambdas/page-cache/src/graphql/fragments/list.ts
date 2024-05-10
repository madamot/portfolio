export const LIST_FRAGMENT = `
    fragment List on ListRecord {
        ... on ListRecord {
            id
            _createdAt
            _isValid
            _modelApiKey
            _seoMetaTags {
                tag
            }
            _status
            _updatedAt
            showListNumbers
            items {
                ...ContentBox
            }
        }
    }
`
