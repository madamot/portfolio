export const HEADER_FRAGMENT = `
    fragment Header on HeaderRecord {
        ... on HeaderRecord {
            _modelApiKey
            title
            description
        }
    }
`
