export const HEADER_FRAGMENT = `
    fragment Header on HeaderRecord {
        ... on HeaderRecord {
            _modelApiKey
            title
            description
            image {
                id
                _modelApiKey
                image {
                    _createdAt
                    _updatedAt
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
                    alt
                    blurUpThumb
                    responsiveImage {
                        title
                        alt
                        webpSrcSet
                        src
                    }
                }
            }
        }
    }
`
