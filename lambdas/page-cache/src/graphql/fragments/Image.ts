export const IMAGE_FRAGMENT = `
    fragment Image on ImageRecord {
        ... on ImageRecord {
          id
          _modelApiKey
          width
          height
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
`
