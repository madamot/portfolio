export const SIDEBAR_FRAGMENT = `
    fragment Sidebar on SidebarRecord {
        id
        _createdAt
        _isValid
        _modelApiKey
        _seoMetaTags {
          tag
        }
        _status
        _updatedAt
        title
        sticky
        content {
            ...Text
            ...ButtonGroup
        }
    }
`
