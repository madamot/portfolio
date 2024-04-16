export const PROMOCARD_FRAGMENT = `
    fragment PromoCard on PromoCardRecord {
        ... on PromoCardRecord {
            id
            _modelApiKey
            grid_style
            grid_columns
            style
            title
            description
            linkType
            href
            link {
              id
              location
              title
              name
            }
            cards {
              id
              title
              excerpt
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
                blurUpThumb(imgixParams: {w: "323", h: "200", fit: clip})
                responsiveImage(imgixParams: {w: "323", h: "200", fit: clip}) {
                  title
                  alt
                  webpSrcSet
                  src
                }
              }
              linkType
              href
              link {
                id
                location
                title
                name
              }
              _createdAt
              _isValid
              _modelApiKey
              _seoMetaTags {
                tag
              }
              _status
              _updatedAt
            }
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
