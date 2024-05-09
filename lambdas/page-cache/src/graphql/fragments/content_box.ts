export const CONTENTBOX_FRAGMENT = `
    fragment ContentBox on ContentBoxRecord {
        ... on ContentBoxRecord {
            id
            _createdAt
            _isValid
            _modelApiKey
            _seoMetaTags {
                tag
            }
            _status
            _updatedAt
            content {
                ...AccordionGroup
                ...Banner
                ...ButtonGroup
                ...Text
                ...Image
            }
          }
    }
`
