import { gql } from '../generated'

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
