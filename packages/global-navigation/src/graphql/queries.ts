import { gql } from '@apollo/client'

export const SEARCH_PAGES = gql(`
    query Page($q: String!) {
      page {
          search(q: $q) {
            type
            name
            searchName
            url
            updatedAt
            createdAt
          }
      }
    }
  `)
