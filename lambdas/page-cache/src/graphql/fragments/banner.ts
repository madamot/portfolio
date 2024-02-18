export const BANNER_FRAGMENT = `
    fragment Banner on BannerRecord {
        ... on BannerRecord {
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
            title
            displayType
        }
    }
`
