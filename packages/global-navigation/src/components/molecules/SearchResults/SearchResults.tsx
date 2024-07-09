import { SearchPage } from '../../../generated/graphql'
import { Maybe } from 'graphql/jsutils/Maybe'
import SearchResult from '../../atoms/SearchResult'

interface SearchResultsProps {
  results: Maybe<SearchPage[]>
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  if (results) {
    return (
      <div>
        {results.map(page => (
          <SearchResult page={page} />
        ))}
      </div>
    )
  }
}

export default SearchResults
