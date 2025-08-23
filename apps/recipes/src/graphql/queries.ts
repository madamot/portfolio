import { gql } from '../generated'

export const SEARCH_PAGES = gql(`
    query GetAllRecipes($q: String!) {
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
