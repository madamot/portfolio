export const ACCORDIONGROUP_FRAGMENT = `
  fragment AccordionGroup on AccordionGroupRecord {
    ... on AccordionGroupRecord {
      id
      _createdAt
      _isValid
      _modelApiKey
      _seoMetaTags {
        tag
      }
      _status
      _updatedAt
      displayAllAsOpen
      openInitial
      accordions {
        id
        _createdAt
        _isValid
        _modelApiKey
        _seoMetaTags {
          tag
        }
        _status
        _updatedAt
        summary
        content
      }
    }
  }
`
