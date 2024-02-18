export const BILLBOARD_FRAGMENT = `
    fragment BillBoard on BillboardRecord {
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
        href
        _createdAt
        _isValid
        _seoMetaTags {
            tag
        }
        _status
        _updatedAt
        }
    }
`
